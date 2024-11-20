/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BiEdit } from 'react-icons/bi';

import { SHOPA1_URL } from '../../../helpers/variables';

function ChangeNameOrPrice({ id, stock }) {
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(stock).length > 0) {
      setPrice(stock.price);
      setName(stock.name);
    }
  }, [stock]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClear = () => {
    setPrice('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const modalData = {
      price: Number(price),
      name,
    };
    axios
      .post(`${SHOPA1_URL}/${id}/editname/${stock._id}`, modalData)
      .then(() => {
        handleClear();
        handleClose();
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant='outline-info'
        size='sm'
        className='d-flex justify-content-center align-items-center'>
        <BiEdit />
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
          <Modal.Title>Edit Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
            <Button variant='primary' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading…' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChangeNameOrPrice;
