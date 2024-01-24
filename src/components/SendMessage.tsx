import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


const SendMessage = () => {
    const [user] = useAuthState(auth);
    const[loading , setLoading]=useState(true)
  const sendMessage = async (event:any) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: message,
      name: user?.displayName,
      avatar: user?.photoURL,
      createdAt: serverTimestamp(),
      uid:user?.uid,
    });
    setMessage("");
    setLoading(false)
  };

  const [message, setMessage] = useState("");
  return (
    <form action="submit" onSubmit={(event) => sendMessage(event)}>
      <div className="flex flex-row gap-8 w-[800px] bg-slate-700 p-6 rounded-lg">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-[50px] text-neutral-900 p-4 rounded-md"
          placeholder="Enter Message"
        />
        <button type="submit" className="bg-neutral-900 px-8 py-3 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
