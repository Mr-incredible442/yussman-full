/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AiOutlineDelete } from 'react-icons/ai';

import { LOCAL_URL } from '../../../helpers/variables';

function DeleteUser({ id, getUsers }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('accessToken');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = () => {
    setIsLoading(true);
    axios
      .delete(`${LOCAL_URL}/users/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        getUsers();
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
        variant='outline-danger'
        size='sm'
        onClick={handleShow}
        className='d-flex justify-content-center align-items-center'>
        <AiOutlineDelete />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size='sm'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete ?</p>
          <Button
            variant='outline-danger'
            disabled={isLoading}
            onClick={() => {
              deleteUser();
            }}>
            {isLoading ? 'Deleting...' : 'Yes'}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteUser;
