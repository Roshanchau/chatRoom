import Image from "next/image";
import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/firebase";

const Navbar = () => {


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
      const signOut = () => {
        auth.signOut();
      };
  return (
    <header>
      <nav className="flex flex-row items-center justify-between px-4 py-4">
        {/* logo */}
        <div className="text-neutral-100 text-4xl">Chat Room</div>
        {/* signin and signout buttons */}
        <div className="flex flex-row items-center justify-center">
          <button className="mr-4" onClick={googleSignIn} type="button">
            <Image src="/google.png" alt="singIn" width={150} height={150} />
          </button>
          <button type="button" onClick={signOut}>Sign Out</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
