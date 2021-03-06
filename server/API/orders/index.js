// Libraries
import express from "express";
import passport from "passport";

// Database model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
Route    /
Des      Get all orders based on id
Params   id
Access   Public
Method   GET
*/
Router.get("/", async (req, res) => {
  try {
    const { id } = req.params;

    const getOrders = await OrderModel.findOne({ user: _id });

    if (getOrders) {
      return res.status(404).json({ error: error.message });
    }

    return res.status(200).json({ oders: getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /new
Des      Add new order
Params   _id
Access   Public
Method   POST
*/
Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails },
      },
      { new: true }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
