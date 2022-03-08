import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios(`/api/users/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <Button className="conversationName" variant="info">{user?.name}</Button>
      <br></br>
    </div>
  );
};

export default Conversation;
