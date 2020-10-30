async function main() {
    const { MongoClient } = require('mongodb');
    //const { mainModule } = require('process');
    //var url = "mongodb://localhost:27017/mydb";

    const uri = "mongodb+srv://testuser:test123@cluster0.bmzze.mongodb.net/Cluseter0?retryWrites=true&w=majority";

    const client = new MongoClient(uri);



    try {
        await client.connect();
        await listDatabases(client);
        await insertData(client);
    } catch (e) {
        console.error(e);
    }

    finally {
        await client.close();
    }



}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function insertData(client) {
    var myobj = { user: "test", emotion: "happy" };
    entry = await client.db().insertOne(myobj);
}

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     var dbo = db.db("mydb");
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });