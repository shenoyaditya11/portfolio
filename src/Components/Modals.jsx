import Modal from 'react-bootstrap/Modal'; 
import Toast from 'react-bootstrap/Toast';



   export const SubmittingModal = (props)=>{
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Submitting
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your Query is getting submitted</h4>
          </Modal.Body>
        </Modal>
      );
    }
