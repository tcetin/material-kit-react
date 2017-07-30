import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Navbar from "../../layouts/Navbar";
import Container from "../../layouts/Container";
import MenuToggle from "../../elements/MenuToggle"
import Menu from "../../elements/Menu";
import MenuItem from "../../elements/MenuItem";
import Icon from "../../elements/Icon";
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/Header";
import Row from "../../layouts/Row";
import Col from "../../layouts/Col";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Footer from "../../layouts/Footer";
import Copyright from "../../layouts/Copyright";

class SignUp extends Component {
    componentWillMount() {
        window.document.getElementById('body').className = 'signup-page';
    }

    componentWillUnmount() {
        window.document.getElementById('body').className = '';
    }

    render() {
        return (
            <div>
                <Navbar transparent className="navbar-absolute">
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
                    <Header imgUrl="../assets/img/city.jpg">
                        <Container>
                            <Row>
                                <Col md="4" md-offset="4" sm="6" sm-offset="3">
                                    <div className="card card-signup">
                                        <Form className="form" action='/signup' method='GET' _onSubmit={() => {return;}}>
                                            <div className="header header-primary text-center">
                                                <h4>Sign Up</h4>
                                                <div className="social-line">
                                                    <Router>
                                                        <div>
                                                            <Link to='/pablo' className="btn btn-simple btn-just-icon">
                                                                <FontAwesome name="facebook-square"/>
                                                            </Link>
                                                            <Link to='/pablo' className="btn btn-simple btn-just-icon">
                                                                <FontAwesome name="twitter"/>
                                                            </Link>
                                                            <Link to='/pablo' className="btn btn-simple btn-just-icon">
                                                                <FontAwesome name="google-plus"/>
                                                            </Link>
                                                        </div>
                                                    </Router>
                                                </div>
                                            </div>
                                            <p className="text-divider">Or Be Classical</p>
                                            <div className="content">

                                                <div className="input-group">
                                                    <span className="input-group-addon"><Icon iconName="face"/></span>
                                                    <Input type="text" hint="First Name..."/>
                                                </div>

                                                <div className="input-group">
                                                    <span className="input-group-addon"><Icon iconName="email"/></span>
                                                    <Input type="text" hint="Email"/>
                                                </div>

                                                <div className="input-group">
                                                    <span className="input-group-addon"><Icon iconName="lock_outline"/></span>
                                                    <Input type="password" hint="Password..."/>
                                                </div>
                                            </div>
                                            <div className="footer text-center">
                                                <Button type="submit" btnType="simple" btnColor="primary" btnSize="lg">Get Started</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
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
                                    made with <FontAwesome name="heart"/> by
                                    <Router>
                                        <Link to="http://www.creative-tim.com" target="_blank"> Creative Tim</Link>
                                    </Router>
                                </Copyright>
                            </Container>
                        </Footer>
                    </Header>
                </Wrapper>
            </div>
        );
    }
}
;

export default SignUp;