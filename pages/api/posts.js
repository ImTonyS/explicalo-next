import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { method } = req;
  const client = await clientPromise;

  const db = client.db("explicalo");

  switch (method) {
    case "GET":
      try {
        const posts = await db.collection("posts").find({}).toArray();
        res.status(200);
        res.json(posts);
        console.log(posts);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "POST":
      try {
        const posts = await db.collection("posts").insertOne(req.body);
        res.status(201);
        res.json(posts);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "DELETE":
      //const postId = query.id;
      try {
        const result = await db
          .collection("posts")
          .deleteOne({ _id: ObjectId() });
      } catch {
        console.error("No se logro eliminar el post");
      }
  }
}
