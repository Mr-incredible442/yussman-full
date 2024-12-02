/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { CHANSA_REGISTER_URL } from '../../../helpers/variables';

function NextShift() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLoading) {
      return;
    }

    axios
      .post(`${CHANSA_REGISTER_URL}/newshift`)
      .then(() => {
        handleClose();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Button size='lg' variant='primary' onClick={handleShow}>
        Next
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Next Shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='display-6 text-center '>
            Are you sure you want the next shift ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            type='submit'
            onClick={handleSubmit}
            disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Yes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NextShift;
