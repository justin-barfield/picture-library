import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '../components/Grid';
import Modal from 'react-modal';
import { SignInModal } from '../components/OurModal';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {

    state = {
        modalIsOpen: false

    }
    
    // Functions
    
    openModal = () => {
        this.setState({modalIsOpen: true});
}

afterOpenModal = () => {
    // references are now sync'd and can be accessed.

}

closeModal = () => {
    this.setState({modalIsOpen: false});
}

// Render Elements
    render() {
        return(
            <Container fluid>
        
                <Navbar
                openModal={this.openModal}
                >
                    
                </Navbar>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // closeModal={this.closeModal}
                    // openModal={this.openModal}
                    contentLabel="Example Modal" 
                    appElement={document.getElementById("root")}
                    >
                    <SignInModal 
                        closeModal={this.closeModal}
                    />
                </Modal>

                <Jumbotron fluid />
                
            </Container>
                        
        );
        
    }
};

export default Home;