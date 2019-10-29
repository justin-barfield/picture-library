import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Col, Container, Row } from '../components/Grid';
import { Card, Button, Dropdown } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';


class Home extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        events: [],
        title: "",
        description: "",
        id: ""

    }
    
    // Functions
    /* Switch case added to take in the value from the navbar component and set the state to the proper Modal to be displayed. */
    openModal = (modalToOpen) => {
        switch (modalToOpen) {
            case 1:
                /* Sign-In modal */
                this.setState({ signInModal : true, signUpModal: false, modalIsOpen: true });
                break;

            case 2:
                /* Sign-Up modal */
                this.setState({ signUpModal : true, signInModal: false, modalIsOpen: true });
                break;

            case 3:
                /* Picture upload */

                break;
        
            default:
                break;
        }
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.

    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();
        /* TODO: handle form submit for searching events */
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        /* TODO: remove consol log */
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    loadEvents = ()=> {
        Api.getEvents()
            .then(res => {
                this.setState({ events: res.data, title:"", description:"", id:""})
            })
            .catch(err => console.log( err ))
    }

    componentDidMount() {
        this.loadEvents();
    }


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                {/* TODO: option needed to verify if sign-in is valid. if so do not render the sign-in/sign-up buttons */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />

                <Container>

                    <Col
                    num={"12"}
                    >
                        <Row>
                            <Col
                            num="10"
                            >
                                {/* TODO: convert to custom dropdown component like in docs online */}
                                <Dropdown>

                                    <Dropdown.Toggle 
                                    variant="success"
                                    id="events-dropdown"
                                    >
                                        Search Events!
                                    </Dropdown.Toggle>

                                    {this.state.events.length ? (
                                        
                                        <Dropdown.Menu>
                                            {this.state.events.map(events => (
                                                <Dropdown.Item
                                                key={events.id}
                                                /* html link for events */
                                                >
                                                    {events.title}
                                                </Dropdown.Item>
                                                ))}
                                        </Dropdown.Menu>

                                    ) : (

                                        <Dropdown.Menu>
                                            <Dropdown.Item>No Events Available</Dropdown.Item>
                                        </Dropdown.Menu>

                                    )}
                                    
                                </Dropdown>

                            </Col>
                        </Row>
                    {this.state.events.length ? (
                        
                        <Row
                        center
                        >
                            <Col
                            num={"10"}
                            >
                                {this.state.events.map(events => (

                                    <Row key={events._id}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>Card Body</Card.Text>
                                                <Button>Button</Button>
                                            </Card.Body>
                                        </Card>
                                    </Row>

                                ))}
                            </Col>

                        </Row>

                    ) : (<h3>Nothing</h3>)}
                    
                    </Col>
                    
                </Container>
                
            </div>
                        
        );
        
    }
};

export default Home;