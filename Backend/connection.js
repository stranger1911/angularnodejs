const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "courses";
const client = new MongoClient(url);

// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }

async function getData() {
  let result = await client.connect();
  let db = result.db(dataBase);
  // let collection = db.collection("coursesCardsData");
  return db;
}

module.exports = getData;
