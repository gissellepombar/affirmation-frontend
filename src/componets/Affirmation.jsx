import {useState, useEffect} from "react";
import AffCard from "./AffCard";

export default function Affirmation() {
    const [messages, setMessages] = useState()

const getMessages = () => {
    fetch(`http://127.0.0.1:5002/getall`)
    .then(res => res.json()
    .then(setMessages))
    .catch(alert)
}

    return ( 
        <article>
            <div>
                <button onClick={() => getMessages()}>Link</button>
            </div>
            {!messages
            ? <h2>Click to see Affirmations</h2>
            : <section className="affirmation-container">
                {messages.map( message => (
                    <AffCard key={message.id} message={message}/>
                ))}
            </section>}
        </article>
    )

}
