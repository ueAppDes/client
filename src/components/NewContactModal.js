import React, {useRef} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({closeModel}) {

    const idRef = useRef()
    const nameRef = useRef()
    const {createContact} = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault();
        createContact(idRef.current.value, nameRef.current.value)
        closeModel();
    }

    return (
        <>
            <Modal.Header closeButton>Yeni Kişi Oluştur</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>İsim</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit" className="m-2 ">Oluştur</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
