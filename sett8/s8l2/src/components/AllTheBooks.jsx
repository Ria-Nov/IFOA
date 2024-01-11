import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FantasyBooks from '../assets/books/fantasy.json'
import HistoryBooks from '../assets/books/history.json'
import HorrorBooks from '../assets/books/horror.json'
import RomanceBooks from '../assets/books/romance.json'
import SciFiBooks from '../assets/books/scifi.json'
import SingleCard from './CardComponent'

const MyCard = () => {   
  return (
    <div className="d-flex flex-wrap mt-4">
    <SingleCard />
  </div>
  )
}

export default MyCard;