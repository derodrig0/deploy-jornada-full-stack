import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://derodrigo:fpnB6gjiw8NzZVbl@cluster0.lzmo8yf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("replicaSpotify");

// const songsCollection = await db.collection("songs").find({}).toArray();

// console.log(songsCollection);
