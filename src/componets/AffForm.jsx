import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function AffForm() {
    
    const [title, setTitle] = useState("");
    const [quote, setQuote] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    //stops page from refreshing 
    const handleSubmit = (e) => {
        e.preventDefault();

    //make a post request to the API with the form data
    fetch('http://127.0.0.1:5002/post', {
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({title, quote}),
    })  
        .then(res => res.json())
        .then(response => {
            // setUser(response.message)
            setUser('Affirmation Posted!')
        })
        .catch(err => console.log(err.message))
        navigate('/')
}
    // useEffect(() => {
    //     fetch('http://127.0.0.1:5002/getall')
    //     .then(res => res.json())
    //     //.then(data => )
    //     .catch(alert)
    // }, [user])

    return (
        <>
        <div>{!user 
            ? <p>Post an affirmation! </p>
            : user}</div>
        <form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    name="title"
                    type="title" 
                    placeholder="Enter Title"
                    value={title}
                    className="p-3 hover-effect" 
                    onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Quote</Form.Label>
                <Form.Control 
                    name="quote"
                    type="quote" 
                    placeholder="Quote"
                    value={quote}
                    className="p-3 hover-effect"
                    onChange={e => setQuote(e.target.value)} />
            </Form.Group>
            <input type="submit" value="submit" />
        </form>
        </>
)

}