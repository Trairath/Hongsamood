import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';
import Axios from 'axios'
import { useState } from 'react';

function Myshelf(){
    const signout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location ='/sign-in'
      }

    const [Myshelflist, setMyshelf] = useState([]);
    const getMyshelf = ()=>{
      Axios.get('http://localhost:5000/myshelf').then((response)=>{
        setMyshelf(response.data);
      });
    }

    const [name,setname] = useState("");
    const [namebook,setnamebook] = useState("");
    const [startdate,setstartdate] = useState("");


    const addlist = () =>{
      Axios.post('http://localhost:5000/addmyshelf', {
        name: name,
        namebook: namebook,
        startdate: startdate
      }).then(() => {
        setMyshelf([
          ...Myshelflist,
        {
          name: name,
          namebook: namebook,
          startdate: startdate
        }
        ])
      })
    }

    const deletemyshelf = (id) =>{
      Axios.delete(`http://localhost:5000/deletemyshelf/${id}`).then((response)=>{
        setMyshelf(
          Myshelflist.filter((val)=>{
            return val.id !== id;
          })
        )
      })
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

        <Row>
        <Col> 
        <div class="container text-center">
                    <Card style={{width: '35rem'}}>
                      <Card.Body>
                        <div className='mb-3'>
                          <label htmlFor='wage' className='form-label'>
                            Name : 
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Enter name...'
                            onChange={(Event)=>{
                              setname(Event.target.value)
                            }}>
                          </input>
                        </div>
                        <div className='mb-3'>
                          <label htmlFor='wage' className='form-label'>
                            Name book : 
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Enter name...'
                            onChange={(Event)=>{
                              setnamebook(Event.target.value)
                            }}>
                          </input>
                        </div>
                        <div className='mb-3'>
                        <label htmlFor='wage' className='form-label'>
                          How many days to borrow : 
                          </label>
                          <input
                            type='date'
                            className='form-control'
                            onChange={(Event)=>{
                              setstartdate(Event.target.value)
                            }}>
                          </input>
                          <hr/>
                         
                         </div>
                        <Card.Link><Button variant='warning' onClick={addlist}>Add Your book</Button></Card.Link>
                       
                                  
                        
                     </Card.Body>
                    </Card>
                    </div>
                  </Col>
        <Col>
                    <Button variant='warning' onClick={getMyshelf} >Show Your list</Button>
                  
                      {Myshelflist.map((val, key)=>{
                          return(
                                <div className='Myshelf'>
                                  <p name="card-text">Name:{val.name}</p>
                                  <p name_book="card-text">Name book:{val.namebook}</p>
                                  <p startdate="card-text">date:{val.startdate}</p>
                                  <Button className="btn btn-danger" onClick={()=> {deletemyshelf(val.id)}} >Delete</Button>
                                </div>
                          )
                        })}
                                         
                        {/* Show tong nee  */}
                      <hr/>
      
                       </Col>
      </Row>          
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