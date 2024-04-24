"use client";

import { useCallback, useEffect, useState } from "react";
import Talk from "talkjs";
import { Session, Inbox } from "@talkjs/react";
import Cookies from "universal-cookie";

const APP_ID = process.env.TALKJS_APP_ID || "tGsFLBOZ";

export default function ChatAdmin() {
  const cookies = new Cookies();
  const [user, setUser] = useState({
    _id: "",
    name: "",
    username: "",
    email: "",
  });
  const guest = Math.floor(1000000 + Math.random() * 9000000);
  const userId = user && user._id ? String(user._id) : `guest${guest}`;
  const userName= user && user.name ? user.name : `Guest#${guest}`;
  const userEmail = user && user.email ? user.email : `guest${guest}@mail.com`;

  useEffect(() => {
    const userId = cookies.get("UserId");
    const name = cookies.get("Name");
    const username = cookies.get("Username");
    const email = cookies.get("Email");
    setUser({
      _id: userId,
      name: name,
      username: username,
      email: email,
    });
  }, []);

  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "admin",
        name: "Admin",
        email: "admin@mail.com",
        photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
        welcomeMessage: "Hey, how can I help?",
      }),
    []
  );

  const syncConversation = useCallback(
    (session) => {
      const conversation = session.getOrCreateConversation(userId);

      const other = new Talk.User({
        id: userId,
        name: userName,
        email: userEmail,
        photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
        welcomeMessage: "Hi!",
      });
      conversation.setParticipant(session.me);
      conversation.setParticipant(other);

      return conversation;
    },
    [user, guest]
  );

  return (
    <Session appId={APP_ID} syncUser={syncUser}>
      <Inbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "500px" }}
      ></Inbox>
    </Session>
  );
}
