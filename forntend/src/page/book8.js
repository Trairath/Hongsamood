import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book8(){
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
                             <Card.Img variant="top" src= 'https://inwfile.com/s-dg/r27kqu.jpg' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> Harry Potter and the Goblet of Fire </Card.Title>
                            <Card.Text> การแข่งขันควิดดิชเวิร์ลคัพกลายเป็นบ่อเกิดของความยุ่งเหยิง ตรามารปรากฏขึ้นบนท้องฟ้าและผู้เสพความตายปรากฏตัวขึ้นอีกครั้ง แฮร์รี่ รอนและเฮอร์ไมโอนี่ต้องกลับไปเรียนฮอกวอตส์ในชั้นปีที่สี่ คราวนี้โรงเรียนกลายเป็นสถานที่จัดการประลองเวทไตรภาคี ถ้วยอัคนีที่ตั้งเอาไว้ในห้องโถงคือเครื่องมือที่ใช้เลือกผู้เข้าแข่งขันทั้งสามที่จะมาชิงชัยในเกมครั้งนี้ แต่เมื่อถึงเวลา...ไม่มีใครคาดฝันมาก่อนหลังจากที่ได้ผู้เข้าแข่งขันทั้งสามเรียบร้อยแล้ว นั่นก็คือ เซดริก ครัมและเฟลอร์ กระดาษแผ่นที่สี่กลับลอยออกมาจากถ้วยพร้อมกับชื่อของ 'แฮร์รี่ พอตเตอร์' </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Fantasy </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : เจ.เค. โรว์ลิ่ง</small>
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
export default Book8;