import React, {useRef} from 'react'
import {Button, Container, Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'
export default function Login( { onIdSubmit }) {

    const idRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    const createNewId = (e) => {
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100" >
                <FormGroup>
                    <FormLabel>Enter YourId</FormLabel>
                    <FormControl type="text" ref={idRef} ></FormControl>
                </FormGroup>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary" >Create a New Id</Button>
            </Form>
        </Container>
    )
}
