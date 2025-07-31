import { useState } from "react";
import { ProfilerChat } from "../../../../components/profilerChat";
import { CardChat } from "../card-chat";
import { ContainerGeneralChat } from "./style";

export function Chat() {
  const [state, setState] = useState(false);
  function handleCardChat() {
    setState((prev) => !prev);
  }
  return (
    <>
      <ContainerGeneralChat>
        <span>Jellyfy Direct</span>
        <div>
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
          <ProfilerChat onClick={handleCardChat} />
        </div>
      </ContainerGeneralChat>
      {state && <CardChat onClick={handleCardChat} />}
    </>
  );
}
