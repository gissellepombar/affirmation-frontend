import Card from 'react-bootstrap/Card';

export default function DailyAffCard({affirmation}) {
    return (
        <Card style={{ width: '18rem' }} className="text-center affirmation-card">
            <Card.Body>
                <Card.Title>{affirmation.category}</Card.Title>
                <Card.Text>{affirmation.quote}</Card.Text>
            </Card.Body>
        </Card>
    )
}
