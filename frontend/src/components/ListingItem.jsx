import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ListingItem() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../public/Castle.PNG" alt="Castle 1" />
      <Card.Body>
        <Card.Title>Host Place 1</Card.Title>
        <Card.Text>
        <p>Room in Anacortes, Washington, United States</p>
        <p>2 beds, Shared bathroom</p>
        </Card.Text>
        <Button variant="primary" >Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ListingItem;