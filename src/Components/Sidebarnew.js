import React from 'react'
import { Col, Container, Row,NavDropdown,Navbar, Dropdown,DropdownButton,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
/* import '../all.min.css' */
import '../sb-admin-2.min.css'
import {MdFastfood} from 'react-icons/md'
import { AiFillDashboard } from "react-icons/ai"

export default function Sidebar() {
    return (
        <>
        <Container fluid>
            
            <Row>
                
                <Col >
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{height:'100%'}}>

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
                         <Navbar collapseOnSelect >
                        <DropdownButton align="end" title="FastFood Items" id="dropdown-menu-align-end">
                                <Dropdown.Item><Link to="../product">Burgers</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to="../sandwich">Sandwich</Link></Dropdown.Item>
                                <Dropdown.Item >pizza</Dropdown.Item>
                        </DropdownButton>
                        </Navbar>

                    </li>
                   

                    <li class="nav-item">
                        <Navbar collapseOnSelect >
                            <DropdownButton align="end" title="Add Products" id="dropdown-menu-align-end">
                                    <Dropdown.Item >Action</Dropdown.Item>
                                    <Dropdown.Item >Another action</Dropdown.Item>
                                    <Dropdown.Item >Something else here</Dropdown.Item>
                            </DropdownButton>
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
