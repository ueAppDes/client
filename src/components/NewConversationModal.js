import React, {useRef, useState}  from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'

export default function NewConversationModal({closeModel}) {
  
    const {createConversation} = useConversations()

    const [selectedContactIds, set_selectedContactIds] = useState([])
    const {contacts} = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModel()
    }

    const handleCheckboxChange = (contactId) => {
        set_selectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }

        })
    }
    return (
        <>
            <Modal.Header closeButton>Yeni Konuşma Oluştur</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id} >
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                                />
                        </Form.Group>
                    ))}
                    <Button type="submit" className="m-2 ">Oluştur</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
