import getRelativeTime from "../../utils/CalculateRelativeTime";
import messageObject from "../MessageObject";

export default function Message(props: { messageObject: messageObject; index: number; messageCount: number }) {
  return (
    <>
      <div className="user-message">
        <div className="message-info">
          <div className="user-info">
            <h5>{props.messageObject.name}</h5>
            <small>{"#" + (props.messageCount - props.index)}</small>
          </div>
          <small>{getRelativeTime(props.messageObject.datePosted!)}</small>
        </div>

        <p className="">{props.messageObject.message}</p>
      </div>
    </>
  );
}
