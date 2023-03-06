import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book9(){
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
                             <Card.Img variant="top" src= 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000005/' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> Lift ลิฟต์ซ่อนศพ </Card.Title>
                            <Card.Text> ไม่ใช่เรื่องน่าพิศมัยนัก  เมื่อ ‘แป้ง’ ต้องย้ายมาทำงานเป็นบรรณารักษ์คนใหม่ที่ห้องสมุดคณะแพทยศาสตร์  ประจำ มหาวิทยาลัยในต่างจังหวัดแห่งหนึ่ง  ความแปลกที่แปลกทาง  ความเงียบและอ้างว้าง  ทำให้หญิงสาวเกิดอาการ ‘กลัว’  ...กลัวเสียงลม ที่หวีดไหว  กลัวท้องฟ้ายามไม่มีพระอาทิตย์   กลัวการอยู่ในบ้านพักครูอันรกร้างคนเดียว
                                แต่นั่นยังไม่น่ากลัวเท่ากับการได้รู้ว่า...ตึกที่เธอต้องทำงานนั้น  มีลิฟต์ที่เคยมีนักศึกษาเสียชีวิตอยู่!  แน่นอน...ทุกคนตราหน้า มันว่าเป็น ‘ลิฟต์ผีสิง’</Card.Text>
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
export default Book9;