import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'

const SingleCard = () => {
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

export default SingleCard;