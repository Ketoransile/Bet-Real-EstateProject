import express from "express";
import jwtCheck from "../config/auth0Config.js";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userCntrl.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/tofav/:rid", jwtCheck, toFav);
router.post("/allFav", jwtCheck, getAllFavorites);

export { router as userRoute };
