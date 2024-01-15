import Image from "next/image";
import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/firebase";

const Hero = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="flex flex-col items-center justify-center  h-[550px]">
      <h1 className="text-3xl mb-6">Welcome to the chat room.</h1>
      <span>Click on this button to Signin</span>
      <button className="mr-4 mt-4" onClick={googleSignIn} type="button">
        <Image src="/google.png" alt="singIn" width={150} height={150} />
      </button>
    </div>
  );
};

export default Hero;
