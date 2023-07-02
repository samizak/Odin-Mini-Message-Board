import mongoose, { ConnectOptions } from "mongoose";

export default async function connectDB() {
  await mongoose
    .connect(process.env.DATABASE_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    } as ConnectOptions)
    .then((db) => {
      console.log("Database Connected Successfully.");
    })
    .catch((err) => {
      console.error(`Error Connections to the Database -`, err);
    });
}
