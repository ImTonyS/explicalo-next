import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { method, query } = req;
  const postId = query.id;

  if (method === "DELETE") {
    const uri = process.env.MONGODB_URI; // Asegúrate de tener tu URI de conexión a MongoDB configurada
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const db = client.db("explicalo");
      const postsCollection = db.collection("posts");

      const result = await postsCollection.deleteOne({
        _id: new ObjectId(postId),
      });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Post eliminado correctamente" });
      } else {
        res.status(404).json({ message: "Post no encontrado" });
      }
    } catch (error) {
      console.error("Error al eliminar el post:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await client.close();
    }
  } else {
    // Método HTTP no permitido
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
