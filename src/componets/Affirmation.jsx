import {useEffect, useState} from "react";
import AffCard from "./AffCard";
import AffForm from "./AffForm";

export default function Affirmation() {
    const [messages, setMessages] = useState()

    useEffect(() => {
        fetch(`http://127.0.0.1:5002/affirmations`)
        .then(res => res.json()
        .then(setMessages))
        .catch(err => console.log(err.message))
    }, []);

    return ( 
        <article>
            {/* <div>
                <button onClick={() => getMessages()}>Link</button>
            </div> */}
            {!messages
            ? <h2>Click to see Affirmations</h2>
            : <section className="affirmation-container">
                {messages.map( message => (
                    <AffCard key={message.id} message={message}/>
                ))}
            </section>}
            <div>
                <AffForm setMessages={setMessages}/>
            </div>
        </article>
    )

}
