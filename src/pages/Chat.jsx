import { useEffect, useState } from "react";
import axios from 'axios';

function Chat() {
    // GET THE USER'S PROFILE DETAILS USING THE AUTH TOKEN
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        axios.get('http://127.0.0.1:8000/api/getUserByToken', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => setUser(res.data.user))
        .catch(err => console.error('Error fetching user:', err));
    }, []);

    return (
        <>
            <h1 className="text-black">Chat Page</h1>
            {user && (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </>
    )
}

export default Chat;
