import { useCallback, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

import { LOCAL_URL } from '../helpers/variables';
import NewUserModal from '../components/users/modals/NewUserModal';
import DeleteUser from '../components/users/modals/DeleteUser';
import apiCall from '../helpers/apiCall';

function UserManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = 'Yussman - Users';
  }, []);

  const getUsers = useCallback(() => {
    apiCall
      .get(`${LOCAL_URL}/users`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      <h2 className='text-center my-2 '>Users Manager</h2>
      <div className='d-flex justify-content-end align-items-center my-2'>
        <NewUserModal setUsers={setUsers} />
      </div>
      <Table bordered size='sm' className='text-center'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
            <th>Role</th>
            <th>Actons</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user._id}>
                <td className='text-capitalize'>{user.firstName}</td>
                <td className='text-capitalize'>{user.lastName}</td>
                <td>{user.number}</td>
                <td className='text-capitalize'>{user.role}</td>
                <td className='d-flex justify-content-center'>
                  {user.number !== '0972278488' &&
                    user.number !== '0967162444' && (
                      <DeleteUser id={user._id} getUsers={getUsers} />
                    )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserManager;
