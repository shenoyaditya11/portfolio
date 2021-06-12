import Modal from 'react-bootstrap/Modal'; 
import Spinner from 'react-bootstrap/Spinner';
import 'utils/styles.css'



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
          <Modal.Body style={{width:'100%'}}>
          <div className='h-centered'>
            <Spinner 
                as="span"
                animation="border"
                variant="warning"
                role="status"
                aria-hidden="true"
            
            />
          </div>
          </Modal.Body>
        </Modal>
      );
    }
