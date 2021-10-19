import React, {useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { SocketProvider } from "../contexts/SocketProvider";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";


function App() {
  const [id, set_id] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (
      <>
        {id ?  dashboard : <Login onIdSubmit={set_id} />}
        
     </>
  )
}
export default App;
