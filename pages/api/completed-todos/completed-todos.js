import { MongoClient } from "mongodb";

const header = async (req, res) => {
  if (req.method === "PUT") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mymailaditya:AfxKwayGSPGxF16h@clusters.n5i7lds.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result =await todosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "todos inserted" });
  }
};

export default header;
