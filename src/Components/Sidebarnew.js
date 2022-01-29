import React from 'react'
import { Col, Container, Row,Button,Navbar, Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
/* import '../all.min.css' */
import '../sb-admin-2.min.css'
import {MdFastfood} from 'react-icons/md'
import { AiFillDashboard } from "react-icons/ai"

export default function Sidebar() {
    return (
        <>
        <Container fluid >
            
            <Row  style={{backgroundColor:'#1F2833'}} >
                
                <Col sm={3} >
                <ul class="navbar-nav  sidebar sidebar-dark " style={{width:'80%',height:'1000px',backgroundColor:'#1F2833'}}>

                    <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                        {/* <div class="sidebar-brand-icon rotate-n-15"> */}
                            {/* <i class="fa fa-cog"></i> */}
                            <MdFastfood style={{width:'30px', height:'50px'}}/>
                       {/*  </div> */}
                        <div class="sidebar-brand-text mx-3">Fast Food</div>
                    </Link>


                    <hr class="sidebar-divider my-0"/>


                    <li class="nav-item active">
                        <Link to='/' class="nav-link">
                            <i class="fa fa-fw fa-tachometer-alt"></i>
                            <AiFillDashboard style={{width:'20px', height:'30px',marginRight:'10px'}}/>
                            <span>Dashboard</span></Link>
                    </li>


                    <hr class="sidebar-divider"/>


                    <div class="sidebar-heading">
                        Interface
                    </div>


                    <li class="nav-item">
                        {/* <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Components:</h6>
                                <a class="collapse-item" href="buttons.html">Buttons</a>
                                <a class="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div> */}

                        <Navbar collapseOnSelect>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="success"> Products</Dropdown.Toggle>
                                <Dropdown.Menu variant="success">
                                <Dropdown.Item> <Link to="../burgers" id='link1'>Show Product</Link></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><Link to="../addproducts" id='link1'>Add Products</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                         </Navbar>
                         <Navbar collapseOnSelect>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="success"> Category</Dropdown.Toggle>
                                <Dropdown.Menu variant="success">
                                <Dropdown.Item> <Link to="../category" id='link1'>Show Category</Link></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><Link to="../addcategory" id='link1'>Add Category</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                         </Navbar>
                         <Navbar collapseOnSelect>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="success"> Review</Dropdown.Toggle>
                                <Dropdown.Menu variant="success">
                                <Dropdown.Item> <Link to="../category" id='link1'>Show Review</Link></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><Link to="../addcategory" id='link1'>Add Review</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                         </Navbar>

                    </li>

                    <hr class="sidebar-divider"/>
                    <div class="sidebar-heading">
                        Addons
                    </div>


                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Login Screens:</h6>
                                <a class="collapse-item" href="login.html">Login</a>
                                <a class="collapse-item" href="register.html">Register</a>
                                <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div class="collapse-divider"></div>
                                <h6 class="collapse-header">Other Pages:</h6>
                                <a class="collapse-item" href="404.html">404 Page</a>
                                <a class="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="charts.html">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                    </ul>
                    
                </Col>
                 {/*  <!-- End of Sidebar --> */}

            </Row>
        </Container>

        </>
    )
}
