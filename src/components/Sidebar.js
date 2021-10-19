import React, {useState} from 'react'
import { Tab, Nav, Button, Modal} from 'react-bootstrap'
import Conversations from './Conversations'
import Contact from './Contact'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

const CONVERSATIONS_KEY = "conversations"
const CONTACT_KEY = "contacts"

export default function Sidebar({ id }) {
    const [activeKey, set_activeKey] = useState(CONVERSATIONS_KEY)
    const [modelOpen, set_modelOpen] = useState(false)
    const conversationOpen = activeKey === CONVERSATIONS_KEY

    const closeModel = () => {
        set_modelOpen(false)
    }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column" >
            <Tab.Container activeKey={activeKey} onSelect={set_activeKey} >
                <Nav variant="tabs" className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY} >Konuşmalar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACT_KEY} >Kişiler</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane 
                        eventKey={CONVERSATIONS_KEY}
                    >
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane 
                        eventKey={CONTACT_KEY}
                    >
                        <Contact />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted" >{id}</span>
                </div>
                <Button onClick={() => set_modelOpen(true)} className='rounded-0'>
                    Yeni {conversationOpen ? 'Konuşma' : 'Kişi'}
                </Button>
            </Tab.Container>
            <Modal show={modelOpen} onHide={closeModel} >
                {conversationOpen ? 
                    <NewConversationModal closeModel={closeModel} /> 
                : 
                    <NewContactModal closeModel={closeModel} />    
                }
            </Modal>
        </div>
    )
}
