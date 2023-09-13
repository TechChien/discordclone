"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";

export const ModalProvider = () => {
  const [isMounting, setMounting] = useState(false);
  useEffect(() => {
    if (!isMounting) {
      setMounting(true);
    }
  }, []);

  //server hydration
  if (!isMounting) return null;
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};
