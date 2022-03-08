import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own dark-orange-text" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message.messageBody}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
      <br></br>
    </div>
  );
};

export default Message;
