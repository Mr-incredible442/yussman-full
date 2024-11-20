/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { STORE_LOCAL_URL } from '../../../helpers/variables';

function AddKeeper({ id }) {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${STORE_LOCAL_URL}/${id}/addkeeper`, {
        name: name.toLowerCase(),
      })
      .then(() => {
        setName('');
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
      <Button variant='outline-secondary' onClick={handleShow} size='sm'>
        +
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
          setName('');
        }}
        backdrop='static'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Keeper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                autoComplete='off'
                required
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='submit' disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddKeeper;
