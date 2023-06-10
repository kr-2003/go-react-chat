import React, { useEffect } from 'react'
import Message from '../Message'

function ChatHistory(props) {
    const messages = props.chatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data} />);
    console.log(messages)
   console.log("heelo from histiry")
    
  return (
    <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
                <div class="col-start-1 col-end-8 p-3 rounded-lg">

                  {messages}
                </div>
              </div>
            </div>
          </div>
  )
}

export default ChatHistory