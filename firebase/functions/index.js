const functions = require("firebase-functions");
const omit = require("lodash.omit");
const cors = require("cors")({ origin: true });

const firebase = require("firebase-admin");
firebase.initializeApp();

const db = firebase.firestore();

const collectionName = "questions";

exports.getRandom = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    await db
      .collection(collectionName)
      .get()
      .then((res) => {
        var pack_data = [];
        console.log(res);
        res.forEach((datax) => {
          pack_data.push({ id: datax.id });
        });
        for (var x = 0; x < pack_data.length; x++) {
          var randomData = Math.floor(Math.random() * pack_data.length + 1);
          db.collection(collectionName)
            .doc(pack_data[x].id)
            .update({ random: randomData });
        }
        return;
      })
      .catch((err) => {
        return response.status(404).send("ERROR " + err);
      });

    const arr = [];
    const result = await db
      .collection(collectionName)
      .orderBy("random", "desc")
      .limit(3)
      .get();
    result.forEach((res) => {
      arr.push(Object.assign({ id: res.id }, omit(res.data(), "random")));
    });
    return response.send(arr);
  });
});
