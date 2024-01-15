// // import mongoose from "mongoose";

// // const url ="mongodb+srv://rmguru98:raj1234@cluster0.gssjabn.mongodb.net/customers"
// // export async function connectToMongoDB() {
// //   try {
// //     await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// //     // console.log('Connected to MongoDB');
// //     console.log("Database connected Sucessfully")
// //   } catch (error) {
// //     console.log("Error connecting DB----", error)
// //     // console.error('MongoDB connection error:', error);
// //   }
// // }

// // import mongoose from "mongoose";

// // export function dbConnection() {
// //     const params = {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //     }

// //     try {
// //         mongoose.connect("mongodb+srv://rmguru98:raja123@cluster0.enssx8e.mongodb.net/customers", params)
// //         console.log("Database connected Sucessfully")
// //     } catch (error) {
// //         console.log("Error connecting DB----", error)
// //     }
// // }


// import mongoose from "mongoose";

// export function dbConnection() {
//     const params = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }

//     try {
//         // mongoose.connect("mongodb+srv://rmguru98:raj1234@cluster0.7wb6jvt.mongodb.net/customers?retryWrites=true&w=majority", params)
//         mongoose.connect("mongodb+srv://rmguru98:raj1234@cluster0.gssjabn.mongodb.net/customers?retryWrites=true&w=majority", params)
//         console.log("Database connected Sucessfully")
//     } catch (error) {
//         console.log("Error connecting DB----", error)
//     }
// }



import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://rmguru98:raj1234@cluster0.gssjabn.mongodb.net/customers?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}
