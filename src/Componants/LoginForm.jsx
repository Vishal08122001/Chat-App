import React, { useState } from 'react'
import axios from 'axios';

function LoginForm() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("clicked")

        const authObject = { "Project-ID": "f4288efd-858b-4a39-901b-ccab94758b10", "User-Name": userName, "User-Secret": password }

        try {

            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();


        } catch (error) {
            setError("Oops, Incorrect Username or Password")
        }
    }

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <p style={{ textAlign: "center", color: "white", marginTop: "-20px" }}>By Vishal</p>
                <form action="" onSubmit={handleSubmit}>
                    <input style={{ marginTop: "20px" }} type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} className="input" placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="input" placeholder='Password' required />
                    <div align="center">
                        <button className='button' type='Submit'>
                            <span>Start Chatting</span>
                        </button>
                    </div>

                    <h2 className='error'>{error}</h2>
                </form>
            </div>

        </div>

    )
}

export default LoginForm
