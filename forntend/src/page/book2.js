import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book2(){
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
                             <Card.Img variant="top" src= 'https://www.womjapan.com/wp-content/uploads/2019/04/detective-novel-1-672x1024.jpg' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> The House Where The Mermaid Sleeps </Card.Title>
                            <Card.Text> เรื่องนี้เป็นผลงานครบรอบ 30 ปีของ Higashino ที่เขียนข้อมูลเกี่ยวกับเทคนิคทางการแพทย์และเนื้อหาของอวัยวะภายใน สมอง และร่างกายมนุษย์ไว้อย่างละเอียด ถือเป็นจุดเด่นที่น่าสนใจของเรื่อง </Card.Text>
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
export default Book2;