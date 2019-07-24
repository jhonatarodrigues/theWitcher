import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class video extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
     
    afterOpenModal() {
        
    }
     
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        return (
            <div className="boxVideo">
                <div className="space">
                    <div onClick={this.openModal} className="content" style={{ background: 'url(' + this.props.thumb + ') center no-repeat' }}>

                        <div className="title">
                            {this.props.title}
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                
                        <iframe title={this.props.title}  src={'https://www.youtube.com/embed/' + this.props.video} ></iframe>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default video;