import MessageList from './MessageList'
import { IoIosCheckmarkCircle } from "react-icons/io";


export const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
				  <MessageList messages={messages} />
				  <IoIosCheckmarkCircle className="my-icon color" size="24"/>
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
};