import axios from "axios";
import { useEffect, useState } from "react";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <span className="conversationName">{user?.name}</span>
    </div>
  );
};

export default Conversation;
