import mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IMessage {
  name: string;
  message: string;
  datePosted: Date;
}

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
});

export default model<IMessage>("Message", messageSchema);
