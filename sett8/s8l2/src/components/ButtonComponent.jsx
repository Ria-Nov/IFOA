import Button from 'react-bootstrap/Button';
import FantasyBooks from '../assets/books/fantasy.json'
import HistoryBooks from '../assets/books/history.json'
import HorrorBooks from '../assets/books/horror.json'
import RomanceBooks from '../assets/books/romance.json'
import SciFiBooks from '../assets/books/scifi.json'

const ButtonComponent = () => {
    return (
      <>
        <Button variant="primary">Fantasy</Button>
        <Button variant="primary">History</Button>
        <Button variant="primary">Horror</Button>
        <Button variant="primary">Romance</Button>
        <Button variant="primary">Scifi</Button>

    </>
    )
    }

export default ButtonComponent