import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({children}) {
    
    const [contacts, set_contacts] = useLocalStorage("contacts", [])

    const createContact = (id, name) => {
        set_contacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }
    
    return (
        <ContactsContext.Provider value={{contacts, createContact}}>
          {children}  
        </ContactsContext.Provider>
    )
}
