import { useState } from "react";
import messageObject from "./MessageObject";
import moment from "moment";

export default function MessageForm(props: { messageList: messageObject[]; setMessageList: React.Dispatch<React.SetStateAction<messageObject[]>> }) {
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");

  return (
    <div className="message-form">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => {
              setFormName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <input
            id="message"
            type="text"
            onChange={(e) => {
              setFormMessage(e.target.value);
            }}
          />
        </div>

        <button
          className="submit-btn"
          onClick={(e) => {
            e.preventDefault();

            const _curDate = moment.utc().format();
            const _url = `http://localhost:3000/new?name=${formName}&message=${formMessage}&datePosted=${_curDate}`;

            fetch(_url, {
              method: "POST",
            })
              .then(() => {
                props.setMessageList([new messageObject(formName, formMessage, _curDate as any), ...props.messageList]);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
