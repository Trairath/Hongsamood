import React, {useEffect}  from 'react';
import {Row,Navbar,Image} from 'react-bootstrap';
import './styles.css';
import Content from './content'
const books = require('./books.js');

const bookallElements = books.map( (books, index) => {
  return <Content key= {index} book = {books}/>;

})

export default function Album() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch("http://localhost:5000/authen", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token
            },
        })
            .then((response) => response.json())
            .then((data) => {
            if(data.status === 'allow'){
                //alert('Authon success')
            }else{
                alert('Authon failed')
                localStorage.removeItem('token')
                window.location ='/sign-in'
            }
        })
        .catch((error) => {
        console.error("Error:", error);
        });
    }, [])
    
  const signout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token')
    window.location ='/sign-in'
  }

  // const bookElements = books.map((book, index) => {
  //     return <Content key={index} book = {books} />;
  // })

  return (
    <div>
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
      <div class="head">
         <div class="row"  id="home">
           <div class="col">
              <h1 >ยินดีต้อนรับเข้าสู่ Hongsamood </h1>
              <h1 >คุณสามารถเลือกอ่านหนังสือที่มีหลากลายแบบในคลังของหน้าเว็บไซต์เราได้</h1>
                          
            </div>
         </div>
      </div>
      
      <div class="slide">
          <figure>
           <Image src="https://www.silpa-mag.com/wp-content/uploads/2019/09/gladstone-library-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94.jpg"></Image>
           <Image src="https://www.yingpook.com/static/assets/uploads/wp-content/uploads/2020/05/Stiftsbibliothek-Sankt-Gallen-or-Abbey-Library-of-St-Gall.jpg"></Image>
            <Image src="https://2.bp.blogspot.com/-hQErPyXpZEc/WUD7uW_IREI/AAAAAAAAAPM/H1nlMNWgFaUVUWCxJzNQRoxYqgQvAx65ACLcBGAs/s1600/Imaginary_77b7ae_5681147.jpg"></Image>
            <Image src="https://condotiddoi.com/condocontentimg2/6375/BB_20211103_015.jpg"></Image>
            <Image src="https://www.silpa-mag.com/wp-content/uploads/2019/09/gladstone-library-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94.jpg"></Image>
            <Image src="https://www.yingpook.com/static/assets/uploads/wp-content/uploads/2020/05/Stiftsbibliothek-Sankt-Gallen-or-Abbey-Library-of-St-Gall.jpg"></Image>
           </figure>    
      </div>
      <div class="row"  >
                <div class="card">
                    <div class="card-header">
                        <p>เว็บไซต์สำหรับคนรักการอ่าน </p>
                    </div>
                    <div class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p>สวัสดี หากคุณเป็นคนรักการอ่าน แสดงว่าคุณเข้ามาถูกเว็บไซต์เเล้วล่ะ :D </p>
                        <footer class="blockquote-footer"> <cite title="Source Title">ยิ่งคุณอ่านมากเท่าไหร่ คุณก็จะได้รู้สิ่งต่าง ๆ มากขึ้นเท่านั้น ยิ่งคุณเรียนรู้มากเท่าไร คุณก็จะได้ไปสถานที่ต่าง ๆ มากขึ้น</cite></footer>
                      </blockquote>
                    </div>
                </div>
              </div>
              </div> 
              <div class="container text-center" id="bowrow">         
                  <Row md={4} >
                        {bookallElements} 
                  </Row>  
               
                                        
              </div>
    </div>
);
}
// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
