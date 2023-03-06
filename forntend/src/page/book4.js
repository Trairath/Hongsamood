import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book4(){
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
                             <Card.Img variant="top" src= 'https://lzd-img-global.slatic.net/g/p/76442a2de8c2f47584ba688b1582fc55.jpg_2200x2200q80.jpg_.webp' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> ภารกิจห้องสมุดของคนเกลียดการอ่าน </Card.Title>
                            <Card.Text> อาราซากะ โคจิ นักเรียนชั้นมัธยมศึกษาปีที่ 5 ผู้เกลียดการอ่านหนังสือเข้าไส้ แต่กลับสมัครเป็นกรรมการห้องสมุดเพราะหวังว่าจะเป็นงานง่ายๆ สบายๆ ทว่าในการแนะนำตัววันปฐมนิเทศ เมื่อบอกกับทุกคนว่าเขาไม่ชอบอ่านหนังสือเอาเสียเลย อาจารย์คาวาอิ บรรณารักษ์ห้องสมุดกลับมอบหมายให้เขาจัดทำวารสารห้องสมุด (สิ่งพิมพ์แนะนำหนังสือใหม่และรีวิวจากผู้อ่าน) ที่ถูกทิ้งร้างมานานหลายปี ร่วมกับฟุจิโอะ โฮตารุ เด็กสาวช่างเก็บตัวที่รักการอ่านหนังสือเป็นชีวิตจิตใจ </Card.Text>
                            <Card.Text> <a class='text-muted'>Type : Japan </a></Card.Text>
                            <small class='text-muted'>ผู้เเต่ง : อาโอยะ มามิ </small>
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
export default Book4;