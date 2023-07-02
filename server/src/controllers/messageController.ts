import Message from "../model/Message.js";

async function getAllMessages(req: any, res: any) {
  const allMessages = await Message.find().sort({ datePosted: -1 });
  const numberOfDocs = await Message.countDocuments();

  res.status(200).json({ allMessages, numberOfDocs });
}

async function createNewMessage(req: any, res: any) {
  const { name, message, datePosted } = req.query;
  const newMessage = { name, message, datePosted };

  await Message.create(newMessage)
    .then(() => {
      res.status(201).json(newMessage);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error(err);
    });
}

export { getAllMessages, createNewMessage };
