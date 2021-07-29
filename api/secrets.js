// import { MongoClient } from 'mongodb'

// let cachedDb = null

// async function connectToDatabase(uri) {
//   // If the database connection is cached,
//   // use it instead of creating a new connection
//   if (cachedDb) {
//     return cachedDb
//   }

//   const client = await MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   const db = await client.db()

//   // Cache the database connection
//   cachedDb = db
//   return db
// }

export default async (req, res) => {
  //   const db = await connectToDatabase(process.env.MONGODB_URI)

  //   const collection = await db.collection('works')
  //   const works = await collection.find({}).toArray()

  res.status(200).json([
    [
      {
        name: 'Group Name Test',
        secrets: [
          {
            name: 'Secret Name test',
            content: '<p>senha muito importante</p><p>seguida de algum texto maluco</p>'
          },
          {
            name: 'Secret Name test 2',
            content: '<p>senha muito importante</p><p>seguida de algum texto maluco 2</p>'
          }
        ]
      },
      {
        name: 'Group Name Test 2',
        secrets: [
          {
            name: 'Secret Name test 123',
            content: '<p>senha muito importante</p><p>seguida de algum texto maluco 1</p>'
          },
          {
            name: 'Secret Name test 33',
            content: '<p>senha muito importante</p><p>seguida de algum texto maluco 123</p>'
          }
        ]
      }
    ]
  ])
}
