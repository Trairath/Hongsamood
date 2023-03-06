import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Myshelf(){
    const signout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location ='/sign-in'
      }
      const removeMyshelf = (evt) => {
        evt.preventDefault();
        //const data = new FormData(evt.currentTarget);
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
            <Card >
            <div class="container text-center">
                    <Card style={{width: '18rem'}}>
                      <Card.Body>
                        <Card.Img variant="top" src= '' />
                        <hr/>
                        <Card.Title>  </Card.Title>
                        <Card.Text>  </Card.Text>
                        <Card.Text> <a class='text-muted'>Type :  </a></Card.Text>
                        <small class='text-muted'>ผู้เเต่ง :  </small>
                        <hr/>
                        <Card.Link>
                          <Button variant='warning' onClick={removeMyshelf} >Remove You book</Button>
                        </Card.Link>
                     </Card.Body>
                    </Card>
      </div> 
            </Card>
        </section>
        <section class="py-5 text-center container">
        <div class="row"  >
                <div class="card">
                    <div class="card-header">
                        <a>เว็บไซต์สำหรับคนรักการอ่าน </a>
                    </div>
                    <div class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p>สวัสดี หากคุณเป็นคนรักการอ่าน แสดงว่าคุณเข้ามาถูกเว็บไซต์เเล้วล่ะ :D </p>
                        <footer class="blockquote-footer"> <cite title="Source Title">ยิ่งคุณอ่านมากเท่าไหร่ คุณก็จะได้รู้สิ่งต่าง ๆ มากขึ้นเท่านั้น ยิ่งคุณเรียนรู้มากเท่าไร คุณก็จะได้ไปสถานที่ต่าง ๆ มากขึ้น</cite></footer>
                      </blockquote>
                    </div>
                </div>
              </div>
              </section>
        </div>
    );
}
export default Myshelf;