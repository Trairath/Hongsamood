import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book12(){
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
                             <Card.Img variant="top" src= 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000308/' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> Bunraku ๔ FESTIVAL เทศกาลฆาตกรรม </Card.Title>
                            <Card.Text>  ไม่ว่าจะ ‘ความผิดเล็ก’ หรือ ‘ความผิดใหญ่’
                                ตราบใดที่มันขึ้นชื่อว่า ‘ความผิด’ แล้ว ย่อมเป็นความผิดวันยันค่ำ
                                ผู้เข้าแข่งขันกิจกรรมงานวัดเอาชีวิตรอดทั้ง 9 คน
                                ฟื้นขึ้นมาในเทศกาลงานวัดที่สุดแสนจะน่าตื่นตาตื่นใจ
                                แต่มันจะน่าสนุกหรือไม่ ถ้าแต่ละเกมที่เล่นนั้นต้องมี ‘คนตาย!’
                                จ่ายเป็นค่าตั๋วในการผ่านทาง...ด่านละคน...ด่านละคน
                                วีรกรรมต่ำช้าที่เคยทำไว้...กฎหมายไม่เห็น...แต่ฟ้าดินเห็นชัดแจ้ง
                                มนุษย์บุนระขุวงตัวแดงเอาไว้...เชิญมารื่นเริงบันเทิงใจคืนนี้
                                มามะ เชิญมาร่วมยินดี...ม้าหมุน ชิงช้าสวรรค์ ยิงปืนจุกน้ำปลาเราก็มี
                                เข้ามาเป็น ‘คน’ ออกไปเป็น ‘ผี’
                                สุดแสนสุขี...ขอเชิญน้องพี่ มา ‘วัด’ กัน!</Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Horror </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : ภาคินัย</small>
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
export default Book12;