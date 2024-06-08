import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const { method } = req;
    const client = await clientPromise;

    const db = client.db('explicalo');
    
    switch(method){
        case 'GET':
            try {
                const users = await db.collection('users').find({}).toArray();
                res.status(200);
                res.json(users);
                console.log(users);
            } catch (error) {
                res.status(500).json({success: false});
            }
            break;
        case 'POST':    
            try {
                const user = await db.collection('users').insertOne(req.body);
                res.status(201);
                res.json(user);
            } catch (error) {
                res.status(500).json({success: false});
            }
            break;
    }
}