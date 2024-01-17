import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { Unsubscribe } from 'firebase/firestore';
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

interface MessageData {
    id: string;
    name: string;
    createdAt: number;
    avatar: string;
    text: string;
  }

  function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref: MutableRefObject<HTMLDivElement> = useRef(null!);
    React.useEffect(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  }

const ChatBox = () => {
    const [messages, setMessages] = useState<MessageData[]>([]);
    const ref = useChatScroll(messages)
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe: Unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const fetchedMessages:any[] = [];
        QuerySnapshot.forEach((doc) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });
        const sortedMessages:any = fetchedMessages.sort(
          (a, b) => a.createdAt - b.createdAt
        );
        setMessages(sortedMessages);
      });
    
      return unsubscribe;
  }, []);


  return (
    <main className="flex flex-col  gap-6 bg-green-700 ">
      <div className="flex flex-col  gap-3 p-6" ref={ref}>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <SendMessage/>
    </main>
  );
}

export default ChatBox