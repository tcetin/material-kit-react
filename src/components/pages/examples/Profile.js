import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import Navbar from "../../layouts/Navbar";
import Container from "../../layouts/Container";
import MenuToggle from "../../elements/MenuToggle";
import Menu from "../../elements/Menu";
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/Header";
import Row from "../../layouts/Row";
import Col from "../../layouts/Col";
import Title from "../../elements/Title";
import FontAwesome from 'react-fontawesome';
import MenuItem from "../../elements/MenuItem";
import classNames from 'classnames';
import Icon from "../../elements/Icon";
import Main from "../../layouts/Main";
import Image from "../../elements/Image";
import Footer from "../../layouts/Footer";
import Copyright from "../../layouts/Copyright";
import NavPills from "../../elements/NavPills";
import Pill from "../../elements/Pill";
import CardTabContents from "../../elements/CardTabContents";
import CardTabContent from "../../elements/CardTabContent";

class Profile extends Component{
    componentWillMount() {
        window.document.getElementById('body').className = 'profile-page';
    }

    componentWillUnmount() {
        window.document.getElementById('body').className = '';
    }


    render(){
        return (
            <div>
                <Navbar transparent fixedTop colorOnScroll>
                    <Container>
                        <MenuToggle toggleId="navigation-index">
                            <Router>
                                <Link to="http://www.creative-tim.com" target="_blank" className="navbar-brand">
                                    Creative Tim
                                </Link>
                            </Router>
                        </MenuToggle>
                        <Menu id="navigation-index" right>

                            <MenuItem to="/components-documentation" target="_blank">
                                Components
                            </MenuItem>
                            <MenuItem
                                to="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie"
                                target="_blank">
                                <Icon iconName="unarchive"/> Upgrade to PRO
                            </MenuItem>
                            <MenuItem dataPlacement="bottom"
                                      to="https://twitter.com/CreativeTim"
                                      target="_blank"
                                      className={classNames('btn', 'btn-white', 'btn-simple', 'btn-just-icon')}>
                                <FontAwesome name="twitter"/>
                            </MenuItem>
                            <MenuItem to="https://www.facebook.com/CreativeTim"
                                      target="_blank"
                                      className={classNames('btn', 'btn-white', 'btn-simple', 'btn-just-icon')}>
                                <FontAwesome name="facebook-square"/>
                            </MenuItem>
                            <MenuItem to="https://www.instagram.com/CreativeTimOfficial"
                                      target="_blank"
                                      className={classNames('btn', 'btn-white', 'btn-simple', 'btn-just-icon')}>
                                <FontAwesome name="instagram"/>
                            </MenuItem>
                        </Menu>
                    </Container>
                </Navbar>
                <Wrapper>
                    <Header imgUrl="../assets/img/examples/city.jpg"></Header>
                    <Main>
                        <div className="profile-content">
                            <Container>
                                <Row>
                                    <div className="profile">
                                        <div className="avatar">
                                            <Image src="../assets/img/christian.jpg" alt="Circle Image" circle responsive raised/>
                                        </div>
                                        <div className="name">
                                            <Title size={3}>Christian Louboutin</Title>
                                            <h6>Designer</h6>
                                        </div>
                                    </div>
                                </Row>
                                <div className="description text-center">
                                    <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                                </div>
                                <Row>
                                    <Col md="6" md-offset="3">
                                        <div className="profile-tabs">
                                            <div className="nav-align-center">
                                                <NavPills>
                                                    <Pill targetElement="studio" className="active"><Icon iconName="camera"/> Studio</Pill>
                                                    <Pill targetElement="work"><Icon iconName="palette"/> Work</Pill>
                                                    <Pill targetElement="shows"><Icon iconName="favorite"/> Favorite</Pill>
                                                </NavPills>
                                                <CardTabContents className="gallery">
                                                    <CardTabContent contentName="studio" className="active">
                                                        <Row>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris1.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris0.jpg" rounded/>
                                                            </Col>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris3.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris4.jpg" rounded/>
                                                            </Col>
                                                        </Row>
                                                    </CardTabContent>
                                                    <CardTabContent contentName="work" className="text-center">
                                                        <Row>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris5.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris7.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris9.jpg" rounded/>
                                                            </Col>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris6.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris8.jpg" rounded/>
                                                            </Col>
                                                        </Row>
                                                    </CardTabContent>
                                                    <CardTabContent contentName="shows">
                                                        <Row>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris4.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris6.jpg" rounded/>
                                                            </Col>
                                                            <Col md="6">
                                                                <Image src="../assets/img/examples/chris7.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris5.jpg" rounded/>
                                                                <Image src="../assets/img/examples/chris9.jpg" rounded/>
                                                            </Col>
                                                        </Row>
                                                    </CardTabContent>
                                                </CardTabContents>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Main>
                </Wrapper>
                <Footer>
                    <Container>
                        <nav className="pull-left">
                            <Router>
                                <ul>
                                    <li><Link to="http://www.creative-tim.com" target="_blank">Creative Tim</Link></li>
                                    <li><Link to="http://presentation.creative-tim.com" target="_blank">About Us</Link></li>
                                    <li><Link to="http://blog.creative-tim.com" target="_blank">Blog</Link></li>
                                    <li><Link to="http://www.creative-tim.com/license" target="_blank">Licenses</Link></li>
                                </ul>
                            </Router>
                        </nav>
                        <Copyright year="2016" className="pull-right">
                            made with <FontAwesome name="heart"/> by Creative Tim
                        </Copyright>
                    </Container>
                </Footer>
            </div>
        );
    }
}

export default Profile