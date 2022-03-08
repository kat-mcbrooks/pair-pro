import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Conversation = ({ conversation, currentUser, isCurrent }) => {
  const [user, setUser] = useState(null);
  const color = isCurrent ? 'danger' : 'info'

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
      <Button className="conversationName" variant={color}>{user?.name}</Button>
      <br></br>
    </div>
  );
};

export default Conversation;
