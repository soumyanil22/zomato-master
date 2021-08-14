import Mongoose from "mongoose";

const FoodSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    descript: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
      type: Mongoose.Types.ObjectId,
      ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
      {
        type: Mongoose.Types.ObjectId,
        ref: "Foods",
      },
    ],
    restaurant: {
      type: Mongoose.Types.ObjectId,
      ref: "Restaurants",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = Mongoose.model("Foods", FoodSchema);
