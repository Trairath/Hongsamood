import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book11(){
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
                             <Card.Img variant="top" src= 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000296/' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> 10 ชั่วโมงจองโลง</Card.Title>
                            <Card.Text> บอนสีพันธุ์นี้มีชื่อว่าโลหิตนฤมิต
                                ป้านงนุชรักและหวงแหน ‘ต้นบอนเส้นเลือด’ หรือ ‘โลหิตนฤมิต’ ยิ่งกว่าลูกในไส้
                                ใครที่มันคิดจะเอาไป ก็รู้ใช่ไหม ? ...ต้องแลกด้วยความตาย!
                                สางสังคโลกลบหลู่...ล่วงล้ำ...ลองดี
                                ระวังจะไม่มีชีวิตต่อในวันพรุ่งนี้...อย่าหาว่าไม่เตือน!RUN
                                กีฬา...กีฬา...เป็นยาวิเศษ
                                วิ่งออกกำลังกายกันวันนี้...ก่อนจะกลายเป็นผีในวันต่อมา!
                                บ่วงเพลิง
                                ความทรงจำที่เห็นเพื่อนถูกไฟคลอกตายยังตามหลอกหลอน
                                แน่ใจหรือว่าทุกครั้งที่หลับตานอน...จะไม่มีใครนั่งอยู่ปลายเตียง!
                                เรือนไล่กา
                                โฮมสเตย์สุดแปลกตกแต่งด้วยหุ่นไล่กา
                                ยามพระอาทิตย์ลับขอบฟ้า...พวกมันจะตื่นขึ้นมามีชีวิต!
                                แก...ฉันรักแก...แกรักเขา...เขาก็รักแก
                                แล้วแกจะให้ฉันไปอยู่ตรงไหน...ตายไปด้วยกันนั่นแหละดีที่สุด!
                                สวัสดีคุณวันเพ็ญ
                                GARDIAN ANGLE…Please come to play with us. 
                                อยากถามอะไรจะตอบให้ชัด แต่พอได้คำตอบแล้วเตรียมไปวัด...ลงหลุม!
                                คืนเอาคืน
                                ความแค้นที่สั่งสม...ความเจ็บปวดร้องระงมเรียกหาความยุติธรรม
                                ถึงเวลาจะสะสางความเลวระยำ...ไม่ได้พูดให้ขำ...กูจะเอาคืน! </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Horror </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : ภาคินัย</small>
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
export default Book11;