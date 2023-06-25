import React from "react";
import './globals.css'
import Modal from "../components/Modal";
import { UserContextProvider, useUser } from '@/lib/useUser';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <UserContextProvider>
    <Modal></Modal>
      <Component {...pageProps} />
      </UserContextProvider>
      </>
  );
}

export default MyApp;