import React, {useEffect}  from 'react';
import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron, NavbarBrand, Image} from 'react-bootstrap';
import './styles.css';
import Content from './content'
import zIndex from '@mui/material/styles/zIndex';


const books = [
  {
    type: 'Japan',
    Img: 'https://www.womjapan.com/wp-content/uploads/2019/04/detective-novel-2-691x1024.jpg',
    title: 'Lone Castle in the Mirror',
    author:'Mizuki Tsujimura (辻村深月)',
    link: '/Book1' 
  }, 
  {
    type: 'Japan',
    Img: 'https://www.womjapan.com/wp-content/uploads/2019/04/detective-novel-1-672x1024.jpg',
    title: 'The House Where The Mermaid Sleeps',
    author:'Keigo Higashino (東野圭吾)',
    link:'/Book2'
  }
  , 
  {
    type: 'Japan',
    Img: 'https://www.womjapan.com/wp-content/uploads/2019/04/detective-novel-4-704x1024.jpg',
    title: "Laplace's Witch",
    author:'Keigo Higashino (東野圭吾)',
    link:'/Book3'
  },
  {
    type: 'Japan',
    Img: 'https://lzd-img-global.slatic.net/g/p/76442a2de8c2f47584ba688b1582fc55.jpg_2200x2200q80.jpg_.webp',
    title: "ภารกิจห้องสมุดของคนเกลียดการอ่าน",
    author:'อาโอยะ มามิ',
    link:'/Book4'
  },
  {
    type: 'Fantasy',
    Img: 'https://images-se-ed.com/ws/Storage/Originals/978616/044/9786160447473L.jpg?h=3cad09ec840b252552bd2f9a612f56f0',
    title: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์',
    author:'เจ.เค. โรว์ลิ่ง',
    link:'/Book5'
  }, 
  {
    type: 'Fantasy',
    Img: 'https://img.my-best.in.th/product_images/20106e90aca07b72878c2bbb21209215.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=adfbeea59a45a414d9e8809d2c12330c',
    title: 'อัคคีและโลหิต',
    author:'George R. R. Martin',
    link:'/Book6'
  }, 
  {
    type: 'Fantasy',
    Img: 'https://img.my-best.in.th/product_images/df07d1e8fe37efa31bb3a25d896e4aa1.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=88a8e21e7efffc8c4122adf87e60922c',
    title: 'หายนะแห่งมนตร์อนธการ',
    author:'V.E. Schwab',
    link:'/Book7'
  }, 
  {
    type: 'Fantasy',
    Img: 'https://inwfile.com/s-dg/r27kqu.jpg',
    title: 'Harry Potter and the Goblet of Fire',
    author:'เจ.เค. โรว์ลิ่ง',
    link:'/Book8'
  }, 
  {
    type: 'Horror',
    Img: 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000005/',
    title: 'Lift ลิฟต์ซ่อนศพ',
    author:'ภาคินัย',
    link:'/Book9'
  }, 
  {
    type: 'Horror',
    Img: 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000315/',
    title: 'DEADLY DOLL เกาะตุ๊กตาตาย',
    author:'ภาคินัย',
    link:'/Book10'
  }, 
  {
    type: 'Horror',
    Img: 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000296/',
    title: '10 ชั่วโมงจองโลง',
    author:'ภาคินัย',
    link:'/Book11'
  }, 
  {
    type: 'Horror',
    Img: 'https://www.sofapublishing.com/bookstore/api/book/cover/SF_0000308/',
    title: 'Bunraku ๔ FESTIVAL เทศกาลฆาตกรรม',
    author:'ภาคินัย',
    link:'/Book12'
  }
 
 
];

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
