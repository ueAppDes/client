import React, { useState, useRef, useCallback } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';

export default function ShowConversation() {

    const [text, setText] = useState('');
    const lastMessageRef = useRef()
    const setRef = useCallback(node => {
        if (node) {
            
            node.scrollIntoView({smooth: true})
        }
    }, [])
    const {sendMessage, selectedConversation} = useConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r => r.id), text)
        setText('')
    }
    

    return (
        <div className="d-flex flex-column flex-grow-1 " >
            <div className="flex-grow-1 overflow-auto" >
                <div className=" d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedConversation.messages.map((message, index) => {
                        const lastMessage = (selectedConversation.messages.length - 1) === index
                        return(
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end': 'align-self-start'}`}
                            >
                                <div className={`text-muted small ${message.fromMe ? 'text-right' : 'text-center'}`}>
                                    {message.fromMe ? 'Sen' : message.senderName}
                                </div>
                                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'bg-secondery text-black'}`}>
                                    {message.text}
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3" >
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            style={{height:'75px', resize: 'none'}}
                        />
                        <InputGroup.Append>
                            <Button type="submit" className="m-2">Gönder</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
