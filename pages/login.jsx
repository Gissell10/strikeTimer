import React from "react";
import { UseSession, signIn, signOut, useSession } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  return <div>login</div>;
};

export default login;
