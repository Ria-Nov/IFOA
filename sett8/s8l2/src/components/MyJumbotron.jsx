import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MyJumbotron = () => {
    return (
        <>
        
        <Container fluid>
            <Row>
                <Col>
                <h1 className="text-dark text-center">Welcome to EpiBooks</h1>
                <h4 className="text-dark text-center">Comprami, io sono in vendita</h4></Col>
            </Row>
        </Container>
        
        
        
        </>
    )
}

export default MyJumbotron