import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';

function Book10(){
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
                             <Card.Img variant="top" src= 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000315/' />
                          </Card>
                        </Col>
                        <Col>
                            <Card.Title> DEADLY DOLL เกาะตุ๊กตาตาย </Card.Title>
                            <Card.Text> มนุษย์เราเมื่อตายไปแล้ว ร่างก็ถูกฝังลงดิน
                            แต่ถ้าเป็น ‘ตุ๊กตาที่เจ้าของเลิกเล่นแล้ว’  จะเอามันไปทิ้งไว้ที่ไหน ?
                            ตุ๊กตาทุกตัวมีชีวิตเมื่อมีเจ้าของให้ความรัก
                            แต่เมื่อ ‘เจ้าของหมดรัก’ ก็ไม่ต่างจาก ‘ตุ๊กตาที่ตายไปแล้ว’
                            เศรษฐีคนหนึ่งสร้าง ‘เกาะตุ๊กตาตาย’ เอาไว้เพื่อ ‘ทิ้งตุ๊กตาที่เจ้าของเลิกเล่น’
                            ‘เลวา’ นายหน้าขายที่ดินหนุ่ม ถูก ‘เมอร์ฟี่’ ทายาทเจ้าของเกาะ
                            ติดต่อเขาให้ขายเกาะแห่งนั้นแลกกับค่านายหน้าเป็นจำนวนเงินมหาศาล
                            ทุกอย่างน่าจะราบรื่น...ถ้าบนเกาะนั้นไม่เต็มไปด้วยความน่ากลัวของตุ๊กตานับพัน
                            มองไปทางซ้ายก็เห็น...มองไปข้างขวาก็พบ...มองไปบนต้นไม้ก็มี
                            ที่น่ากลัวกว่า ‘เกาะตุ๊กตาผี’ นั่นคือ ‘เรื่องราวอัปรีย์ที่ซ่อนเอาไว้’
                            ตุ๊กตาทุกตัวมีหัวจิตหัวใจ...ใครทำอะไรไว้...มันจะกลับมาทักทายให้ตายโหง! </Card.Text>
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
export default Book10;