import mongoose from "mongoose";

const DB: string = "mongodb://localhost/Auth";

export default async function DBconnect() {
  try {
    const myConnection = await mongoose.connect(DB);
    console.log(`DB is connected ${myConnection.connection.host}`);
  } catch (error) {
    console.log("Unable to connected");
  }
}
