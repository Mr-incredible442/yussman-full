/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { CHANSA_RESTAURANT_URL } from '../../../helpers/variables';

function AddShift({ id }) {
  const [shift, setShift] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${CHANSA_RESTAURANT_URL}/${id}/addshift`, { shift })
      .then(() => {
        setShift('');
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
      <Button
        onClick={handleShow}
        variant='outline-secondary'
        size='sm'
        className='d-flex justify-content-center align-items-center ms-2 '>
        +
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
        backdrop='static'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Select
                type='text'
                autoComplete='off'
                required
                autoFocus
                value={shift}
                onChange={(e) => setShift(e.target.value)}>
                <option value='' disabled>
                  Select Shift
                </option>
                <option value='day'>Day</option>
                <option value='night'>Night</option>
              </Form.Select>
            </Form.Group>
            <Button variant='primary' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddShift;
