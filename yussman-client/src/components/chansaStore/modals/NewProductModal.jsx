/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { CHANSA_STORE_URL } from '../../../helpers/variables';

function NewProductModal({ id }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [section, setSection] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClear = () => {
    setName('');
    setPrice('');
    // setSection('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const modalData = {
      name,
      price: Number(price),
      section: 'food',
    };
    axios
      .post(`${CHANSA_STORE_URL}/${id}/addtostock`, modalData)
      .then(() => {
        handleClear();
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
      <Button variant='outline-info' onClick={handleShow}>
        New Product
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
          handleClear();
        }}
        backdrop='static'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                autoFocus
                autoComplete='off'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                autoComplete='off'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Label>Section</Form.Label>
            <Form.Select
              className='mb-3'
              required
              value={section}
              onChange={(e) => setSection(e.target.value)}>
              <option value='' disabled>
                Select section
              </option>
              <option value='drinks'>Drinks</option>
              <option value='food'>Food</option>
              <option value='other'>Other</option>
              <option value='shopA1'>Shop A1</option>
              <option value='shopA2'>Shop A2</option>
            </Form.Select> */}
            <Button variant='primary' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewProductModal;
