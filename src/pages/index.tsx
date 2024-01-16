import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react'
import SendMessage from '@/components/SendMessage';

const index = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar/>
      {!user? <Hero/>: <SendMessage/>}
    </div>
  )
}

export default index