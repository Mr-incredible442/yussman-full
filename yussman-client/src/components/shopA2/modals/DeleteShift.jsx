/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AiOutlineDelete } from 'react-icons/ai';

import { SHOPA2_URL } from '../../../helpers/variables';

function DeleteShift({
  shiftId,
  fetchData,
  disableDeleteBtn,
  setDisableDeleteBtn,
}) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteShift = () => {
    setIsLoading(true);
    axios
      .delete(`${SHOPA2_URL}/${shiftId}`)
      .then(() => {
        window.location.reload();
        handleClose();
      })
      .catch((err) => {
        console.error(err);
        handleClose();
        setIsLoading(false);
      });
    setTimeout(() => {
      fetchData();
      setIsLoading(false);
      handleClose();
    }, 50);
  };

  return (
    <>
      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => {
          handleShow(), setDisableDeleteBtn(true);
        }}
        disabled={disableDeleteBtn}
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
              deleteShift();
            }}>
            Yes
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteShift;