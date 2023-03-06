import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book5(){
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
                             <Card.Img variant="top" src= 'https://images-se-ed.com/ws/Storage/Originals/978616/044/9786160447473L.jpg?h=3cad09ec840b252552bd2f9a612f56f0' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ </Card.Title>
                            <Card.Text> แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เป็นจุดเริ่มต้นของโลกเวทมนตร์สุดตระการตาและการผจญภัยของเด็กชายผู้มีแผลเป็นรูปสายฟ้า เขาคนนี้คือแฮร์รี่ พอตเตอร์ เด็กหนุ่มผู้รอดชีวิตเพียงหนึ่งเดียวจากคาถาปลิดชีพและเป็นผู้เดียวที่ทำให้จอมมารลอร์ดโวลเดอมอร์ต้องเข้าสู่ช่วงนิทรา </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Fantasy </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : เจ.เค. โรว์ลิ่ง </small>
                            <hr/>
                            <Card.Link >
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
export default Book5;