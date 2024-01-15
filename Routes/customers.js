import express from "express"
import { Customers } from "../models/customers.js";
import { isAuthenticated } from "../controllers/auth.js";

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
        const customers = await Customers.find().populate("user", "name")
        if (!customers) {
            return res.status(400).json({ message: "Couldn't fond any Info" })
        }
        res.status(200).json({
            message: "Sucessfully got your data",
            data: customers
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.get("/user", async (req, res) => {
    try {
        const customers = await Customers
            .find({ user: req.user._id })
            .populate("user", "name email")
        if (!customers) {
            return res.status(400).json({ message: "Couldn't any Document" })
        }
        res.status(200).json({ message: "Sucessfully got your data", data: customers })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.post("/add", isAuthenticated, async (req, res) => {
    try {
      const postedDate = new Date().toJSON().slice(0, 10);
      const customers = await new Customers({
        ...req.body,
        date: postedDate,
        user: req.user._id,
      }).save();
  
      if (!customers) {
        return res.status(400).json({ message: "Error in saving the customers" });
      }
  
      res.status(200).json({ message: "Customers saved Successfully", data: customers });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

// router.post("/add", async (req, res) => {
//     // new date logic
//     try {
//         const postedDate = new Date().toJSON().slice(0, 10);
//         const customers = await new Customers(
//             {
//                 ...req.body,
//                 date: postedDate,
//                 user: req.user._id
//             }
//         ).save()
//         if (!customers) {
//             return res.status(400).json({ message: "Error in saving the customers" })
//         }
//         res.status(200).json({ message: "Customers saved Successfully", data: customers })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: "Internal server error" })
//     }
// })

router.put("/edit/:id", async (req, res) => {
    try {
        const updatedCustomers = await Customers.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedCustomers) {
            return res
                .status(400)
                .json({ message: "Error Occured" })
        }
        res.status(200).json({ message: "Sucessfully updated", data: updatedCustomers })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deletedCustomers = await Customers.findByIdAndDelete({
            _id: req.params.id
        })
        if (!deletedCustomers) {
            return res
                .status(400)
                .json({ message: "Error Occured" })
        }
        res.status(200).json({ message: "Sucessfully Deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

export const customersRouter = router;