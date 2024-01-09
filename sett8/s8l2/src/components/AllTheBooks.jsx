import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FantasyBooks from '../assets/books/fantasy.json'
import HistoryBooks from '../assets/books/history.json'
import HorrorBooks from '../assets/books/horror.json'
import RomanceBooks from '../assets/books/romance.json'
import SciFiBooks from '../assets/books/scifi.json'
import { useState } from 'react';

const MyCard = () => {
    const [category, setCategory] = useState(FantasyBooks)
   
  return (
    <div className="d-flex flex-wrap mt-4">
    {category.map((book) => {
        return (
    <Card key={book.asin} style={{ width: '18rem', height: '100'}} className="m-auto">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.price}
        </Card.Text>
        <Button variant="primary">Compralo</Button>
      </Card.Body>
    </Card>)}
  )
  }
  </div>
  )
}

export default MyCard;