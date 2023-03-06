import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book3(){
    const signout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location ='/sign-in'
      }
      const addMyshelf = (evt) => {
        evt.preventDefault();
        //const data = new FormData(evt.currentTarget);
        window.location = "/myshelf"
      }
    return(
        <div class="container text-center">
        <Navbar class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
          <Navbar.Brand href="/home">
            <Image src="https://e7.pngegg.com/pngimages/342/861/png-clipart-book-book.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top"></Image>
            Hongsamood
          </Navbar.Brand>
          <div className='collapse navbar-collapse'>
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
              <a class="nav-link" href="/myshelf">My Shelf</a>
              <button class="btn btn-outline-success" variant="contained"onClick={signout}>Logout</button>
            </div>
          </div>
        </Navbar>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">        
                  <h1 class="fw-light">Detail book</h1>
                  <hr/>           
              </div>
            </div>
        
            <div class="col-lg-6 col-md-8 mx-auto"> 
              <div class="container text-center">
                    <Card style={{width: '60rm'}}>
                      <Card.Body>
                      <Row>
                        <Col>
                          <Card style={{width: '60rm'}}>
                             <Card.Img variant="top" src= 'https://www.womjapan.com/wp-content/uploads/2019/04/detective-novel-4-704x1024.jpg' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> Laplace's Witch </Card.Title>
                            <Card.Text> เป็นเรื่องราวของอดีตตำรวจหนุ่มที่รับหน้าที่เป็นบอดี้การ์ดให้กับเด็กสาวคนหนึ่ง นิยายเรื่องนี้มีการดำเนินเรื่องคล้ายกับนิยายสั้นแต่จบลงอย่างน่าสนใจ ใจความหลักของเรื่องคือคนที่มีความสามารถมักคิดมากกว่าคนทั่วไป ดังนั้นพวกเขาจึงมองว่าเป็นเรื่องใหญ่ </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Japan </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : Keigo Higashino (東野圭吾) </small>
                            <hr/>
                            <Card.Link>
                              <Button variant='warning' onClick={addMyshelf} >Add Myshelf</Button>
                            </Card.Link>
                        </Col>
                        
                      </Row>
                      </Card.Body>
                    </Card>
     
      
              </div>
            </div>
        </section>
        </div>
    );
}
export default Book3;