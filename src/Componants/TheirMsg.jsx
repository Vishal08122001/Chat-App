import React from 'react'

function TheirMsg({ lastMessage, message }) {
    const isFirstMessageByUSer = !lastMessage || lastMessage.sender.username !== message.sender.username


    return (
        <div className='message-row'>

            {isFirstMessageByUSer && (
                <div className='message-avatar' style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}


            {message?.attachments?.length > 0 ?
                (
                    <img
                        src={message.attachments[0].file}
                        alt="msg-attachment"
                        className='message-image'
                        style={{ marginLeft: isFirstMessageByUSer ? '4px' : "48px" }} />
                ) :
                (
                    <div className='message' style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUSer ? '4px' : "48px" }}>

                        {message.text}
                    </div>
                )
            }

        </div>
    )
}

export default TheirMsg;
