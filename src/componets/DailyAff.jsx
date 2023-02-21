import { useEffect, useState } from "react";
import DailyAffCard from "./DailyAffCard";
import "./DailyAff.css";

const API_URL = "http://127.0.0.1:5002/affirmations/random";

export default function DailyAff() {
    const [affirmation, setAffirmation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchAffirmation();
    }, []);

    async function fetchAffirmation() {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setAffirmation(data);
      setLoading(false);
    }

  function handleNewAffirmation() {
        fetchAffirmation();
  }

  return (
    <article className="container">
        <h1>Daily Affirmation🌼</h1>
            {loading 
                ? ( <h2>Loading...</h2>) 
                : ( <section className="affirmation-container">
                    <DailyAffCard affirmation={affirmation} />
                    </section>
            )}

        <div className="button-container">
            <button onClick={handleNewAffirmation}>New Affirmation</button>
        </div>
    </article>
  );
}