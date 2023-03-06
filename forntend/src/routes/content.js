import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Content(props){
    const { book } = props;
    
    return(
      <div class="container text-center">
                    <Card style={{width: '18rem'}}>
                      <Card.Body>
                        <Card.Img variant="top" src= {book.Img} />
                        <hr/>
                        <Card.Title> {book.title} </Card.Title>
                        <Card.Text> {book.text} </Card.Text>
                        <Card.Text> <a class='text-muted'>Type : {book.type} </a></Card.Text>
                        <small class='text-muted'>ผู้เเต่ง : {book.author} </small>
                        <hr/>
                        <Card.Link href={book.link}>
                          <Button variant='warning'>Read Now</Button>
                        </Card.Link>
                     </Card.Body>
                    </Card>
      </div> 
    );
}
export default Content;