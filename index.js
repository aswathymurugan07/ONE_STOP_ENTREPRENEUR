
const { MongoClient, ServerApiVersion } = require('mongodb');
const pass=encodeURIComponent("philosopher_26")
const uri = "mongodb+srv://Gokilavani:<{pass}>@atlascluster.euta3wd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ONESTOP").collection("expert");
  // perform actions on the collection object
  client.close();
});
module.exports = { client };