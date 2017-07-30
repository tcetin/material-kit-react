import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../layouts/Header';
import Navbar from '../layouts/Navbar';
import Button from '../elements/Button';
import Input from'../elements/Input';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Wrapper from "../layouts/Wrapper";
import Main from "../layouts/Main";
import Section from "../layouts/Section";
import Container from "../layouts/Container";
import Icon from "../elements/Icon";
import Row from "../layouts/Row";
import Col from "../layouts/Col";
import IconInput from "../elements/IconInput";
import Checkbox from "../elements/Checkbox";
import Radio from "../elements/Radio";
import RadioGroup from "../elements/RadioGroup";
import Slider from "../elements/Slider";
import Menu from "../elements/Menu";
import MenuItem from "../elements/MenuItem";
import SubMenu from "../elements/SubMenu";
import MenuItemHeader from "../elements/MenuItemHeader";
import MenuItemSeparated from "../elements/MenuItemSepareted";
import FontAwesome from 'react-fontawesome';
import Logo from "../elements/Logo";
import MenuToggle from "../elements/MenuToggle";
import Title from "../elements/Title";
import CardTabs from "../elements/CardTabs";
import CardTabsHeader from "../elements/CardTabsHeader";
import CardTab from "../elements/CardTab";
import CardTabContents from "../elements/CardTabContents";
import CardTabContent from "../elements/CardTabContent";
import ProgressBar from "../elements/ProgressBar";
import Progress from "../elements/Progress";
import NavPills from "../elements/NavPills";
import Pill from "../elements/Pill";
import Paginate from "../elements/Paginate";
import Label from "../elements/Label";
import Notification from "../elements/Notification";
import Blockquote from "../elements/Blockquote";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Popover from "../elements/Popover";
import Datepicker from "../elements/DatePicker";
import ButtonTooltip from "../elements/ButtonTooltip";
import Carousel from "../elements/carousel/Carousel";
import Form from "../elements/Form";
import Footer from "../layouts/Footer";
import Copyright from "../layouts/Copyright";


class Entry extends Component{
    componentWillMount() {
        window.document.getElementById('body').className='index-page';
    }
    componentWillUnmount() {
        window.document.getElementById('body').className='';
    }

    render(){
        return(
        <div>
        <Navbar transparent fixedTop colorOnScroll>
            <Container>
                <MenuToggle toggleId="navigation-index">
                    <Router>
                        <Link to="http://www.creative-tim.com" target="_blank">
                            <Logo logoImgSrc='assets/img/logo.png'
                                  logoImgTitle='<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>'
                                  logoImgAlt='Creative Tim Logo'
                                  logoSlogan='Creative Tim'/>
                        </Link>
                    </Router>
                </MenuToggle>
                <Menu id="navigation-index" right>
                    <MenuItem to="/components-documentation" target="_blank">
                        <Icon iconName="dashboard"/> Components
                    </MenuItem>
                    <MenuItem to="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" target="_blank">
                        <Icon iconName="unarchive"/> Upgrade to PRO
                    </MenuItem>
                    <MenuItem rel="tooltip"
                              title="Follow us on Twitter"
                              dataPlacement="bottom"
                              to="https://twitter.com/CreativeTim"
                              target="_blank"
                              className={classNames('btn','btn-white','btn-simple','btn-just-icon')}>
                        <FontAwesome name="twitter"/>
                    </MenuItem>
                    <MenuItem rel="tooltip"
                              title="Like us on Facebook"
                              dataPlacement="bottom"
                              to="https://www.facebook.com/CreativeTim"
                              target="_blank"
                              className={classNames('btn','btn-white','btn-simple','btn-just-icon')}>
                        <FontAwesome name="facebook-square"/>
                    </MenuItem>
                    <MenuItem rel="tooltip"
                              title="Follow us on Instagram"
                              dataPlacement="bottom"
                              to="https://www.instagram.com/CreativeTimOfficial" target="_blank"
                              className={classNames('btn','btn-white','btn-simple','btn-just-icon')}>
                        <FontAwesome name="instagram"/>
                    </MenuItem>
                </Menu>
            </Container>
        </Navbar>
        <Wrapper>
            <Header imgUrl="assets/img/bg2.jpeg">
                <Container>
                    <Row>
                        <Col md="8" md-offset="2">
                            <div className="brand">
                                <h1>Material Kit.</h1>
                                <h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <Main>
                <Section sectionType="section-basic">
                    <Container>

                        <div id="buttons">
                            <Title size={3}>
                                Buttons <br /><small>Pick your style</small>
                            </Title>
                            <Row>
                                <Col md="8" md-offset="2">
                                    <Button btnColor="primary">Default</Button>
                                    <Button btnType="round" btnColor="primary">Round</Button>
                                    <Button btnType="round" btnColor="primary">
                                        <Icon iconName="favorite"/>
                                    </Button>
                                    <Button btnType="fab-mini" btnColor="primary">
                                        <Icon iconName="favorite"/>
                                    </Button>
                                    <Button btnType="simple" btnColor="primary">Simple</Button>
                                </Col>
                            </Row>
                            <Title size={3}>
                                <small>Pick your size</small>
                            </Title>

                            <Row>
                                <Col md="8" md-offset="2">
                                    <Button btnColor="primary" btnSize="xs">x-Small</Button>
                                    <Button btnColor="primary" btnSize="sm">Small</Button>
                                    <Button btnColor="primary">Regular</Button>
                                    <Button btnColor="primary" btnSize="lg">Large</Button>
                                </Col>
                            </Row>
                            <Title size={3}>
                                <small> Pick your color </small>
                            </Title>

                            <Row>
                                <Col md="8" md-offset="2">
                                    <Button>Default</Button>
                                    <Button btnColor="primary">Primary</Button>
                                    <Button btnColor="info">Info</Button>
                                    <Button btnColor="success">Success</Button>
                                    <Button btnColor="warning">Warning</Button>
                                    <Button btnColor="danger">Danger</Button>

                                </Col>
                            </Row>
                            <div className="title">
                                <h3>Links</h3>
                            </div>

                            <Row>
                                <Col md="8" md-offset="2">
                                    <Button btnType="simple">Default</Button>
                                    <Button btnType="simple" btnColor="primary">Primary</Button>
                                    <Button btnType="simple" btnColor="info">Primary</Button>
                                    <Button btnType="simple" btnColor="success">Success</Button>
                                    <Button btnType="simple" btnColor="warning">Warning</Button>
                                    <Button btnType="simple" btnColor="danger">Danger</Button>
                                </Col>
                            </Row>
                        </div>
                        <div id="inputs">
                            <Title size={3}>Inputs</Title>
                            <Row>
                                <Col sm="3">
                                        <Input type="text" hint="Regular"/>
                                </Col>

                                <Col sm="3">
                                    <Input type="email" animType="floating" labelText="With Floating Label"/>
                                </Col>

                                <Col sm="3">
                                    <Input type="text" animType="success" defaultValue="Success" labelText="Success input"/>
                                </Col>

                                <Col sm="3">
                                    <Input type="text" animType="error" defaultValue="Error Input" labelText="Error input"/>
                                </Col>

                                <Col sm="3">
                                    <IconInput type="text" materialIconName="group" hint="With Material Icons"/>
                                </Col>
                                <Col sm="3">
                                    <IconInput type="text" faIconName="group" hint="With Font Awesome Icons"/>
                                </Col>
                                
                            </Row>
                        </div>
                        <div className="space-70"></div>
                        <div id="checkRadios">
                            <Row>
                                <Col sm="3">
                                    <div className="title">
                                        <h3>Checkboxes</h3>
                                    </div>

                                    <Checkbox inputText="Unchecked"/>

                                    <Checkbox inputText="Checked" checked={true}/>

                                    <Checkbox inputText="Disabled Unchecked" checked={false} disabled={true}/>

                                    <Checkbox inputText="Disabled Checked" checked={true} disabled={true}/>

                                </Col>
                                <Col sm="3">
                                    <div className="title">
                                        <h3>Radio Buttons</h3>
                                    </div>

                                    <RadioGroup selectedRadio="rd2" rd={[{value:'rd1',text:'Radio is off'},{value:'rd2',text:'Radio is on'}]}/>

                                    <Radio  inputText="Disabled Radio is off" checked={false} disabled={true}/>

                                    <Radio  inputText="Disabled Radio is on" checked={true} disabled={true}/>
                                </Col>

                                <Col sm="3">
                                    <div className="title">
                                        <h3>Toggle Buttons</h3>
                                    </div>

                                    <Checkbox checkBoxType="togglebutton" inputText="Toggle is on" checked={true} disabled={false}/>

                                    <Checkbox checkBoxType="togglebutton" inputText="Toggle is off" checked={false} disabled={false}/>
                                </Col>

                                <Col sm="3">
                                    <div className="title">
                                        <h3>Sliders</h3>

                                        {/*See other options at https://refreshless.com/nouislider/slider-options*/}
                                        <Slider range={{min: 0, max: 100}} start={30} connect="lower"/>

                                        <Slider start={[20, 80]} connect={[true,true,false]} range={{'min': 0, 'max': 100}}/>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Section>
                <Section sectionType="section-navbars">
                    <Container id="menu-dropdown">
                        <Row>
                            <Col md="6">
                                <Title size={3}>Menu</Title>
                                <Navbar default>
                                    <Container fluid>
                                        <MenuToggle>
                                            <Router>
                                                <Link to="/" className="navbar-brand">
                                                    Menu
                                                </Link>
                                            </Router>
                                        </MenuToggle>
                                       <Menu  id="menu">
                                            <MenuItem to="/" active>Link</MenuItem>
                                            <MenuItem to="/">Link</MenuItem>
                                            <SubMenu right subMenuTitle="Dropdown">right or left
                                                <MenuItemHeader>Dropdown header</MenuItemHeader>
                                                <MenuItem to="/">Action</MenuItem>
                                                <MenuItem to="/">Another action</MenuItem>
                                                <MenuItem to="/">Something else here</MenuItem>
                                                <MenuItemSeparated/>
                                                <MenuItem to="/">Seperated link</MenuItem>
                                                <MenuItemSeparated/>
                                                <MenuItem to="/">One more seperated link</MenuItem>
                                            </SubMenu>
                                        </Menu>
                                    </Container>
                                </Navbar>
                            </Col>
                            <Col md="6">
                                <Title size={3}>Menu with Icons</Title>
                                <Navbar info>
                                    <Container fluid>
                                        <MenuToggle>
                                            <Router>
                                                <Link to="/" className="navbar-brand">
                                                    Icon
                                                </Link>
                                            </Router>
                                        </MenuToggle>
                                     <Menu id="example-navbar-icons"  right>
                                            <MenuItem to="/pablo"><Icon iconName="email"/></MenuItem>
                                            <MenuItem to="/pablo"><Icon iconName="face"/></MenuItem>
                                            <SubMenu right subMenuIcon="settings">right or left
                                                <MenuItemHeader>Dropdown header</MenuItemHeader>
                                                <MenuItem to="/">Action</MenuItem>
                                                <MenuItem to="/">Another action</MenuItem>
                                                <MenuItem to="/">Something else here</MenuItem>
                                                <MenuItemSeparated/>
                                                <MenuItem to="/">Seperated link</MenuItem>
                                                <MenuItemSeparated/>
                                                <MenuItem to="/">One more seperated link</MenuItem>
                                            </SubMenu>
                                        </Menu>
                                    </Container>
                                </Navbar>

                            </Col>
                        </Row>
                        <Title size={3}>Navigation</Title>
                    </Container>
                    <div id="navbar">
                        <div className="navigation-example">
                            <Navbar primary>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Primary Color
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                   <Menu id="example-navbar-primary" right>
                                        <MenuItem to="/pablo" active><Icon iconName="explore"/> Discovery</MenuItem>
                                        <MenuItem to="/pablo"><Icon iconName="account_circle"/> Profile</MenuItem>
                                        <MenuItem to="/pablo"><Icon iconName="settings"/> Settings</MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>

                            <Navbar info>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Info Color
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                    <Menu menuSlug="Info Color" id="example-navbar-info" right>
                                        <MenuItem to="/pablo" active>Discovery</MenuItem>
                                        <MenuItem to="/pablo">Profile</MenuItem>
                                        <MenuItem to="/pablo">Settings</MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>

                            <Navbar success>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Success Color
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                   <Menu id="example-navbar-success" right>
                                        <MenuItem to="/pablo" active><Icon iconName="explore"/></MenuItem>
                                        <MenuItem to="/pablo"><Icon iconName="account_circle"/></MenuItem>
                                        <MenuItem to="/pablo"><Icon iconName="settings"/></MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>

                            {/*
                              You can check for how to use react-fontawesome at:https://www.npmjs.com/package/react-fontawesome
                            */}

                            <Navbar warning>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Warning Color
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                   <Menu id="example-navbar-warning" right>
                                        <MenuItem to="/pablo"><FontAwesome name="facebook-square"/></MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="twitter"/></MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="google-plus"/></MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="instagram"/></MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>

                            <Navbar danger>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Danger Color
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                    <Menu id="example-navbar-warning" right>
                                        <MenuItem to="/pablo"><FontAwesome name="facebook-square"/> Share</MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="twitter"/> Tweet</MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="pinterest"/> Pin</MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>

                            <Navbar transparent>
                                <Container>
                                    <MenuToggle>
                                        <Router>
                                            <Link to="/" className="navbar-brand">
                                                Transparent
                                            </Link>
                                        </Router>
                                    </MenuToggle>
                                   <Menu id="example-navbar-warning" right>
                                        <MenuItem to="/pablo"><FontAwesome name="facebook-square"/> Facebook</MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="twitter"/> Twitter</MenuItem>
                                        <MenuItem to="/pablo"><FontAwesome name="instagram"/> Instagram</MenuItem>
                                    </Menu>
                                </Container>
                            </Navbar>


                        </div>
                    </div>
                </Section>
                <Section sectionType="section-tabs">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Title size={3}>Tabs with Icons on Card</Title>

                                <CardTabs>
                                  <CardTabsHeader headerType="success">{/*colors: "primary", "info", "success", "warning", "danger"*/}
                                      <CardTab targetContent="profile" className="active">
                                          <Icon iconName="face"/> Profile
                                      </CardTab>
                                      <CardTab targetContent="messages">
                                          <Icon iconName="chat"/> Messages
                                      </CardTab>
                                      <CardTab targetContent="settings">
                                          <Icon iconName="build"/> Settings
                                      </CardTab>
                                  </CardTabsHeader>
                                    <CardTabContents className="text-center">
                                        <CardTabContent contentName="profile" className="active">
                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                        </CardTabContent>
                                        <CardTabContent contentName="messages">
                                            <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                        </CardTabContent>
                                        <CardTabContent contentName="settings">
                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                        </CardTabContent>
                                    </CardTabContents>
                                </CardTabs>
                            </Col>

                            <Col md="6">
                                <Title size={3}>Tabs on Plain Card</Title>

                                <CardTabs className="card-plain">
                                    <CardTabsHeader headerType="danger">{/*colors: "primary", "info", "success", "warning", "danger"*/}
                                        <CardTab targetContent="home" className="active">Home</CardTab>
                                        <CardTab targetContent="updates">Updates</CardTab>
                                        <CardTab targetContent="history">History</CardTab>
                                    </CardTabsHeader>
                                    <CardTabContents className="text-center">
                                        <CardTabContent contentName="home" className="active">
                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                        </CardTabContent>
                                         <CardTabContent contentName="updates">
                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                        </CardTabContent>
                                        <CardTabContent contentName="history">
                                            <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                        </CardTabContent>
                                    </CardTabContents>
                                </CardTabs>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section sectionType="section-pagination">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Title size={3}>Progress Bars</Title>
                                {/*type:primary,success,info,danger*/}
                                <ProgressBar type="primary">
                                    <Progress min={0} max={100} value={30} currentValue={60} type="primary"/>
                                </ProgressBar>

                                <ProgressBar type="info">
                                    <Progress min={0} max={100} value={60} currentValue={60} type="info"/>
                                </ProgressBar>

                                <ProgressBar type="danger">
                                    <Progress min={0} max={100} value={35} currentValue={35} type="success"/>
                                    <Progress min={0} max={100} value={20} currentValue={20} type="warning"/>
                                    <Progress min={0} max={100} value={10} currentValue={10} type="danger"/>
                                </ProgressBar>

                                <br/>

                                <Title size={3}>Navigation Pills</Title>

                                <NavPills> {/*type: "primary", "info", "success", "warning","danger"*/}
                                    <Pill targetElement="dashboard">
                                        <Icon iconName="dashboard"/> Dashboard
                                    </Pill>
                                    <Pill targetElement="schedule" className="active">
                                        <Icon iconName="schedule"/> Schedule
                                    </Pill>
                                    <Pill targetElement="tasks">
                                        <Icon iconName="list"/> Tasks
                                    </Pill>
                                    <Pill targetElement="payments">
                                        <Icon iconName="attach_money"/> Payments
                                    </Pill>
                                </NavPills>

                            </Col>
                            <Col md="6">
                                <Title size={3}>Pagination</Title>
                                {/*You can check:react-paginate demo  at https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js */}
                                <Paginate previousLabel={""}
                                          nextLabel={""}
                                          breakLabel={<a href="">...</a>}
                                          breakClassName={"break-me"}
                                          marginPagesDisplayed={2}
                                          pageRangeDisplayed={5}
                                          containerClassName={"pagination pagination-primary"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                          subContainerClassName={"pages pagination"}
                                          activeClassName={"active"}/>

                                <Paginate previousLabel={"<prev"}
                                          nextLabel={"next>"}
                                          breakLabel={<a href="">...</a>}
                                          breakClassName={"break-me"}
                                          marginPagesDisplayed={2}
                                          pageRangeDisplayed={5}
                                          containerClassName={"pagination pagination-info"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                          subContainerClassName={"pages pagination"}
                                          activeClassName={"active"}/>

                                <Title size={3}>Labels</Title>

                                <Label type="default" text="Default"/>
                                <Label type="primary" text="Primary"/>
                                <Label type="info" text="Info"/>
                                <Label type="success" text="Success"/>
                                <Label type="warning" text="Warning"/>
                                <Label type="danger" text="Danger"/>
                            </Col>
                        </Row>

                        <div className="space"></div>

                        <Title size={3}>Notifications</Title>
                    </Container>
                </Section>
                <Section sectionType="section-notifications" id="notifications">
                    <Notification type="info">
                        <b>Info alert:</b> You've got some friends nearby, stop looking at your phone and find them...
                    </Notification>
                    <Notification type="success">
                        <b>Success Alert:</b> Yuhuuu! You've got your $11.99 album from The Weeknd
                    </Notification>
                    <Notification type="warning">
                        <b>Warning Alert:</b> Hey, it looks like you still have the "copyright &copy;  2015" in your footer. Please update it!
                    </Notification>
                    <Notification type="danger">
                        <b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse for your Boss...
                    </Notification>

                    <div className="clearfix"></div>

                </Section>
                <Section>
                    <Container className="tim-container">
                        <Title size={2}>Typography</Title>
                        <div id="typography">
                            <Row>
                                <div className="tim-typo">
                                    <Title size={1}><span className="tim-note">Header 1</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <Title size={2}><span className="tim-note">Header 2</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <Title size={3}><span className="tim-note">Header 3</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <Title size={4}><span className="tim-note">Header 4</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <Title size={5}><span className="tim-note">Header 5</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <Title size={6}><span className="tim-note">Header 6</span>The Life of Material Kit</Title>
                                </div>
                                <div className="tim-typo">
                                    <p><span className="tim-note">Paragraph</span>
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Quote</span>
                                    <Blockquote text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                speaker="Kanye West, Musician"/>
                                </div>

                                <div className="tim-typo">
                                    <span className="tim-note">Muted Text</span>
                                    <p className="text-muted">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                    </p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Primary Text</span>
                                    <p className="text-primary">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Info Text</span>
                                    <p className="text-info">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Success Text</span>
                                    <p className="text-success">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Warning Text</span>
                                    <p className="text-warning">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                    </p>
                                </div>
                                <div className="tim-typo">
                                    <span className="tim-note">Danger Text</span>
                                    <p className="text-danger">
                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
                                </div>
                                <div className="tim-typo">
                                    <h2><span className="tim-note">Small Tag</span>
                                        Header with small subtitle <br/>
                                            <small>Use "small" tag for the headers</small>
                                    </h2>
                                </div>
                            </Row>
                        </div>

                        <div className="space-50"></div>
                        <div id="images">
                            <Title size={2}>Images</Title> <br/>
                            <Row>
                                <Col sm="2">
                                    <Title size={4}>Rounded Image</Title>
                                    <Image src="assets/img/avatar.jpg" alt="Rounded Image" responsive rounded/>
                                </Col>
                                <Col sm="2" sm-offset="1">
                                    <Title size={4}>Circle Image</Title>
                                    <Image src="assets/img/avatar.jpg" alt="Circle Image" responsive circle/>
                                </Col>
                                <Col sm="2" sm-offset="1">
                                    <Title size={4}>Rounded Raised</Title>
                                    <Image src="assets/img/avatar.jpg" alt="Raised Image" responsive rounded raised/>
                                </Col>
                                <Col sm="2" sm-offset="1">
                                    <Title size={4}>Circle Raised</Title>
                                    <Image src="assets/img/avatar.jpg" alt="Thumbnail Image" responsive circle raised/>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Section>
                <Section id="javascriptComponents">
                    <Container>
                        <Title size={2}>Modals/Popovers/Datepicker/Tooltips/Carousel</Title>
                        <Row id="modals">
                            <Col md="6">
                                <Title size={3}>Modal</Title>
                                <Modal title="Modal title"> {/*You can set size lg or sm*/}
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                </Modal>

                            </Col>
                            <Col md="6">
                                <Title size={3}>Popovers</Title>
                                <Popover title="Popover on left"
                                         content="Here will be some very useful information about his popover.<br> Here will be some very useful information about his popover."
                                         text="On left"
                                         direction="left"/>
                                <Popover title="Popover on top"
                                         content="Here will be some very useful information about his popover."
                                         text="On top"
                                         direction="top"/>
                                <Popover title="Popover on bottom"
                                         content="Here will be some very useful information about his popover."
                                         text="On bottom"
                                         direction="bottom"/>
                                <Popover title="Popover on right"
                                         content="Here will be some very useful information about his popover."
                                         text="On right"
                                         direction="right"/>
                            </Col>
                            <br/><br/>
                            <Col md="6">
                                <Title size={3}>Datepicker</Title>
                                <Row>
                                    <Col md="6">
                                        {/*You can check examples at :https://hacker0x01.github.io/react-datepicker/*/}
                                        <Datepicker className="form-control"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="6">
                                <Title size={3}>Tooltips</Title>
                                <ButtonTooltip title="Tooltip on left" text="On left" direction="left"/>
                                <ButtonTooltip title="Tooltip on top" text="On top" direction="top"/>
                                <ButtonTooltip title="Tooltip on bottom" text="On bottom" direction="bottom"/>
                                <ButtonTooltip title="Tooltip on right" text="On right" direction="right"/>
                            </Col>

                        </Row>
                        <Title size={3}>Carousel</Title>
                    </Container>
                </Section>
                <Section id="carousel">
                    <Container>
                        <Row>
                            <Col md="8" md-offset="2">

                                <Carousel>
                                    <div>
                                        <Image src="assets/img/bg2.jpeg" responsive/>
                                        <div className="carousel-caption">
                                            <h4><Icon iconName="location_on"/> Yellowstone National Park, United States</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src="assets/img/bg3.jpeg" responsive/>
                                        <div className="carousel-caption">
                                            <h4><Icon iconName="location_on"/> Somewhere Beyond, United States</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src="assets/img/bg4.jpeg" responsive/>
                                        <div className="carousel-caption">
                                            <h4><Icon iconName="location_on"/> Yellowstone National Park, United States</h4>
                                        </div>
                                    </div>

                                </Carousel>

                            </Col>
                        </Row>

                    </Container>
                </Section>
                <Section>
                    <Container className="text-center">
                        <Row>
                            <Col md="8" md-offset="2" className="text-center">
                                <h2>Completed with examples</h2>
                                <h4>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</h4>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section className="section-full-screen section-signup"
                         style={{backgroundImage:"url('assets/img/city.jpg')",backgroundSize:'cover',backgroundPosition:'top center',minHeight:'700px'}}>
                    <Container>
                        <Row>
                            <Col md="4" md-offset="4">
                                <div className="card card-signup">
                                <Form className="form" action='/pablo' method='GET' _onSubmit={()=>{return;}}>
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
                </Section>

                <Col md="12" className="text-center">
                    <Router>
                        <Link to="/examples/signup" className="btn btn-simple btn-primary btn-lg" target='_blank'>
                            View Signup Page
                        </Link>
                    </Router>
                </Col>

                <div className="space-50"></div>

                <Section className="section-examples">
                    <Container fluid className="text-center">
                        <Router>
                        <Row>
                            <Col md="6">
                                <Link to="/examples/landing" target="_blank">
                                    <Image src="assets/img/landing.jpg" responsive rounded raised alt="Rounded Image"/>
                                    <Button btnType="simple" btnColor="primary" btnSize="lg">View Landing Page</Button>
                                </Link>
                            </Col>
                            <Col md="6">
                                <Link to="/examples/profile" target="_blank">
                                    <Image src="assets/img/profile.jpg" responsive rounded raised alt="Rounded Image"/>
                                    <Button btnType="simple" btnColor="primary" btnSize="lg">View Profile Page</Button>
                                </Link>
                            </Col>
                        </Row>
                        </Router>
                    </Container>
                </Section>

                <Section className="section-download">
                    <Container>
                        <Row className="text-center">
                            <Col md="8" md-offset="2">
                                <h2>Do you love this UI Kit?</h2>
                                <h4>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the kit. Start a new project or give an old Bootstrap project a new look!</h4>
                            </Col>
                            <Col xs="8" xs-offset="2" sm="4" sm-offset="4">
                                <Link to="http://www.creative-tim.com/product/material-kit" className="btn btn-primary btn-lg" target="_blank">
                                    <Icon iconName="cloud_download"/> Free Download
                                </Link>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row className="text-center">
                            <Col md="8" md-offset="2">
                                <h2>Want more?</h2>
                                <h4>We've just launched <Link to="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" target="_blank">Material Kit PRO</Link>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap UI Kit inspired by Material Design.</h4>
                            </Col>
                            <Col xs="8" xs-offset="2"  sm="4" sm-offset="4">
                                <Link to="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" className="btn btn-upgrade btn-lg" target="_blank">
                                    <Icon iconName="unarchive"/> Upgrade to PRO
                                </Link>
                            </Col>
                        </Row>
                        <Row className="sharing-area text-center">

                            <Title size={3}>Thank you for supporting us!</Title>
                            <Link to="/" className="btn btn-twitter">
                                <FontAwesome name="twitter"/> Tweet
                            </Link>
                            <Link to="/" className="btn btn-facebook">
                                <FontAwesome name="facebook-square"/> Share
                            </Link>
                            <Link to="/" className="btn btn-google-plus">
                                <FontAwesome name="google-plus"/> Share
                            </Link>
                            <Link to="/" className="btn btn-github">
                                <FontAwesome name="github"/> Star
                            </Link>
                        </Row>
                    </Container>
                </Section>

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
                        made with <FontAwesome name="heart"/> by Creative Tim for a better web.
                    </Copyright>
                </Container>
            </Footer>
        </Wrapper>
        </div>









        );
    }
}

export default  Entry;