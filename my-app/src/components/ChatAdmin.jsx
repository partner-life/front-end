"use client";

import { useCallback } from "react";
import Talk from "talkjs";
import { Session, Inbox } from "@talkjs/react";

const APP_ID = process.env.TALKJS_APP_ID || "tGsFLBOZ";

export default function ChatAdmin() {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "nina",
        name: "Admin",
        email: "nina@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
        welcomeMessage: "Hey, how can I help?",
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    const conversation = session.getOrCreateConversation("new_conversation");

    const other = new Talk.User({
      id: "test123",
      name: "test123",
      email: "frank@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Hi!",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <Session appId={APP_ID} syncUser={syncUser}>
      <Inbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "500px" }}
      ></Inbox>
    </Session>
  );
}
