import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = (message: any) => {
  const [user] = useAuthState(auth);
  const{name , avatar , text , uid}=message?.message
  return (
    <div className={`flex flex-row gap-4 justify-center w-[600px] bg-slate-600   ${uid===user?.uid ? "ml-auto": ""}`}>
        <img src={avatar} alt="profile"  className="h-[50px] w-[50px] rounded-full"/>
      <div className="flex flex-col justify-center items-center">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
