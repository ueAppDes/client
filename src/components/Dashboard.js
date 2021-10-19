import React from 'react'
import Sidebar from './Sidebar'
import ShowConversation from './ShowConversation'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Dashboard( { id }) {
    const {selectedConversation} = useConversations()

    return (
        <div className="d-flex" style={{height: '100vh'}} >
            <Sidebar id={id} />
            {selectedConversation && <ShowConversation />}
        </div>
    )
}
