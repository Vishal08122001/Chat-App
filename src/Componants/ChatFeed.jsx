import React from 'react';
import MsgForm from './MsgForm';
import MyMsg from "./MyMsg";
import TheirMsg from './TheirMsg';




function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadreceipt = (message, isMyMessege) => {
        chat.people.map((person, index) => {
            person.last_read === message.id && (
                <div
                    key={`read_${index}`} className="read-receipt"
                    style={{
                        float: MyMsg ? "right" : "left",
                        backgroundImage: `url(${person?.person?.avatar})`
                    }}

                />
            )
        })
    }


    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessege = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{ width: "100%" }}>
                    <div className="message block">
                        {
                            isMyMessege ? <MyMsg message={message} /> : <TheirMsg message={message} lastMessage={message[lastMessageKey]} />
                        }
                    </div>

                    <div className="readReceipt" style={{ marginRight: isMyMessege ? '18px' : "0px", marginLeft: isMyMessege ? '0px' : "68px" }} >
                        {renderReadreceipt(message, MyMsg)}
                    </div>
                </div>
            )

        })
    }


    if (!chat) {
        return 'Loading...';
    }

    return (
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">{chat.people.map((person) => `${person.person.username}`)}</div>

            </div>
            {renderMessages()}
            <div style={{ height: "100px" }} />

            <div className="message-form-container">
                <MsgForm {...props} chatID={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;
