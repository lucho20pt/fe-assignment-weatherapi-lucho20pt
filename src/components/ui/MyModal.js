import { Modal, Button } from 'react-bootstrap'

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      // size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button size={'sm'} variant="outline-primary" onClick={props.onHide} title="Close">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
