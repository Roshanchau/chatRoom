import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = (message: any) => {
  const [user] = useAuthState(auth);
  const{name , avatar , text , uid}=message?.message
  return (
    <div className={`flex flex-row gap-4 justify-start w-[40%] bg-neutral-100 text-neutral-900 px-6 py-3 rounded-lg ${uid===user?.uid ? "ml-auto": "mr-auto"}`}>
        <img src={avatar} alt="profile"  className="h-[50px] w-[50px] rounded-full"/>
      <div className="flex flex-col justify-start">
        <p className="font-semibold text-lg">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
