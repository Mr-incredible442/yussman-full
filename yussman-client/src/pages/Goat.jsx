import { useEffect, useState, useContext } from 'react';
import apiCall from '../helpers/apiCall';
import { Route, Routes, Link } from 'react-router-dom';
// import _ from 'lodash';

import GoatNav from '../components/goat/GoatNav';
import Details from '../components/goat/Details';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';

import { BiEdit } from 'react-icons/bi';

import { GoatContext } from '../context/GoatContext';

import { GOAT_LOCAL_URL } from '../helpers/variables';

const Goat = () => {
  const [key, setKey] = useState('home');
  const [goats, setGoats] = useState([]);
  const [filteredGoats, setFilteredGoats] = useState([]);
  const [total, setTotal] = useState(0);

  const [suppliers] = useContext(GoatContext);

  useEffect(() => {
    document.title = 'Yussman - Goat';
  }, []);

  // give all the goats amount
  useEffect(() => {
    if (suppliers !== null) {
      setGoats(
        suppliers.map((goat) => {
          return {
            ...goat,
            amount: goat.kgs.map((kg) => (kg < 20 ? kg * 15 : kg * 25)),
          };
        }),
      );
    }
  }, [suppliers]);

  // sort the goats
  useEffect(() => {
    const flg = goats.map((goat) => {
      return {
        ...goat,
        date: (goat.date = new Date(goat.date)),
      };
    });
    // change the sort order of the date to descending
    flg.sort((a, b) => b.date - a.date);
    flg.map((goat) => {
      const d = new Date(goat.date);
      let day = d.getDate();
      let month = d.getMonth() + 1;
      const year = d.getFullYear();
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      goat.date = `${year}-${month}-${day}`;
    });
    setFilteredGoats(flg);
  }, [goats]);

  //post a new goat
  async function createNew(data) {
    apiCall.post(GOAT_LOCAL_URL, data).then(() => {});
  }

  //Delete a goat
  const handleDelete = (id) => {
    apiCall
      .delete(GOAT_LOCAL_URL + '/' + id)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
        alert('Supplier nolonger exists');
      });
  };

  //update a single goat
  const handleUpdate = (id, data) => {
    apiCall
      .patch(GOAT_LOCAL_URL + '/' + id, data)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
        alert('Supplier nolonger exists');
      });
  };

  //set the total amount
  useEffect(() => {
    let c = 0;
    goats.map((goat) => {
      if (goat.paid === false) {
        c += goat.amount.reduce((a, c) => a + c);
      }
    });
    setTotal(c);
  }, [goats]);

  if (suppliers === null) {
    return (
      <div className='text-center mt-5 pt-5'>
        <Spinner
          variant='light'
          className='text-center'
          style={{ width: '8rem', height: '8rem' }}
        />
      </div>
    );
  }

  return (
    <div>
      <Container className='py-2' fluid>
        <GoatNav createNew={createNew} total={total} />
        <Routes>
          <Route
            path='/'
            element={
              <Tabs
                id='controlled-tab-example'
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className='mb-3'>
                <Tab eventKey='home' title='Home'>
                  <Table
                    size='sm'
                    bordered
                    className='text-center text-capitalize'>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>KGs</th>
                        <th>Amount</th>
                        <th>Collection</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                      {filteredGoats.map((goat) => {
                        return (
                          goat.paid === false && (
                            <tr key={goat._id}>
                              <td>{goat.date}</td>
                              <td>{goat.name}</td>
                              <td>
                                {filteredGoats.length > 0
                                  ? goat.kgs.reduce((a, c) => a + c)
                                  : ''}
                                Kgs
                              </td>
                              <td>
                                K
                                {filteredGoats.length > 0
                                  ? goat.amount
                                      .reduce((a, c) => a + c)
                                      .toLocaleString()
                                  : ''}
                              </td>
                              <td>{goat.collectionDate}</td>
                              <td>
                                <Link to={`/goat/details/${goat._id}`}>
                                  <Button variant='outline-secondary' size='sm'>
                                    <BiEdit />
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          )
                        );
                      })}
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey='paid' title='Paid'>
                  <Table
                    size='sm'
                    bordered
                    className='text-center text-capitalize'>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>KGs</th>
                        <th>Amount</th>
                        <th>Collection</th>
                        <th>Paid By</th>
                      </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                      {filteredGoats.map((goat) => {
                        return (
                          goat.paid === true && (
                            <tr key={goat._id}>
                              <td>{goat.date}</td>
                              <td>{goat.name}</td>
                              <td>
                                {goat > 1
                                  ? ''
                                  : goat.kgs.reduce((a, c) => a + c)}
                              </td>
                              <td>
                                K
                                {goat > 1
                                  ? ''
                                  : goat.amount
                                      .reduce((a, c) => a + c)
                                      .toLocaleString()}
                              </td>
                              <td>{goat.collectionDate}</td>
                              <td>{goat.paidBy}</td>
                            </tr>
                          )
                        );
                      })}
                    </tbody>
                  </Table>
                </Tab>
              </Tabs>
            }
          />

          <Route
            path='/details/:id'
            element={
              <Details
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
};

export default Goat;
