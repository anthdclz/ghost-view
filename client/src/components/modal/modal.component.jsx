import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-modal';
import { selectAppIsModalOpen } from '../../redux/app/app.selectors.js';
import { toggleModal } from '../../redux/app/app.actions';
import './modal.styles.scss';

Modal.setAppElement('#root');
  
class ModalComponent extends React.Component {
    openModal = () => {
        this.props.toggleModal();
    }
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#2ee';
    }
    closeModal = () => {
        this.props.toggleModal();
    }
    render(){
        return(
            <Modal
              isOpen={this.props.isModalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.props.toggleModal}
              contentLabel="Example Modal"
              className="Modal_Content"
              overlayClassName="Modal_Overlay"
            >
              <h2 ref={(_subtitle) => (this.subtitle = _subtitle)}>I am a Modal</h2>
              <button onClick={this.props.toggleModal}>close</button>
            </Modal>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    isModalOpen: selectAppIsModalOpen
});
  
const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});  
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);