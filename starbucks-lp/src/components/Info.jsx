import './styleInfo.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

export const Info = () => {
  return (
    <Card className="card border-0">
      <Card.Body>
        <h1 className="title">It's not just Coffee</h1>
        <h1 className="title">It's <span className='brand'>Starbucks</span></h1>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam soluta sed voluptatum ullam suscipit neque nobis nemo ratione quibusdam quasi doloremque quam corporis, voluptatem saepe aspernatur a recusandae commodi?</p>
        <Button variant="success" id="btn-learn">LEARN MORE</Button>
      </Card.Body>
    </Card>
  );
};
