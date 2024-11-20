import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

import { useContext, useEffect, useState } from 'react';
import { ShopCContext } from '../../context/ShopCContext';
import Delete from './modals/Delete';

import CreditModal from './modals/CreditModal';

const endpoint = `deletecredit`;

function Credit() {
  const [credit, setCredit] = useState([]);
  const { shopCShift } = useContext(ShopCContext);

  useEffect(() => {
    if (Object.keys(shopCShift).length !== 0) {
      setCredit(shopCShift.credit);
    }
  }, [shopCShift]);

  return (
    <Container>
      <div className='d-flex justify-content-between py-2'>
        <h6>Credit</h6>
        <CreditModal shift={shopCShift} />
      </div>
      <Table className='text-center' size='sm'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>A</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {credit.map((credit) => (
            <tr
              key={Math.floor(Math.random() * 100_000)}
              id={Math.floor(Math.random() * 100_000)}>
              <td className='text-capitalize'>{credit.description}</td>
              <td>K{credit.amount.toLocaleString()}</td>
              <td className='d-flex justify-content-center align-items-center '>
                <Delete
                  endpoint={endpoint}
                  id={credit._id}
                  shiftId={shopCShift._id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Credit;
