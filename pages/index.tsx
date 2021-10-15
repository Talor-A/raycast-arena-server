import React from "react";
import ClipboardCopy from "../lib/components/ClipboardCopy";
import { useIdentity } from "../lib/withIdentity";

const Index = () => {
  const identity = useIdentity();
  if (!identity) {
    return null;
  }

  return (
    <main>
      <ClipboardCopy copyText={identity.accessToken} />
    </main>
  );
};

export default Index;
