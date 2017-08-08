import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import Navbar from "../layouts/Navbar";
import Container from "../layouts/Container";
import MenuToggle from "../elements/MenuToggle";
import Menu from "../elements/Menu";
import MenuItem from "../elements/MenuItem";
import FontAwesome from 'react-fontawesome';
import Icon from "../elements/Icon";
import Logo from "../elements/Logo";
import Wrapper from "../layouts/Wrapper";
import Header from "../layouts/Header";
import Title from "../elements/Title";
import Row from "../layouts/Row";
import Col from "../layouts/Col";
import Main from "../layouts/Main";
import Section from "../layouts/Section";
import Highlight from 'react-syntax-highlighter';
import Button from "../elements/Button";
import Checkbox from "../elements/Checkbox";
import Radio from "../elements/Radio";
import RadioGroup from "../elements/RadioGroup";
import Dropdown from "../elements/Dropdown";
import DropdownItem from "../elements/DropdownItem";
import Image from "../elements/Image";
import Label from "../elements/Label";
import Input from "../elements/Input";
import IconInput from "../elements/IconInput";
import Textarea from "../elements/Textarea";
import SubMenu from "../elements/SubMenu";
import MenuItemHeader from "../elements/MenuItemHeader";
import MenuItemSeparated from "../elements/MenuItemSepareted";
import NavPills from "../elements/NavPills";
import Pill from "../elements/Pill";
import Paginate from "../elements/Paginate";
import ProgressBar from "../elements/ProgressBar";
import Progress from "../elements/Progress";
import Slider from "../elements/Slider";
import Table from 'react-table'
import 'react-table/react-table.css'
import Datepicker from "../elements/DatePicker";
import Modal from "../elements/Modal";
import ButtonTooltip from "../elements/ButtonTooltip";
import Popover from "../elements/Popover";
import Notification from "../elements/Notification";
import Blockquote from "../elements/Blockquote";
import Form from "../elements/Form";
import Carousel from "../elements/carousel/Carousel";
import Footer from "../layouts/Footer";
import Copyright from "../layouts/Copyright";

class Docs extends Component{

    componentWillMount() {
        window.document.getElementById('body').className = 'components-page';
    }

    componentWillUnmount() {
        window.document.getElementById('body').className = '';
    }

    render(){
        const data = [{
            name: 'Andrew Mike',
            job_position:'Develop',
            since:2013,
            salary:'€ 99,225'
        },{
            name: 'John Doe',
            job_position:'Design',
            since:2012,
            salary:'€ 89,241'
        },{
            name: 'Melina Garriga',
            job_position:'Develop',
            since:2013,
            salary:'€ 99,225'
        },{
            name: 'Alex Mike',
            job_position:'Develop',
            since:2010,
            salary:'€ 92,144'
        },{
            name: 'Wilton Zinn',
            job_position:'Develop',
            since:2011,
            salary:'€ 99,225'
        },{
            name: 'Jann Redmon',
            job_position:'Develop',
            since:2014,
            salary:'€ 99,225'
        },{
            name: 'Glinda Blystone',
            job_position:'Develop',
            since:2009,
            salary:'€ 99,225'
        }];

        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Job Position',
            accessor: 'job_position',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'since', // Required because our accessor is not a string
            Header: 'Since',
            accessor: "since"
        },{
            Header: 'Salary',
            accessor: "salary"
        }, {
            Header: 'Actions',
            accessor: "actions",
            Cell:<div>
                    <Button btnType="simple" btnSize="xs" btnColor="info"><FontAwesome name="user"/></Button>
                    <Button btnType="simple" btnSize="xs" btnColor="success"><FontAwesome name="edit"/></Button>
                    <Button btnType="simple" btnSize="xs" btnColor="danger"><FontAwesome name="times"/></Button>
                </div>
        }];

        const showGridStyle = {
            paddingTop: '10px',
            paddingBottom: '10px',
            backgroundColor: 'rgba(86,61,124,.15)',
            border: '1px solid rgba(86,61,124,.2)'
        };


        return(
            <div>
                <Navbar transparent fixedTop colorOnScroll>
                    <Container>
                        <MenuToggle toggleId="navigation-doc">
                            <Router>
                                <Link to="http://www.creative-tim.com" target="_blank">
                                    <Logo logoImgSrc='assets/img/logo.png'
                                          logoImgTitle='<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>'
                                          logoImgAlt='Creative Tim Logo'
                                          logoSlogan='Creative Tim'/>
                                </Link>
                            </Router>
                        </MenuToggle>
                        <Menu id="navigation-doc" right>
                            <MenuItem to="/" target="_blank">Back to Kit</MenuItem>
                            <MenuItem  to="https://github.com/timcreative/material-kit/issues" target="_blank">
                                Have an issue?
                            </MenuItem>
                            <MenuItem to="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" target="_blank">
                                <Icon iconName="unarchive"/> Upgrade to PRO
                            </MenuItem>
                        </Menu>
                    </Container>
                </Navbar>
                <Wrapper>
                    <Header imgUrl="https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450">
                        <Container>
                            <Row>
                                <Col md="6" md-offset="3">
                                    <Title size={1}>Components Documentation</Title>
                                </Col>
                            </Row>
                        </Container>
                    </Header>
                    <Main>
                        <Section>
                            <Container>
                                <Row>
                                    <Col md="2">
                                        <div className="fixed-section" data-spy="affix" data-offset-top="340">
                                            <ul>
                                                <li><a href="#buttons-row">Buttons</a></li>
                                                <li><a href="#checkbox-row">Checkbox/Radio/Toggle</a></li>
                                                <li><a href="#dropdown-row">Dropdown</a></li>
                                                <li><a href="#inputs-row">Inputs</a></li>
                                                <li><a href="#textarea-row">Textarea</a></li>
                                                <li><a href="#navbar-row">Navigation</a></li>
                                                <li><a href="#pagination-row">Pagination</a></li>
                                                <li><a href="#progressbar-row">Progress Bars</a></li>
                                                <li><a href="#sliders-row">Sliders</a></li>
                                                <li><a href="#labels-row">Labels</a></li>
                                                <li><a href="#tables-row">Tables</a></li>
                                                <li><a href="#datepicker-row">Datepicker</a></li>
                                                <li><a href="#modal-row">Modals</a></li>
                                                <li><a href="#tooltip-row">Tooltips/Popovers</a></li>
                                                <li><a href="#icons-row">Material Icons</a></li>
                                                <li><a href="#fontawesome-row">Fontawesome Icons</a></li>
                                                <li><a href="#notification-row">Notifications</a></li>
                                                <li><a href="#blockquote-row">Blockquote</a></li>
                                                <li><a href="#form-row">Form</a></li>
                                                <li><a href="#image-row">Image</a></li>
                                                <li><a href="#grid-row">Grid System</a></li>
                                                <li><a href="#carousel-row">Carousel</a></li>
                                                <li><a href="#container-row">Container</a></li>
                                                <li><a href="#section-row">Section</a></li>
                                                <li><a href="#wrapper-row">Wrapper</a></li>
                                                <li><a href="#footer-row">Footer</a></li>
                                                <li><a href="#logo-row">Logo</a></li>

                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md="8" md-offset="2">
                                        <div className="tim-container" id="buttons-row">
                                            <h2>Buttons</h2>
                                            <legend></legend>
                                            <h4>Colors</h4>
                                            <p>We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:</p>
                                            <p>
                                                <Button btnColor="default">Default</Button>
                                                <Button btnColor="primary">Primary</Button>
                                                <Button btnColor="info">Info</Button>
                                                <Button btnColor="success">Success</Button><br/>
                                                <Button btnColor="warning">Warning</Button>
                                                <Button btnColor="danger">Danger</Button>
                                                <Button btnColor="white">White</Button>
                                            </p>



                                            <Highlight language="html" className="prettyprint">
                                                {
                                                 '<Button btnColor="default">Default</Button>\n'+
                                                 '<Button btnColor="primary">Primary</Button>\n'+
                                                 '<Button btnColor="info">Info</Button>\n'+
                                                 '<Button btnColor="success">Success</Button>\n'+
                                                 '<Button btnColor="warning">Warning</Button>\n'+
                                                 '<Button btnColor="danger">Danger</Button>\n'+
                                                 '<Button btnColor="white">White</Button>\n'
                                                }

                                            </Highlight>

                                            <h4>Sizes</h4>
                                            <p>Buttons come in all needed sizes:</p>
                                            <p>
                                                <Button btnColor="primary" btnSize="lg">Large</Button>
                                                <Button btnColor="primary">Normal</Button>
                                                <Button btnColor="primary" btnSize="sm">Small</Button>
                                                <Button btnColor="primary" btnSize="xs">Extra Small</Button>
                                            </p>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Button btnColor="primary" btnSize="lg">Large</Button>\n'+
                                                    '<Button btnColor="primary">Normal</Button>\n'+
                                                    '<Button btnColor="primary" btnSize="sm">Small</Button>\n'+
                                                    '<Button btnColor="primary" btnSize="xs">Extra Small</Button>\n'
                                                }
                                            </Highlight>

                                            <h4>Styles</h4>
                                            <p>We added extra classes that can help you better customise the look. You can use regular buttons, rounded corners buttons or plain simple buttons. Let's see some examples:
                                            </p>
                                            <p>
                                                <Button btnColor="primary">Default</Button>
                                                <Button btnColor="primary" btnType="round">Round</Button>
                                                <Button btnColor="primary" btnType="round">
                                                    <Icon iconName="favorite"/> With Icon
                                                </Button>
                                                <Button btnColor="primary" className="btn-fab btn-fab-mini btn-round">
                                                    <Icon iconName="favorite"/>
                                                </Button>
                                                <Button btnColor="primary" className="btn-just-icon">
                                                    <Icon iconName="favorite"/>
                                                </Button>
                                                <Button btnType="simple" btnColor="primary">Simple</Button>
                                            </p>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Button btnColor="primary">Default</Button>\n'+
                                                    '<Button btnColor="primary" btnType="round">Round</Button>\n'+
                                                    '<Button btnColor="primary" btnType="round">\n <Icon iconName="favorite"/> With Icon\n</Button>\n'+
                                                    '<Button btnColor="primary" className="btn-fab btn-fab-mini btn-round">\n <Icon iconName="favorite"/>\n</Button>\n'+
                                                    '<Button btnColor="primary" className="btn-just-icon">\n <Icon iconName="favorite"/>\n</Button>\n'+
                                                    '<Button btnType="simple" btnColor="primary">Simple</Button>\n'
                                                }
                                            </Highlight>
                                            <p>
                                                Button groups and disabled state all work like they are supposed to. We used the React-FontAwesome icons component that can be found <Link to="https://github.com/danawoodman/react-fontawesome" target="_blank">here</Link> and Material Design Icons that can be found <Link to="https://design.google.com/icons/" target="_blank"> here</Link>.
                                            </p>

                                            <h4>Event Handling</h4>
                                            <p>To use handling click event,you can use <code>onClick</code> prop. </p>
                                            <p><Button btnColor="primary" onClick={(e)=>{alert('The button clicked.')}}>Click</Button></p>

                                            <Highlight language="html" className="prettyprint">
                                                {'<Button btnColor="primary" onClick={(e)=>{alert(\'The button clicked.\')}}>Click</Button>'}
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="checkbox-row">
                                            <h2> Checkboxes </h2>
                                            <legend></legend>
                                            <p>
                                                To use the custom checkboxes, you don't need to import any separate Javascript file, everything is inside material.min.js
                                            </p>
                                            <p>
                                                <Checkbox inputText="Unchecked"/>

                                                <Checkbox inputText="Checked" checked={true}/>

                                                <Checkbox inputText="Disabled Unchecked" checked={false} disabled={true}/>

                                                <Checkbox inputText="Disabled Checked" checked={true} disabled={true}/>
                                            </p>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Checkbox inputText="Unchecked"/>\n'+
                                                    '<Checkbox inputText="Checked" checked={true}/>\n'+
                                                    '<Checkbox inputText="Disabled Unchecked" checked={false} disabled={true}/>\n'+
                                                    '<Checkbox inputText="Disabled Checked" checked={true} disabled={true}/>'
                                                }
                                            </Highlight>

                                            <p>You can use  <code>onClick,onFocus,onBlur,onChange</code> props for handling events</p>
                                        </div>
                                        <div className="tim-row" id="checkbox-row">
                                            <h2> Radio Buttons </h2>
                                            <legend></legend>
                                            <p>
                                                To use the custom radio buttons, you don't need to import any separate Javascript file, everything is inside material.min.js.
                                            </p>
                                            <p>

                                                <RadioGroup selectedRadio="rd2" rd={[{value:'rd1',text:'Radio is off'},{value:'rd2',text:'Radio is on'}]}/>

                                                <Radio  inputText="Disabled Radio is off" checked={false} disabled={true}/>

                                                <Radio  inputText="Disabled Radio is on" checked={true} disabled={true}/>
                                            </p>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<RadioGroup \n selectedRadio="rd2" \n rd={[{value:\'rd1\',text:\'Radio is off\'},{value:\'rd2\',text:\'Radio is on\'}]}/>\n'+
                                                    '<Radio  inputText="Disabled Radio is off" checked={false} disabled={true}/>\n'+
                                                    '<Radio  inputText="Disabled Radio is on" checked={true} disabled={true}/>\n'
                                                }
                                            </Highlight>

                                            <p>You can use  <code>onClick,onFocus,onBlur,onChange</code> props for handling events</p>

                                        </div>
                                        <div className="tim-row" id="checkbox-row">
                                            <h2>Toggle Buttons</h2>
                                            <legend></legend>
                                            <p>
                                                If you want to use something more special than a checkbox, we recomment the toggle buttons.
                                            </p>

                                            <Checkbox checkBoxType="togglebutton" inputText="Toggle is on" checked={true} disabled={false}/>
                                            <Checkbox checkBoxType="togglebutton" inputText="Toggle is off" checked={false} disabled={false}/>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Checkbox checkBoxType="togglebutton" inputText="Toggle is on" checked={true} disabled={false}/>\n'+
                                                    '<Checkbox checkBoxType="togglebutton" inputText="Toggle is off" checked={false} disabled={false}/>\n'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="dropdown-row">
                                            <h2> Dropdown </h2>
                                            <legend></legend>
                                            <p>We are very proud to present the dropdown which has a subtle animation. We also thought of another use-case: dropdown with flags.</p>
                                            <Row>
                                                <Dropdown label="Regular" className="col-md-3">
                                                    <DropdownItem><Link to="/">Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Another Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Something else here</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem>
                                                        <Link to="/">One more seperated link</Link>
                                                    </DropdownItem>
                                                </Dropdown>
                                                <Dropdown label="Flags" className="col-md-3">
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/DE.png"/> Deutsch</Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/GB.png"/> English(UK)</Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/TR.png"/> Turkey</Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/FR.png"/> Français</Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/RO.png"/> Română</Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/IT.png"/> Italiano</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/ES.png"/> Español <Label type="default" text="soon"/> </Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/BR.png"/> Português <Label type="default" text="soon"/></Link></DropdownItem>
                                                    <DropdownItem><Link to="/"><Image src="assets/img/flags/JP.png"/> 日本語 <Label type="default" text="soon"/></Link></DropdownItem>
                                                </Dropdown>
                                                <Dropdown label="SELECT ITEM" className="col-md-3">
                                                    <DropdownItem onClick={(e) => (alert("Action 1"))}>Action 1</DropdownItem>
                                                    <DropdownItem  onClick={(e) => (alert("Action 2"))}>Action 2</DropdownItem>
                                                </Dropdown>
                                            </Row>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Dropdown label="Regular" className="col-md-3">\n'+
                                                        ' <DropdownItem><Link to="/">Action</Link></DropdownItem>\n'+
                                                        ' <DropdownItem><Link to="/">Another Action</Link></DropdownItem>\n'+
                                                        ' <DropdownItem><Link to="/">Something else here</Link></DropdownItem>\n'+
                                                        ' <DropdownItem className="divider"/>\n'+
                                                        ' <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>\n'+
                                                        ' <DropdownItem className="divider"/>\n'+
                                                        ' <DropdownItem><Link to="/">One more seperated link</Link></DropdownItem>\n'+
                                                    '</Dropdown>\n\n'+
                                                    '<Dropdown label="Flags" className="col-md-3">\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/DE.png"/> Deutsch</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/GB.png"/> English(UK)</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/TR.png"/> Turkey</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/FR.png"/> Français</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/RO.png"/> Română</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/"><Image src="assets/img/flags/IT.png"/> Italiano</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem>\n <Link to="/">\n  <Image src="assets/img/flags/ES.png"/> Español <Label type="default" text="soon"/> \n </Link>\n</DropdownItem>\n'+
                                                    ' <DropdownItem>\n <Link to="/">\n  <Image src="assets/img/flags/BR.png"/> Português <Label type="default" text="soon"/>\n </Link>\n</DropdownItem>\n'+
                                                    ' <DropdownItem>\n <Link to="/">\n  <Image src="assets/img/flags/JP.png"/> 日本語 <Label type="default" text="soon"/>\n </Link>\n</DropdownItem>\n'+
                                                    '</Dropdown>\n\n'+

                                                    'You can use onClick prop for event handling.\n\n'+
                                                    '<Dropdown label="SELECT ITEM" className="col-md-3">\n'+
                                                        ' <DropdownItem onClick={(e)=> (alert("Action 1"))}>Action 1</DropdownItem>\n'+
                                                        ' <DropdownItem  onClick={(e)=> (alert("Action 2"))}>Action 2</DropdownItem>\n'+
                                                    '</Dropdown>'

                                                }
                                            </Highlight>
                                            <p>You can give different colors to <code>Dropdown</code> using <code>color</code> prop.</p>
                                            <Row>
                                                <Dropdown label="Primary" className="col-md-3" color="primary">
                                                    <DropdownItem><Link to="/">Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Another Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Something else here</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem>
                                                        <Link to="/">One more seperated link</Link>
                                                    </DropdownItem>
                                                </Dropdown>
                                                <Dropdown label="Info" className="col-md-3" color="info">
                                                    <DropdownItem><Link to="/">Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Another Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Something else here</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem>
                                                        <Link to="/">One more seperated link</Link>
                                                    </DropdownItem>
                                                </Dropdown>
                                                <Dropdown label="Success" className="col-md-3" color="success">
                                                    <DropdownItem><Link to="/">Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Another Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Something else here</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem>
                                                        <Link to="/">One more seperated link</Link>
                                                    </DropdownItem>
                                                </Dropdown>
                                                <Dropdown label="Danger" className="col-md-3" color="danger">
                                                    <DropdownItem><Link to="/">Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Another Action</Link></DropdownItem>
                                                    <DropdownItem><Link to="/">Something else here</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>
                                                    <DropdownItem className="divider"/>
                                                    <DropdownItem>
                                                        <Link to="/">One more seperated link</Link>
                                                    </DropdownItem>
                                                </Dropdown>
                                            </Row>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Dropdown label="Primary" className="col-md-3" color="primary">\n' +
                                                    ' <DropdownItem><Link to="/">Action</Link></DropdownItem>\n' +
                                                    ' <DropdownItem><Link to="/">Another Action</Link></DropdownItem>\n' +
                                                    ' <DropdownItem><Link to="/">Something else here</Link></DropdownItem>\n' +
                                                    ' <DropdownItem className="divider"/>\n' +
                                                    ' <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>\n' +
                                                    ' <DropdownItem className="divider"/>\n' +
                                                    ' <DropdownItem>\n' +
                                                    ' <Link to="/">One more seperated link</Link>\n' +
                                                    ' </DropdownItem>\n' +
                                                    '</Dropdown>\n\n' +
                                                    '<Dropdown label="Info" className="col-md-3" color="info">\n'+
                                                    ' <DropdownItem><Link to="/">Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Another Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Something else here</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem>\n'+
                                                    ' <Link to="/">One more seperated link</Link>\n'+
                                                    ' </DropdownItem>\n'+
                                                    '</Dropdown>\n\n'+
                                                    '<Dropdown label="Success" className="col-md-3" color="success">\n'+
                                                    ' <DropdownItem><Link to="/">Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Another Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Something else here</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem>\n'+
                                                    ' <Link to="/">One more seperated link</Link>\n'+
                                                    ' </DropdownItem>\n'+
                                                    '</Dropdown>\n\n'+
                                                    '<Dropdown label="Danger" className="col-md-3" color="danger">\n'+
                                                    ' <DropdownItem><Link to="/">Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Another Action</Link></DropdownItem>\n'+
                                                    ' <DropdownItem><Link to="/">Something else here</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem><Link to="/">Seperated link</Link></DropdownItem>\n'+
                                                    ' <DropdownItem className="divider"/>\n'+
                                                    ' <DropdownItem>\n'+
                                                    ' <Link to="/">One more seperated link</Link>\n'+
                                                    ' </DropdownItem>\n'+
                                                    '</Dropdown>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="inputs-row">
                                            <h2>Inputs </h2>
                                            <legend></legend>

                                            <p>
                                                We restyled the Bootstrap input to give it a more flat, minimal look. You can use them with regular labels, floating labels and states or input groups.
                                            </p>
                                            <Row>
                                                <Col sm="4">
                                                    <Input type="text" hint="Regular"/>
                                                </Col>
                                                <Col sm="4">
                                                    <Input type="email" animType="floating" labelText="With Floating Label"/>
                                                </Col>
                                                <Col sm="4">
                                                    <Input type="text" animType="success" defaultValue="Success" labelText="Success input"/>
                                                </Col>
                                                <Col sm="4">
                                                    <Input type="text" animType="error" defaultValue="Error Input" labelText="Error input"/>
                                                </Col>
                                                <Col sm="4">
                                                    <IconInput type="text" materialIconName="group" hint="With Material Icons"/>
                                                </Col>
                                                <Col sm="4">
                                                    <IconInput type="text" faIconName="group" hint="With Font Awesome Icons"/>
                                                </Col>
                                            </Row>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Col sm="4">\n'+
                                                        ' <Input type="text" hint="Regular"/>\n'+
                                                    '</Col>\n\n'+
                                                    '<Col sm="4">\n'+
                                                    ' <Input type="email" animType="floating" labelText="With Floating Label"/>\n'+
                                                    '</Col>\n'+
                                                    '<Col sm="4">\n'+
                                                    ' <Input type="text" animType="success" defaultValue="Success" labelText="Success input"/>\n'+
                                                    '</Col>\n\n'+
                                                    '<Col sm="4">\n'+
                                                    ' <Input type="text" animType="error" defaultValue="Error Input" labelText="Error input"/>\n'+
                                                    '</Col>\n\n'+
                                                    '<Col sm="4">\n'+
                                                    ' <IconInput type="text" materialIconName="group" hint="With Material Icons"/>\n'+
                                                    '</Col>\n\n'+
                                                    '<Col sm="4">\n'+
                                                    ' <IconInput type="text" faIconName="group" hint="With Font Awesome Icons"/>\n'+
                                                    '</Col>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="textarea-row">
                                            <h2>Textarea</h2>
                                            <legend></legend>
                                            <p>The textarea has a new style, so it looks similar to all other inputs.</p>
                                            <Textarea rows={5} name="txt_1" hint="Here can be your nice text"/>
                                            <Highlight>
                                                {
                                                    '<Textarea rows={5} name="txt_1" hint="Here can be your nice text"/>'
                                                }
                                            </Highlight>
                                        </div>

                                        <div className="tim-row" id="navbar-row">
                                            <h2>Navbar </h2>
                                            <legend></legend>
                                            <p>The classic Bootstrap Navbar was restyled:</p>
                                            <Navbar default>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Navbar default>\n'+
                                                        ' <Container fluid>\n'+
                                                            '  <MenuToggle>\n'+
                                                                '   <Router>\n'+
                                                                    '    <Link to="/" className="navbar-brand">\n'+
                                                                        '     Brand\n'+
                                                                    '    </Link>\n'+
                                                                '   </Router>\n'+
                                                            '   </MenuToggle>\n'+
                                                            '   <Menu  id="menu">\n'+
                                                                '     <MenuItem to="/" active>Link</MenuItem>\n'+
                                                                '     <MenuItem to="/">Link</MenuItem>\n'+
                                                                '    <SubMenu right subMenuTitle="Dropdown">\n'+
                                                                    '     <MenuItemHeader>Dropdown header</MenuItemHeader>\n'+
                                                                    '     <MenuItem to="/">Action</MenuItem>\n'+
                                                                    '     <MenuItem to="/">Another action</MenuItem>\n'+
                                                                    '     <MenuItem to="/">Something else here</MenuItem>\n'+
                                                                    '     <MenuItemSeparated/>\n'+
                                                                    '     <MenuItem to="/">Seperated link</MenuItem>\n'+
                                                                    '     <MenuItemSeparated/>\n'+
                                                                    '     <MenuItem to="/">One more seperated link</MenuItem>\n'+
                                                                '    </SubMenu>\n'+
                                                            '   </Menu>\n'+
                                                        '  </Container>\n'+
                                                    '</Navbar>\n'
                                                }
                                            </Highlight>
                                            <p>Besides the prop of <code>default or primary</code> color option,you can use <code>success</code>,<code>warning</code>,<code>info</code> and <code>danger</code> color props options.</p>
                                            <Navbar primary>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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

                                            <Navbar info>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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

                                            <Navbar success>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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

                                            <Navbar warning>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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

                                            <Navbar danger>
                                                <Container fluid>
                                                    <MenuToggle>
                                                        <Router>
                                                            <Link to="/" className="navbar-brand">
                                                                Brand
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

                                            <p>Besides all this customization, we have an extra prop <code>transparent</code> is a special prop that you can to use if you want the navbar to be transparent and then turn to color after scrolling 260px using the prop <code>colorOnScroll</code>. We recommend that the part of your page that has the transparent navbar contains something non-cluttered, like an image.
                                                If you want to see a nice example in details, check the <Link to="/examples/profile" target="_blank">Profile Page</Link>
                                            </p>
                                        </div>

                                        <div className="tim-row" id="navpills-row">
                                            <h2> Nav Pills</h2>
                                            <legend></legend>
                                            <p>We changed the design for the Bootstrap nav pills into something a bit more fresh.You can use <code>type</code> prop for color options.</p>
                                            <p>We also added more color classes for customization like <code>type="primary"</code>,<code>type="info"</code>,<code>type="success"</code>,<code>type="warning"</code>,<code>type="danger"</code></p>

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
                                            </NavPills>
                                            <br/>
                                            <NavPills type="info"> {/*type: "primary", "info", "success", "warning","danger"*/}
                                                <Pill targetElement="dashboard" className="active">
                                                    <Icon iconName="dashboard"/> Dashboard
                                                </Pill>
                                                <Pill targetElement="schedule">
                                                    <Icon iconName="schedule"/> Schedule
                                                </Pill>
                                                <Pill targetElement="tasks">
                                                    <Icon iconName="list"/> Tasks
                                                </Pill>
                                            </NavPills>
                                            <br/>
                                            <NavPills type="success"> {/*type: "primary", "info", "success", "warning","danger"*/}
                                                <Pill targetElement="dashboard">
                                                    <Icon iconName="dashboard"/> Dashboard
                                                </Pill>
                                                <Pill targetElement="schedule" className="active">
                                                    <Icon iconName="schedule"/> Schedule
                                                </Pill>
                                                <Pill targetElement="tasks">
                                                    <Icon iconName="list"/> Tasks
                                                </Pill>
                                            </NavPills>
                                            <br/>
                                            <NavPills type="warning"> {/*type: "primary", "info", "success", "warning","danger"*/}
                                                <Pill targetElement="dashboard">
                                                    <Icon iconName="dashboard"/> Dashboard
                                                </Pill>
                                                <Pill targetElement="schedule" className="active">
                                                    <Icon iconName="schedule"/> Schedule
                                                </Pill>
                                                <Pill targetElement="tasks">
                                                    <Icon iconName="list"/> Tasks
                                                </Pill>
                                            </NavPills>
                                            <br/>
                                            <NavPills type="danger"> {/*type: "primary", "info", "success", "warning","danger"*/}
                                                <Pill targetElement="dashboard">
                                                    <Icon iconName="dashboard"/> Dashboard
                                                </Pill>
                                                <Pill targetElement="schedule" className="active">
                                                    <Icon iconName="schedule"/> Schedule
                                                </Pill>
                                                <Pill targetElement="tasks">
                                                    <Icon iconName="list"/> Tasks
                                                </Pill>
                                            </NavPills>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<NavPills type="primary">\n'+
                                                        ' <Pill targetElement="dashboard">\n'+
                                                            '  <Icon iconName="dashboard"/> Dashboard\n'+
                                                        ' </Pill>\n'+
                                                        ' <Pill targetElement="schedule" className="active">\n'+
                                                            '  <Icon iconName="schedule"/> Schedule\n'+
                                                        ' </Pill>\n'+
                                                        ' <Pill targetElement="tasks">\n'+
                                                            '  <Icon iconName="list"/> Tasks\n'+
                                                        ' </Pill>\n'+
                                                    '</NavPills>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="pagination-row">
                                            <h2>Pagination</h2>
                                            <legend></legend>
                                            <p>We use <Link to="https://www.npmjs.com/package/react-paginate" target="_blank">react-paginate</Link> component for pagination.You can check demo from
                                                 <Link to="https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js" target="_blank"> Github</Link></p>
                                            <p>You can use <code>containerClassName</code> prop for color options.Color classes is <code>pagination-primary</code>,
                                                <code>pagination-info</code>,<code>pagination-success</code>,<code>pagination-warning</code> and <code>pagination-danger</code>.</p>
                                            <Paginate previousLabel={"<"}
                                                      nextLabel={">"}
                                                      breakLabel={<a href="">...</a>}
                                                      breakClassName={"break-me"}
                                                      marginPagesDisplayed={2}
                                                      pageRangeDisplayed={5}
                                                      containerClassName={"pagination pagination-primary"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                                      subContainerClassName={"pages pagination"}
                                                      activeClassName={"active"}/>

                                            <Paginate previousLabel={"<"}
                                                      nextLabel={">"}
                                                      breakLabel={<a href="">...</a>}
                                                      breakClassName={"break-me"}
                                                      marginPagesDisplayed={2}
                                                      pageRangeDisplayed={5}
                                                      containerClassName={"pagination pagination-info"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                                      subContainerClassName={"pages pagination"}
                                                      activeClassName={"active"}/>

                                            <Paginate previousLabel={"<"}
                                                      nextLabel={">"}
                                                      breakLabel={<a href="">...</a>}
                                                      breakClassName={"break-me"}
                                                      marginPagesDisplayed={2}
                                                      pageRangeDisplayed={5}
                                                      containerClassName={"pagination pagination-success"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                                      subContainerClassName={"pages pagination"}
                                                      activeClassName={"active"}/>

                                            <Paginate previousLabel={"<"}
                                                      nextLabel={">"}
                                                      breakLabel={<a href="">...</a>}
                                                      breakClassName={"break-me"}
                                                      marginPagesDisplayed={2}
                                                      pageRangeDisplayed={5}
                                                      containerClassName={"pagination pagination-warning"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                                      subContainerClassName={"pages pagination"}
                                                      activeClassName={"active"}/>

                                            <Paginate previousLabel={"<"}
                                                      nextLabel={">"}
                                                      breakLabel={<a href="">...</a>}
                                                      breakClassName={"break-me"}
                                                      marginPagesDisplayed={2}
                                                      pageRangeDisplayed={5}
                                                      containerClassName={"pagination pagination-danger"} /*color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"*/
                                                      subContainerClassName={"pages pagination"}
                                                      activeClassName={"active"}/>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Paginate previousLabel={"<"}\n'+
                                                              '          nextLabel={">"}\n'+
                                                              '          breakLabel={<a href="">...</a>}\n'+
                                                              '          breakClassName={"break-me"}\n'+
                                                              '          marginPagesDisplayed={2}\n'+
                                                              '          pageRangeDisplayed={5}\n'+
                                                              '          containerClassName={"pagination pagination-primary"}\n'+
                                                              '          subContainerClassName={"pages pagination"}\n'+
                                                              '          activeClassName={"active"}/>\n'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="progressbar-row">
                                            <h2>Progress Bars</h2>
                                            <legend></legend>

                                            <p>You can use <code>type</code> prop for progress color.Color options is <code>primary</code>,<code>info</code>,<code>success</code>,<code>warning</code> and <code>danger</code></p>
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

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<ProgressBar type="primary">\n'+
                                                        ' <Progress min={0} max={100} value={30} currentValue={60} type="primary"/>\n'+
                                                    '</ProgressBar>\n'+

                                                    '<ProgressBar type="info">\n'+
                                                    ' <Progress min={0} max={100} value={60} currentValue={60} type="info"/>\n'+
                                                    '</ProgressBar>\n'+

                                                    '<ProgressBar type="danger">\n'+
                                                    ' <Progress min={0} max={100} value={35} currentValue={35} type="success"/>\n'+
                                                    ' <Progress min={0} max={100} value={20} currentValue={20} type="warning"/>\n'+
                                                    ' <Progress min={0} max={100} value={10} currentValue={10} type="danger"/>\n'+
                                                    '</ProgressBar>\n'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="sliders-row">
                                            <h2>Sliders</h2>
                                            <legend></legend>
                                            <p>We use  <Link to="https://refreshless.com/nouislider/slider-options" target="_blank"> noUiSlider</Link> plugin in our component.We created props for this component as <Link to="https://refreshless.com/nouislider/slider-options" target="_blank"> noUiSlider options</Link> </p>
                                            {/*See other options at https://refreshless.com/nouislider/slider-options*/}
                                            <Slider range={{min: 0, max: 100}} start={30} connect="lower"/>

                                            <Slider start={[20, 80]} connect={[true,true,false]} range={{'min': 0, 'max': 100}}/>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Slider range={{min: 0, max: 100}} start={30} connect="lower"/>\n'+
                                                    '<Slider start={[20, 80]} connect={[true,true,false]} range={{\'min\': 0, \'max\': 100}}/>'
                                                }
                                            </Highlight>
                                        </div>

                                        <div className="tim-row" id="labels-row">
                                            <h2>Labels</h2>
                                            <legend></legend>
                                            <p>We restyled the default options for labels and we added the filled class, that can be used in any combination.You can use <code>type</code>for color classes.
                                                The prop's options is <code>default</code>,<code>primary</code>,<code>info</code>,<code>success</code>,<code>warning</code>,<code>danger</code></p>

                                            <Label type="default" text="Default"/>
                                            <Label type="primary" text="Primary"/>
                                            <Label type="info" text="Info"/>
                                            <Label type="success" text="Success"/>
                                            <Label type="warning" text="Warning"/>
                                            <Label type="danger" text="Danger"/>

                                            <br/>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Label type="default" text="Default"/>\n' +
                                                    '<Label type="primary" text="Primary"/>\n' +
                                                    '<Label type="info" text="Info"/>\n' +
                                                    '<Label type="success" text="Success"/>\n' +
                                                    '<Label type="warning" text="Warning"/>\n' +
                                                    '<Label type="danger" text="Danger"/>\n'
                                                }
                                            </Highlight>
                                        </div>

                                        <div className="tim-row" id="tables-row">
                                            <h2>Tables</h2>
                                            <legend></legend>
                                            <p>We use <Link to="https://www.npmjs.com/package/react-table" target="_blank">react-table</Link> for table component.It's great table component for easy of use and functionality.Thanks to <Link to="https://github.com/tannerlinsley" target="_blank">Tanner Linsley</Link> for this great component.</p>
                                            <p>You can implement basically this component by shown in below.There are many props for fully control the table.You can check the tutorial at <Link to="https://react-table.js.org/#/story/readme" target="_blank">react-table tutorial</Link></p>

                                            <Table
                                                data={data}
                                                columns={columns}
                                                filterable={true}
                                                defaultPageSize={5}
                                            />

                                            <h4>Prepare Table Data</h4>
                                            <p>Firstly we should prepare table data.</p>
                                            <Highlight language="html" className="prettyprint">
                                                {'const data = '+JSON.stringify(data,null, '\t')}
                                            </Highlight>
                                            <p>After we create columns.</p>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    ' const columns = [\n'+
                                                            '     {\n'+
                                                                '     Header: \'Name\',\n'+
                                                                '     accessor: \'name\'\n'+
                                                            '     }, \n     {\n'+
                                                                '     Header: \'Job Position\',\n'+
                                                                '     accessor: \'job_position\',\n'+
                                                                '     Cell: props => <span className=\'number\'>{props.value}</span>\n'+
                                                            '     }, \n     {\n'+
                                                                '     id: \'since\',\n'+
                                                                '     Header: \'Since\',\n'+
                                                                '     accessor: "since"\n'+
                                                            '     },\n     {\n'+
                                                                '     Header: \'Salary\',\n'+
                                                                '     accessor: "salary"\n'+
                                                            '     }, \n     {\n'+
                                                                '     Header: \'Actions\',\n'+
                                                                '     accessor: "actions",\n'+
                                                                '     Cell:<div>\n'+
                                                                    '        <Button btnType="simple" btnSize="xs" btnColor="info"><FontAwesome name="user"/></Button>\n'+
                                                                    '        <Button btnType="simple" btnSize="xs" btnColor="success"><FontAwesome name="edit"/></Button>\n'+
                                                                    '        <Button btnType="simple" btnSize="xs" btnColor="danger"><FontAwesome name="times"/></Button>\n'+
                                                                    '        </div>\n'+
                                                            '     }\n'+
                                                    '     ];'
                                                }
                                            </Highlight>

                                            <p>Then we can implemet <code>data</code> and <code>columns</code> props.</p>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Table\n'+
                                                        '   data={data}\n'+
                                                        '   columns={columns}\n'+
                                                        '   filterable={true}\n'+
                                                        '   defaultPageSize={5}\n'+
                                                    '/>'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="datepicker-row">
                                            <h2>Datepicker</h2>
                                            <legend></legend>
                                            <p>We use <Link to="https://hacker0x01.github.io/react-datepicker/" target="_blank">react-datepicker</Link> for datepicker component.You can check <Link to="https://hacker0x01.github.io/react-datepicker/" target="_blank">react-datepicker</Link> implementation examples with many props.</p>
                                            <Row>
                                                <Col md="4">
                                                    <Datepicker className="form-control"/>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Datepicker className="form-control"/>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="modal-row">
                                            <h2>Modals</h2>
                                            <legend></legend>
                                            <p>We restyled the classic Bootstrap Modal and gave it a more simple look.Also you can change modal size with <code>size</code> prop.
                                                (e.g. <code>size="lg"</code>)</p>

                                            <Modal title="Modal title"> {/*You can set size lg or sm*/}
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                            </Modal>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Modal title="Modal title">\n'+
                                                        '   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n'+
                                                    '</Modal>\n'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="tooltip-row">
                                            <h2>Tooltips</h2>
                                            <legend></legend>
                                            <p style={{marginBottom:'45px'}}>We restyled the Bootstrap tooltip.You can change tooltip title box direction with using <code>direction</code> prop.
                                                Required props is <code>title</code> and <code>direction</code></p>
                                            <ButtonTooltip title="Tooltip on top" text="On top" direction="top"/>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<ButtonTooltip title="Tooltip on top" text="On top" direction="top"/>'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="popover-row">
                                            <h2>Popovers</h2>
                                            <legend></legend>
                                            <p>
                                                We restyled the Bootstrap popover to align with the Material Design Concept. <br />
                                                Required props is <code>title</code>,<code>content</code>,<code>text</code> and <code>direction</code>.
                                            </p>

                                            <Popover title="Popover on top"
                                                     content="Here will be some very useful information about his popover."
                                                     text="On top"
                                                     direction="top"/>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Popover title="Popover on top"\n'+
                                                             '      content="Here will be some very useful information about his popover."\n'+
                                                             '      text="On top"\n'+
                                                             '      direction="top"/>\n'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="icons-row">
                                            <h2>Material Icons</h2>
                                            <legend></legend>
                                            <p>
                                                We used the default <Link to="https://design.google.com/icons/" target="_blank">Icons for the Material Design</Link> which provided by Google.
                                            </p>
                                            <Icon iconName="face"/>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                   '<Icon iconName="face"/>'
                                                }
                                            </Highlight>

                                            <p>You can change icon color with using <code>type</code> prop.Color options is <code>primary,info,success,warning</code> and <code>danger</code>.</p>
                                            <div className="features">
                                                <Row>
                                                    <Col md="2">
                                                        <div className="info">
                                                            <Icon iconName="chat" type="primary"/>
                                                        </div>
                                                    </Col>
                                                    <Col md="2">
                                                        <div className="info">
                                                            <Icon iconName="info_outline" type="info"/>
                                                        </div>
                                                    </Col>
                                                    <Col md="2">
                                                        <div className="info">
                                                            <Icon iconName="verified_user" type="success"/>
                                                        </div>
                                                    </Col>
                                                    <Col md="2">
                                                        <div className="info">
                                                            <Icon iconName="warning" type="warning"/>
                                                        </div>
                                                    </Col>
                                                    <Col md="2">
                                                        <div className="info">
                                                            <Icon iconName="remove_circle_outline" type="danger"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<div className="features">\n'+
                                                    ' <Row>\n'+
                                                        '  <Col md="2">\n'+
                                                            '   <div className="info">\n'+
                                                                '    <Icon iconName="chat" type="primary"/>\n'+
                                                            '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                            '   <div className="info">\n'+
                                                                '    <Icon iconName="info_outline" type="info"/>\n'+
                                                            '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                            '   <div className="info">\n'+
                                                                '    <Icon iconName="verified_user" type="success"/>\n'+
                                                            '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                            '   <div className="info">\n'+
                                                                '    <Icon iconName="warning" type="warning"/>\n'+
                                                            '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                            '   <div className="info">\n'+
                                                                '    <Icon iconName="remove_circle_outline" type="danger"/>\n'+
                                                            '   </div>\n'+
                                                        '  </Col>\n'+
                                                    ' </Row>\n'+
                                                    '</div>'
                                                }
                                            </Highlight>
                                            <div className="tim-row" id="fontawesome-row">
                                                <h2>Fontawesome Icons</h2>
                                                <legend></legend>
                                                <p>We use <Link to="https://www.npmjs.com/package/react-fontawesome" target="_blank">react-fontawesome</Link> component for Fontawesome icons.</p>
                                                <p>You can use basically using <code>name</code> prop.</p>
                                                <FontAwesome name="check-circle-o"/>
                                                <Highlight language="html" className="prettyprint">
                                                    {
                                                        '<FontAwesome name="check-circle-o"/>'
                                                    }
                                                </Highlight>
                                                <p>You can change size of icon with <code>size</code> prop.</p>

                                                    <Row>
                                                        <Col md="2">
                                                            <div className="info">
                                                                <FontAwesome name="check-circle-o" size="5x"/>
                                                            </div>
                                                        </Col>
                                                        <Col md="2">
                                                            <div className="info">
                                                                <FontAwesome name="check-circle-o" size="4x"/>
                                                            </div>
                                                        </Col>
                                                        <Col md="2">
                                                            <div className="info">
                                                                <FontAwesome name="check-circle-o" size="3x"/>
                                                            </div>
                                                        </Col>
                                                        <Col md="2">
                                                            <div className="info">
                                                                <FontAwesome name="check-circle-o" size="2x"/>
                                                            </div>
                                                        </Col>
                                                        <Col md="2">
                                                            <div className="info">
                                                                <FontAwesome name="check-circle-o"/>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                <Highlight language="html" className="prettyprint">
                                                    {
                                                        ' <Row>\n'+
                                                        '  <Col md="2">\n'+
                                                        '   <div className="info">\n'+
                                                        '    <FontAwesome name="check-circle-o" size="5x"/>\n'+
                                                        '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                        '   <div className="info">\n'+
                                                        '    <FontAwesome name="check-circle-o" size="4x"/>\n'+
                                                        '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                        '   <div className="info">\n'+
                                                        '    <FontAwesome name="check-circle-o" size="3x"/>\n'+
                                                        '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                        '   <div className="info">\n'+
                                                        '    <FontAwesome name="check-circle-o" size="2x"/>\n'+
                                                        '   </div>\n'+
                                                        '  </Col>\n'+
                                                        '  <Col md="2">\n'+
                                                        '   <div className="info">\n'+
                                                        '    <FontAwesome name="check-circle-o"/>\n'+
                                                        '   </div>\n'+
                                                        '  </Col>\n'+
                                                        ' </Row>\n'
                                                    }
                                                </Highlight>

                                            </div>
                                            <div className="tim-row" id="notification-row">
                                                <h2> Notifications </h2>
                                                <legend></legend>
                                                <p>The new notifications are looking fresh and clean.You can use <code>type</code> prop for color options. </p>
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
                                                <br/>
                                                <Highlight language="html" className="prettyprint">
                                                    {
                                                        '<Notification type="info">\n'+
                                                            ' <b>Info alert:</b> You\'ve got some friends nearby, stop looking at your phone and find them...\n'+
                                                        '</Notification>\n'+
                                                        '<Notification type="success">\n'+
                                                        ' <b>Success Alert:</b> Yuhuuu! You\'ve got your $11.99 album from The Weeknd\n'+
                                                        '</Notification>\n'+
                                                        '<Notification type="warning">\n'+
                                                        ' <b>Warning Alert:</b> Hey, it looks like you still have the "copyright &copy;  2015" in your footer. Please update it!\n'+
                                                        '</Notification>\n'+
                                                        '<Notification type="danger">\n'+
                                                        ' <b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse for your Boss...\n'+
                                                        '</Notification>\n'
                                                    }
                                                </Highlight>
                                            </div>
                                            <div className="tim-row" id="blockquote-row">
                                                <h2>Blockquote</h2>
                                                <legend></legend>
                                                <p>You can easily create blockquote with this component.Required props is <code>text</code> and <code>speaker</code>.</p>
                                                <Blockquote text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                            speaker="Kanye West, Musician"/>

                                                <Highlight language="html" className="prettyprint">
                                                    {
                                                        '<Blockquote text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."\n'+
                                                                    '     speaker="Kanye West, Musician"/>'
                                                    }
                                                </Highlight>
                                            </div>
                                            <div className="tim-row" id="form-row">
                                                <h2>Form</h2>
                                                <legend></legend>
                                                <p>You can write your own custom submit function to <code>_onSubmit</code> prop when the form submitted. </p>
                                                <Row>
                                                    <Col md="12">

                                                        <h4 className="text-center description">Work With Us</h4>
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
                                                <Highlight language="html" className="prettyprint">
                                                    {
                                                        '<Form className="contact-form" _onSubmit={()=>{return false;}}>\n' +
                                                        ' <Row>\n' +
                                                        '  <Col md="6">\n' +
                                                        '   <Input type="text" animType="floating" labelText="Your Name" />\n' +
                                                        '  </Col>\n' +
                                                        '  <Col md="6">\n' +
                                                        '   <Input type="email" animType="floating" labelText="Your Email" />\n' +
                                                        '  </Col>\n' +
                                                        ' </Row>\n' +
                                                        '    <Textarea rows={4} name="msg" labelText="Your Message" animType="floating"/>\n' +
                                                        ' <Row>\n' +
                                                        '  <Col md="4" md-offset="4" className="text-center">\n' +
                                                        '   <Button type="submit" btnColor="primary" className="btn-raised">Send message</Button>\n' +
                                                        '  </Col>\n' +
                                                        ' </Row>\n' +
                                                        '</Form>\n'
                                                    }
                                                </Highlight>
                                            </div>
                                        </div>
                                        <div className="tim-row" id="image-row">
                                            <h2>Image</h2>
                                            <legend></legend>
                                            <p>You can create different image styles with using <code>rounded,raised,circle</code> props.These props is in boolean type.</p>
                                            <Row>
                                                <Col sm="2">
                                                    <h4>Rounded Image</h4>
                                                    <Image src="assets/img/avatar.jpg" alt="Rounded Image" responsive rounded/>
                                                </Col>
                                                <Col sm="2" sm-offset="1">
                                                    <h4>Circle Image</h4>
                                                    <Image src="assets/img/avatar.jpg" alt="Circle Image" responsive circle/>
                                                </Col>
                                                <Col sm="2" sm-offset="1">
                                                    <h4>Rounded Raised</h4>
                                                    <Image src="assets/img/avatar.jpg" alt="Raised Image" responsive rounded raised/>
                                                </Col>
                                                <Col sm="2" sm-offset="1">
                                                    <h4>Circle Raised</h4>
                                                    <Image src="assets/img/avatar.jpg" alt="Thumbnail Image" responsive circle raised/>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Row>\n' +
                                                    ' <Col sm="2">\n' +
                                                    '  <h4>Rounded Image</h4>\n' +
                                                    '  <Image src="assets/img/avatar.jpg" alt="Rounded Image" responsive rounded/>\n' +
                                                    ' </Col>\n' +
                                                    ' <Col sm="2" sm-offset="1">\n' +
                                                    '  <h4>Circle Image</h4>\n' +
                                                    '  <Image src="assets/img/avatar.jpg" alt="Circle Image" responsive circle/>\n' +
                                                    ' </Col>\n' +
                                                    ' <Col sm="2" sm-offset="1">\n' +
                                                    '  <h4>Rounded Raised</h4>\n' +
                                                    '  <Image src="assets/img/avatar.jpg" alt="Raised Image" responsive rounded raised/>\n' +
                                                    ' </Col>\n' +
                                                    ' <Col sm="2" sm-offset="1">\n' +
                                                    '  <h4>Circle Raised</h4>\n' +
                                                    '  <Image src="assets/img/avatar.jpg" alt="Thumbnail Image" responsive circle raised/>\n' +
                                                    ' </Col>\n'+
                                                    '</Row>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="grid-row">
                                            <h2>Grid System</h2>
                                            <legend></legend>
                                            <p>You can use <code>Row</code> and <code>Col</code> components to build a grid that scales up to 12 columns as the viewport size increases. </p>
                                            <Container fluid={true}>
                                            <Row>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                                <Col md="1" style={showGridStyle}>md-1</Col>
                                            </Row>
                                            <Row>
                                                <Col md="8" style={showGridStyle}>md-8</Col>
                                                <Col md="4" style={showGridStyle}>md-4</Col>
                                            </Row>
                                            <Row>
                                                <Col md="4" style={showGridStyle}>md-4</Col>
                                                <Col md="4" style={showGridStyle}>md-4</Col>
                                                <Col md="4" style={showGridStyle}>md-4</Col>
                                            </Row>
                                            <Row>
                                                <Col md="6" style={showGridStyle}>md-6</Col>
                                                <Col md="6" style={showGridStyle}>md-6</Col>
                                            </Row>
                                            </Container>

                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Row>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    ' <Col md="1">md-1</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col md="8">md-8</Col>\n'+
                                                    ' <Col md="4">md-4</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col md="4">md-4</Col>\n'+
                                                    ' <Col md="4">md-4</Col>\n'+
                                                    ' <Col md="4">md-4</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col md="6">md-6</Col>\n'+
                                                    ' <Col md="6">md-6</Col>\n'+
                                                    '</Row>'
                                                }
                                            </Highlight>

                                            <h4>Mobile and desktop</h4>

                                            <Container fluid={true}>
                                                <Row>
                                                    <Col xs="12" md="8" style={showGridStyle}>xs-12 md-8</Col>
                                                    <Col xs="6" md="4" style={showGridStyle}>xs-6 md-4</Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" md="4" style={showGridStyle}>xs-6 md-4</Col>
                                                    <Col xs="6" md="4" style={showGridStyle}>xs-6 md-4</Col>
                                                    <Col xs="6" md="4" style={showGridStyle}>xs-6 md-4</Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" style={showGridStyle}>xs-6</Col>
                                                    <Col xs="6" style={showGridStyle}>xs-6</Col>
                                                </Row>
                                            </Container>
                                            <br/>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Row>\n'+
                                                        ' <Col xs="12" md="8">xs-12 md-8</Col>\n'+
                                                        ' <Col xs="6" md="4">xs-6 md-4</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col xs="6" md="4">xs-6 md-4</Col>\n'+
                                                    ' <Col xs="6" md="4">xs-6 md-4</Col>\n'+
                                                    ' <Col xs="6" md="4">xs-6 md-4</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col xs="6">xs-6</Col>\n'+
                                                    ' <Col xs="6">xs-6</Col>\n'+
                                                    '</Row>'
                                                }
                                            </Highlight>

                                            <h4>Offsetting columns</h4>

                                            <Container fluid={true}>
                                                <Row>
                                                    <Col md="4" style={showGridStyle}>md-4</Col>
                                                    <Col md="4" md-offset="4" style={showGridStyle}>md-4 md-offset-4</Col>
                                                </Row>
                                                <Row>
                                                    <Col md="3" md-offset="3" style={showGridStyle}>md-3 md-offset-3</Col>
                                                    <Col md="3" md-offset="3" style={showGridStyle}>md-3 md-offset-3</Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6" md-offset="3" style={showGridStyle}>md-6 md-offset-3</Col>
                                                </Row>
                                            </Container>

                                            <br/>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Row>\n'+
                                                        ' <Col md="4">md-4</Col>\n'+
                                                        ' <Col md="4" md-offset="4">md-4 md-offset-4</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col md="3" md-offset="3">md-3 md-offset-3</Col>\n'+
                                                    ' <Col md="3" md-offset="3">md-3 md-offset-3</Col>\n'+
                                                    '</Row>\n'+
                                                    '<Row>\n'+
                                                    ' <Col md="6" md-offset="3">md-6 md-offset-3</Col>\n'+
                                                    '</Row>'
                                                }
                                            </Highlight>


                                        </div>
                                        <div className="tim-row" id="carousel-row">
                                            <h2>Carousel</h2>
                                            <legend></legend>
                                            <p>We make so simple to implementing of carousel.It holds child elements as carousel items.You can provide fully control with using props.</p>
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
                                            <br/><br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Carousel>\n'+
                                                        ' <div>\n'+
                                                            '  <Image src="assets/img/bg2.jpeg" responsive/>\n'+
                                                            '  <div className="carousel-caption">\n'+
                                                                '   <h4><Icon iconName="location_on"/> Yellowstone National Park, United States</h4>\n'+
                                                            '  </div>\n'+
                                                        ' </div>\n'+
                                                        ' <div>\n'+
                                                            '  <Image src="assets/img/bg3.jpeg" responsive/>\n'+
                                                            '  <div className="carousel-caption">\n'+
                                                                '   <h4><Icon iconName="location_on"/> Somewhere Beyond, United States</h4>\n'+
                                                            '  </div>\n'+
                                                        ' </div>\n'+
                                                        ' <div>\n'+
                                                            '<Image src="assets/img/bg4.jpeg" responsive/>\n'+
                                                            '  <div className="carousel-caption">\n'+
                                                                '   <h4><Icon iconName="location_on"/> Yellowstone National Park, United States</h4>\n'+
                                                            '  </div>\n'+
                                                        ' </div>\n'+
                                                    '</Carousel>'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="container-row">
                                            <h2>Container</h2>
                                            <legend></legend>
                                            <p>You can use <code>fluid</code> prop for creating fluid container.This prop is boolean</p>
                                            <Container fluid={true}>
                                                I am in the fluid container
                                            </Container>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Container fluid={true}>\n'+
                                                    ' I am in the fluid container\n'+
                                                    '</Container>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="section-row">
                                            <h2>Section</h2>
                                            <legend></legend>
                                            <p>You can use <code>sectionType</code> prop for using different section types.It's creating html class for section.</p>
                                            <Section sectionType="section-tabs">
                                                This is tabs section
                                            </Section>
                                            <br/><br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Section sectionType="section-tabs">\n'+
                                                         ' This is tabs section\n'+
                                                    '</Section>'
                                                }
                                            </Highlight>

                                        </div>
                                        <div className="tim-row" id="wrapper-row">
                                            <h2>Wrapper</h2>
                                            <legend></legend>
                                            <Wrapper>
                                                I am in the wrapper
                                            </Wrapper>
                                            <br/>
                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Wrapper>\n'+
                                                        'I am in the wrapper\n'+
                                                    '</Wrapper>'
                                                }
                                            </Highlight>
                                        </div>
                                        <div className="tim-row" id="footer-row">
                                            <h2>Footer</h2>
                                            <legend></legend>
                                            <p>We use <code>Copyright</code> component inside this component.</p>

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

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Footer>\n'+
                                                    ' <Container>\n'+
                                                    ' <nav className="pull-left">\n'+
                                                    ' <Router>\n'+
                                                    '  <ul>\n'+
                                                    '   <li><Link to="http://www.creative-tim.com" target="_blank">Creative Tim</Link></li>\n'+
                                                    '   <li><Link to="http://presentation.creative-tim.com" target="_blank">About Us</Link></li>\n'+
                                                    '   <li><Link to="http://blog.creative-tim.com" target="_blank">Blog</Link></li>\n'+
                                                    '   <li><Link to="http://www.creative-tim.com/license" target="_blank">Licenses</Link></li>\n'+
                                                    '  </ul>\n'+
                                                    ' </Router>\n'+
                                                    '</nav>\n'+
                                                    ' <Copyright year="2016" className="pull-right">\n'+
                                                    'made with <FontAwesome name="heart"/> by Creative Tim for a better web.\n'+
                                                    ' </Copyright>\n'+
                                                    ' </Container>\n'+
                                                    '</Footer>'
                                                }
                                            </Highlight>


                                        </div>
                                        <div className="tim-row" id="logo-row">
                                            <h2>Logo</h2>
                                            <legend></legend>
                                            <p>Easily you can create <code>Logo</code> component with giving suit props.</p>
                                            <Logo logoImgSrc='assets/img/logo.png'
                                                  logoImgTitle='<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>'
                                                  logoImgAlt='Creative Tim Logo'
                                                  logoSlogan='Creative Tim'/>
                                            <br/>

                                            <Highlight language="html" className="prettyprint">
                                                {
                                                    '<Logo logoImgSrc=\'assets/img/logo.png\'\n'+
                                                          '    logoImgTitle=\'<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>\'\n'+
                                                          '    logoImgAlt=\'Creative Tim Logo\'\n'+
                                                          '    logoSlogan=\'Creative Tim\'/>'
                                                }
                                            </Highlight>
                                        </div>

                                    </Col>

                                </Row>

                            </Container>
                        </Section>

                    </Main>
                </Wrapper>
            </div>)
    }

}

export default Docs;