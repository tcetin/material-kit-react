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
import Section from "../../layouts/Section";
import Image from "../../elements/Image";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import Textarea from "../../elements/Textarea";
import Button from "../../elements/Button";
import Footer from "../../layouts/Footer";
import Copyright from "../../layouts/Copyright";

class Landing extends Component {
    componentWillMount() {
        window.document.getElementById('body').className = 'landing-page';
    }

    componentWillUnmount() {
        window.document.getElementById('body').className = '';
    }

    render(){
        return(
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
                    <Header imgUrl="https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450">
                        <Container>
                            <Row>
                                <Col md="6">
                                    <Title size={1}>Write the best title for your page.</Title>
                                    <h4>Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
                                    <br/>
                                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-danger btn-raised btn-lg" target="_blank">
                                        <FontAwesome name="play"/> Watch video
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </Header>
                    <Main>
                        <Container>
                            <Section className="text-center section-landing">
                                <Row>
                                    <Col md="8" md-offset="2">
                                        <h2 className="title">Let's talk product</h2>
                                        <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                                    </Col>
                                </Row>
                                <div className="features">
                                    <Row>
                                        <Col md="4">
                                            <div className="info">
                                                <Icon iconName="chat" type="primary"/>
                                                <h4 className="info-title">First Feature</h4>
                                                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="info">
                                                <Icon iconName="verified_user" type="success"/>
                                                <h4 className="info-title">Second Feature</h4>
                                                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="info">
                                                <Icon iconName="fingerprint" type="danger"/>
                                                <h4 className="info-title">Third Feature</h4>
                                                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>         </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Section>
                            <Section className="text-center">
                                <Title size={2}>Here is our team</Title>
                                <div className="team">
                                    <Row>
                                        <Col md="4">
                                            <div className="team-player">
                                                <Image src="../assets/img/avatar.jpg"  alt="Thumbnail Image" raised circle/>
                                                <Title size={4}>
                                                    Gigi Hadid <br />
                                                    <small className="text-muted">Model</small>
                                                </Title>
                                                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <Link to="/">links</Link> for people to be able to follow them outside the site.</p>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="twitter"/></Link>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="instagram"/></Link>
                                                <Link to="/" className="btn btn-simple btn-just-icon btn-default"><FontAwesome name="facebook-square"/></Link>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="team-player">
                                                <Image src="../assets/img/christian.jpg"  alt="Thumbnail Image" raised circle/>
                                                <Title size={4}>
                                                    Christian Louboutin <br />
                                                    <small className="text-muted">Designer</small>
                                                </Title>
                                                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <Link to="/">links</Link> for people to be able to follow them outside the site.</p>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="twitter"/></Link>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="linkedin"/></Link>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="team-player">
                                                <Image src="../assets/img/kendall.jpg"  alt="Thumbnail Image" raised circle/>
                                                <Title size={4}>
                                                    Kendall Jenner<br />
                                                    <small className="text-muted">Model</small>
                                                </Title>
                                                <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <Link to="/">links</Link> for people to be able to follow them outside the site.</p>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="google-plus"/></Link>
                                                <Link to="/" className="btn btn-simple btn-just-icon"><FontAwesome name="youtube-play"/></Link>
                                                <Link to="/" className="btn btn-simple btn-just-icon btn-default"><FontAwesome name="twitter"/></Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Section>
                            <Section className="landing-section">
                                <Row>
                                    <Col md="8" md-offset="2">
                                        <Title size={2} className="text-center">Work with us</Title>
                                        <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                                        <Form className="contact-form" _onSubmit={()=>{return false;}}>
                                            <Row>
                                                <Col md="6">
                                                    <Input type="text" animType="floating" labelText="Your Name" />
                                                </Col>
                                                <Col md="6">
                                                    <Input type="email" animType="floating" labelText="Your Email" />
                                                </Col>
                                            </Row>
                                            <Textarea rows={4} name="msg" labelText="Your Message" animType="floating"/>
                                            <Row>
                                                <Col md="4" md-offset="4" className="text-center">
                                                    <Button type="submit" btnColor="primary" className="btn-raised">Send message</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Section>
                        </Container>
                    </Main>
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
                </Wrapper>
            </div>

        );
    }
}

export default Landing