import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book7(){
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
                             <Card.Img variant="top" src= 'https://img.my-best.in.th/product_images/df07d1e8fe37efa31bb3a25d896e4aa1.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=88a8e21e7efffc8c4122adf87e60922c' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> หายนะแห่งมนตร์อนธการ </Card.Title>
                            <Card.Text> เนื้อเรื่องของ หายนะแห่งมนตร์อนธการ เป็นการเล่าเรื่องของโลกที่ไม่ได้มีเพียงหนึ่งเดียวอีกต่อไป แต่กลายเป็นโลกคู่ขนาดทั้งสามที่มีความคล้ายคลึงกันเป็นอย่างมาก อีกทั้งยังมีเวทมนตร์อีกด้วย โดยเรื่องจะดำเนินผ่าน เคลล์ ตัวละครจากเผ่าพันธุ์พิเศษที่สามารถเดินทางข้ามระหว่างโลกได้ จะเป็นยังไงต้องติดตาม </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Fantasy </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : V.E. Schwab</small>
                            <hr/>
                            <Card.Link >
                              <Button variant='warning' onClick={addMyshelf}>Add Myshelf</Button>
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
export default Book7;