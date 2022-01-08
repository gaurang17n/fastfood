import React,{useState} from 'react'
import Adminnav from './Adminnav'
import Tables from './Tables'
import { Container,Row,Col } from 'react-bootstrap'
import Sidebar from './Sidebar'



export default function Dashboard() {
    const [products,setProducts] =useState([
        {
          "id": 1,
          "name": "Chilli burger With Pepper Relish",
          "discription": "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
          "price":"100",
          "img":"https://i.ndtvimg.com/i/2016-05/chilli-burger_625x350_41464592906.jpg"
    
        },
        {
          "id": 2,
          "name": "Perfect Lamb Satay Burger",
          "discription": "Succulent lamb burgers with the crunchiness of cashew nuts and the creaminess of peanut butter smothered with a gorgeous satay sauce.",
          "price":"100",
          "img":"https://i.ndtvimg.com/i/2016-05/lamb-burger_625x350_41464593235.jpg"
    
        },
        {
          "id": 3,
          "name": "Lamb and Tomato Stuffed Burger",
          "discription": "A perfectly shaped lamb pattie cooked to perfection. The tomatoes aren't just a topping but the spotlight of this beautiful dish.",
          "price":"100",
          "img":"https://i.ndtvimg.com/i/2016-05/lamb-tomato-burger_625x350_71464593063.jpg"
    
        }])

    return (
            <>
            <Container fluid>
                <Row>
                  <Col>
                    <Sidebar/>
                  </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row >
                    <Col>
                      <Tables Data={products}/>
                    </Col>
                    </Row>
              </Container>
            </>
            
    )
}
