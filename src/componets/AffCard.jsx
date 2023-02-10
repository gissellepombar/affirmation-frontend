import Card from 'react-bootstrap/Card';

export default function AffCard({message}) {
    return (
        <Card style={{ width: '18rem' }} className="text-center affirmation-card">
            <Card.Body>
                <Card.Title>{message.title}</Card.Title>
                <Card.Text>{message.quote}</Card.Text>
            </Card.Body>
        </Card>
    )
}
