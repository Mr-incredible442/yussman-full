import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';

import { ChinsaliRegisterContext } from '../../context/ChinsaliRegisterContext';

import AddDate from './modals/AddDate';
import AddName from './modals/AddName';
import AddAcountant from './modals/AddAcountant';
import AddCashModal from './modals/AddCashModal';
import AddChangeModal from './modals/AddChangeModal';
import NextShift from './modals/NextShift';

import { CHINSALI_REGISTER_URL } from '../../helpers/variables';

function Final() {
  const [disabled, setDisable] = useState(true);
  const { RegisterShift } = useContext(ChinsaliRegisterContext);

  let totalBought = 0;
  let totalExpense = 0;
  if (Object.keys(RegisterShift).length > 0) {
    totalBought = RegisterShift.stock.reduce(
      (sum, product) => sum + product.priceBought,
      0,
    );
    totalExpense = RegisterShift.expense.reduce(
      (sum, item) => sum + item.amount,
      0,
    );
  }

  const check = useCallback(() => {
    if (
      RegisterShift !== null &&
      RegisterShift !== undefined &&
      Object.keys(RegisterShift).length > 0
    ) {
      const cashierLength = RegisterShift.name.length;
      const acountantLength = RegisterShift.accountant.length;
      const dateLength = RegisterShift.date.length;
      const cash = RegisterShift.cash;

      if (
        cashierLength > 0 &&
        acountantLength > 0 &&
        dateLength > 0 &&
        cash > 0
      ) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [RegisterShift]);

  useEffect(() => {
    check();
  }, [check]);

  const handleDeleteDate = () => {
    axios
      .post(`${CHINSALI_REGISTER_URL}/${RegisterShift._id}/deletedate`)
      .then(() => {
        check();
      });
  };
  const handleDeleteName = () => {
    axios
      .post(`${CHINSALI_REGISTER_URL}/${RegisterShift._id}/deletename`)
      .then(() => {
        check();
      });
  };
  const handleDeleteAccountant = () => {
    axios
      .post(`${CHINSALI_REGISTER_URL}/${RegisterShift._id}/deleteaccountant`)
      .then(() => {
        check();
      });
  };

  const handleDeleteCash = () => {
    axios
      .post(`${CHINSALI_REGISTER_URL}/${RegisterShift._id}/deletecash`)
      .then(() => {
        check();
      });
  };

  const handleDeleteChange = () => {
    axios
      .post(`${CHINSALI_REGISTER_URL}/${RegisterShift._id}/deletechange`)
      .then(() => {
        check();
      });
  };

  return (
    <>
      {Object.keys(RegisterShift).length > 0 && (
        <Row className='m-3 text-capitalize prevent-select'>
          <Col className='border mx-2 p-3'>
            <div
              style={{ cursor: 'pointer' }}
              onDoubleClick={handleDeleteDate}
              className='d-flex align-items-center gap-2'>
              <h5>Date :</h5>
              {RegisterShift.date.length > 0 ? (
                <h5>{RegisterShift.date}</h5>
              ) : (
                <AddDate id={RegisterShift._id} />
              )}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onDoubleClick={handleDeleteName}
              className='d-flex align-items-center gap-2'>
              <h5>Name :</h5>
              {RegisterShift.name.length > 0 ? (
                <h5>{RegisterShift.name}</h5>
              ) : (
                <AddName id={RegisterShift._id} />
              )}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onDoubleClick={handleDeleteAccountant}
              className='d-flex align-items-center gap-2'>
              <h5>Accountant :</h5>
              {RegisterShift.accountant.length > 0 ? (
                <h5>{RegisterShift.accountant}</h5>
              ) : (
                <AddAcountant id={RegisterShift._id} />
              )}
            </div>
            {disabled ? (
              ''
            ) : (
              <div className='d-flex align-items-center justify-content-center h-50'>
                <NextShift id={RegisterShift._id} />
              </div>
            )}
          </Col>
          <Col className='border mx-2 p-3'>
            <div
              style={{ cursor: 'pointer' }}
              onDoubleClick={handleDeleteCash}
              className='d-flex align-items-center gap-2'>
              <h5>Cash :</h5>
              {RegisterShift.cash > 0 ? (
                <h5>K{RegisterShift.cash.toLocaleString()}</h5>
              ) : (
                <AddCashModal id={RegisterShift._id} />
              )}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onDoubleClick={handleDeleteChange}
              className='d-flex align-items-center gap-2'>
              <h5>Change :</h5>
              {RegisterShift.change > 0 ? (
                <h5>K{RegisterShift.change.toLocaleString()}</h5>
              ) : (
                <AddChangeModal id={RegisterShift._id} />
              )}
            </div>
            <div className='d-flex align-items-center gap-2'>
              <h5>Total Bought :</h5>
              <h5>K{totalBought.toLocaleString()}</h5>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <h5>Expense :</h5>
              <h5>K{totalExpense.toLocaleString()}</h5>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <h5>Total :</h5>
              <h5>K{(totalBought + totalExpense).toLocaleString()}</h5>
            </div>
            <hr />
            <p
              className={
                totalBought +
                  totalExpense -
                  RegisterShift.cash +
                  RegisterShift.change <
                0
                  ? 'text-danger display-6 text-center'
                  : 'display-6 text-center'
              }>
              Result : K
              {(
                totalBought +
                totalExpense -
                RegisterShift.cash +
                RegisterShift.change
              ).toLocaleString()}
            </p>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Final;