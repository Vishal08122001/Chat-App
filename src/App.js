import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import React, { useEffect, useState } from 'react';
import ChatFeed from "./Componants/ChatFeed"
import LoginForm from './Componants/LoginForm';

function App() {
    // const [isLoading, setLoading] = useState(true)

    // function someRequest() {
    //     return new Promise(resolve => setTimeout(() => resolve(), 2500))
    // }

    // useEffect(() => {
    //     someRequest().then(() => {
    //         const Loader = document.querySelector(".loader-container");

    //         if (Loader) {
    //             Loader.remove();
    //             setLoading(!isLoading)
    //         }
    //     })
    // });

    // if (isLoading) {
    //     return null
    // }

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine

            height="100vh"
            projectID="f4288efd-858b-4a39-901b-ccab94758b10"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
        //renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // renderNewChatForm={(creds) => <ChatFeed />}

        />
    )
}

export default App
