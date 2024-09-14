// import asyncHandler from "express-async-handler";

// import { prisma } from "../config/prismaConfig.js";
// export const createResidency = asyncHandler(async (req, res) => {
//   const {
//     title,
//     description,
//     price,
//     address,
//     country,
//     city,
//     facilities,
//     image,
//     userEmail,
//   } = req.body.data;

//   console.log(req.body.data);
//   try {
//     const residency = await prisma.residency.create({
//       data: {
//         title,
//         description,
//         price,
//         address,
//         country,
//         city,
//         facilities,
//         image,
//         owner: { connect: { email: userEmail } },
//       },
//     });

//     res.send({ message: "Residency created successfully", residency });
//   } catch (err) {
//     if (err.code === "P2002") {
//       throw new Error("A residency with address already there");
//     }
//     throw new Error(err.message);
//   }
// });

// // function to get all the documents/residencies
// export const getAllResidencies = asyncHandler(async (req, res) => {
//   const residencies = await prisma.residency.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   res.send(residencies);
// });

// // function to get a specific document/residency
// export const getResidency = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const residency = await prisma.residency.findUnique({
//       where: { id },
//     });
//     res.send(residency);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });
import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail, // Ensure this is included in the request body
  } = req.body.data;

  console.log("Request Data:", req.body.data);

  if (!userEmail) {
    return res.status(400).send({ message: "User email is required" });
  }

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } }, // Ensure this is correct
      },
    });

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    console.error("Error creating residency:", err);
    if (err.code === "P2002") {
      return res
        .status(400)
        .send({ message: "A residency with this address already exists" });
    }
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
});

// Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    console.error("Error fetching residencies:", err);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
});

// Get a specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    if (!residency) {
      return res.status(404).send({ message: "Residency not found" });
    }
    res.send(residency);
  } catch (err) {
    console.error("Error fetching residency:", err);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
});
