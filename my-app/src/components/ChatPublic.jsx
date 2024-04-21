"use client";

import { useCallback, useState } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";

const APP_ID = process.env.TALKJS_APP_ID || "tGsFLBOZ";

export default function ChatPublic() {
  const [isOpen, setIsOpen] = useState(false);

  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "test",
        name: "test",
        email: "frank@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
        welcomeMessage: "Hi!",
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    const conversation = session.getOrCreateConversation("new_conversation");

    const other = new Talk.User({
      id: "nina",
      name: "Admin",
      email: "nina@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
      welcomeMessage: "Hey, how can I help?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-[125px] right-[10px] z-50 w-[480px]">
          <Session appId={APP_ID} syncUser={syncUser}>
            <Chatbox
              syncConversation={syncConversation}
              style={{ width: "100%", height: "500px" }}
            ></Chatbox>
          </Session>
        </div>
      )}
      <button
        onClick={openModal}
        className="btn btn-accent h-[60px] w-[60px] rounded-[30px] fixed bottom-[50px] right-[50px] z-50"
      >
        {!isOpen ? (
          <svg
            className="w-[50px] h-[50px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50px] h-[50px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
