import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react'
import ChatBox from '@/components/ChatBox';

const index = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar/>
      {!user? <Hero/>: <ChatBox/>}
    </div>
  )
}

export default index