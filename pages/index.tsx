import React from "react";
import ClipboardCopy from "../lib/components/ClipboardCopy";
import Footer from "../lib/components/Footer";
import { useIdentity } from "../lib/withIdentity";

const Index = () => {
  const identity = useIdentity();
  if (!identity) {
    return null;
  }

  return (
    <>
      <main>
        <h1>Authentication Succeeded!</h1>
        <p>copy your auth token and paste it into raycast settings:</p>
        <ClipboardCopy copyText={identity.accessToken} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
