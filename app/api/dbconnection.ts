import { MongoClient, ServerApiVersion } from 'mongodb';

let cachedClient : MongoClient | null = null;
let cachedDB : any | null = null;

export const connectToDB = async () => {

    if(cachedClient && cachedDB){
        return ({client: cachedClient, db: cachedDB})
    }

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@techoven.8ebjyef.mongodb.net/?appName=TechOven`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    
    await client.connect();
    
    cachedClient = client;
    cachedDB = client.db('techOvenDB');

    return {client, db: client.db('techOvenDB')}

}
