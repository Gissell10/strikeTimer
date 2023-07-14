import styles from "/components/home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.timeForm}>
        <p>welcome,{session.user.email}</p>
        <button onClick={() => signOut()}> Sign out</button>
      </div>
    );
  } else {
    return (
      <div className={styles.timeForm}>
        <p> You aren't signed In</p>
        <button onClick={() => signIn()}> Sign In</button>
      </div>
    );
  }
};

export default login;
