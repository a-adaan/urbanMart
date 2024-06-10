import { MongoClient } from "mongodb";

if (!process.env.MONGO_STRING) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGO_STRING;
const options = {
  // serverApi: {
  //   version: ServerApiVersion.v1,
  //   strict: true,
  //   deprecationErrors: true,
  // },
};

let client;
let mongoClientPromise;

if (process.env.ENVIRONMENT === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongomongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongomongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongomongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

export default mongoClientPromise;
