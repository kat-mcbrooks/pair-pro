import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const ChatToButton = ({ receiver }) => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  const startConversation = async ( userId, receiverId ) => {
    {console.log(userId)}
    try {
      const res = await axios.get(`/api/conversations/find/${userId}/${receiverId}`);
      const conversationId = res.data?._id
      // console.log(res.data)
      // console.log(conversationId)
      if(conversationId) {
        navigate(`/chat/${conversationId}`);
      } else {
        newConversation( userId, receiverId );
      }
    } catch (err) {
      console.log(err);
    }
  }

  const newConversation = async ( userId, receiverId ) => {
    try {
      const res = await axios.post('/api/conversations', { senderId: userId, receiverId: receiverId });
      const conversationId = res.data._id
      navigate(`/chat/${conversationId}`)
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <Button onClick={() => startConversation(state.user._id, receiver._id)} 
    variant="outline-info" >Chat to<br></br>{`${receiver?.name.split(" ")[0]}`}</Button>
  )
}

export default ChatToButton
