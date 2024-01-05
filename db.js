// // import mongoose from "mongoose";

// // export function dbConnection() {
// //     const params = {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //     }

// //     try {
// //         mongoose.connect("mongodb+srv://Rajaguru:Rajaguru@cluster0.qfih28h.mongodb.net/customers?retryWrites=true&w=majority", params)
// //         console.log("Database connected Sucessfully")
// //     } catch (error) {
// //         console.log("Error connecting DB----", error)
// //     }
// // }

// import mongoose from "mongoose";

// export async function dbConnection() {
//     const params = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     };

//     try {
//         await mongoose.connect("mongodb+srv://Rajaguru:Rajaguru@cluster0.qfih28h.mongodb.net/customers?retryWrites=true&w=majority", params);
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("Error connecting DB----", error);
//     }
// }
// import mongoose from "mongoose"

// const uri = 'mongodb+srv:///Rajaguru:Rajaguru@cluster0.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// db.js


import mongoose from "mongoose";

const url ="mongodb+srv://rmguru98:raja123@cluster0.enssx8e.mongodb.net/customers"
export async function connectToMongoDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    // console.log('Connected to MongoDB');
    console.log("Database connected Sucessfully")
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}


