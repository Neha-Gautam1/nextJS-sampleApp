// pages/index.js
import Image from "next/image";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Inter } from "next/font/google";
import codeImage from "../../public/code.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log('Session', session);

  if (!session) {
    return <button onClick={signIn}>Login</button>;
  }

  return (
    <>
      <Image src={codeImage} alt="Code Image" />
      <h1>Hello {session.user.name}</h1>
      <button onClick={signOut}>Logout</button>
    </>
  );
}

import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
