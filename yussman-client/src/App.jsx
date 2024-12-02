import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import NavBar from './components/NavBar';
import Dasboard from './pages/Dasboard';
import Goat from './pages/Goat';
import Restaurant from './pages/Restaurant';
import Login from './pages/Login';
import UserManager from './pages/UserManager';
import Details from './components/restaurant/RestaurantDetails';
import Store from './pages/Store';
import Register from './pages/Register';
import Employees from './pages/Employees';
import ShopA1 from './pages/ShopA1';
import ShopA2 from './pages/ShopA2';
import ShopB from './pages/ShopB';
import ShopC from './pages/ShopC';
import ShopW from './pages/ShopW';
import EmployeeDetails from './components/employees/EmployeeDetails';
import ShiftDetails from './components/store/ShiftDetails';
import RegisterDetails from './components/register/RegisterDetails';
import ShopA1Details from './components/shopA1/ShopA1Details';
import ShopA2Details from './components/shopA2/ShopA2Details';
import ShopBDetails from './components/shopB/ShopBDetails';
import ShopCDetails from './components/shopC/ShopCDetails';
import ShopWDetails from './components/shopW/ShopWDetails';
import Credit from './pages/Credit';
import CreditDetails from './components/credit/CreditDetails';

//Chinsali
import ChinsaliRestaurant from './pages/ChinsaliRestaurant';
import ChinsaliStore from './pages/ChinsaliStore';
import ChinsaliRegister from './pages/ChinsaliRegister';
import ChinsaliRegisterDetails from './components/chinsaliRegister/ChinsaliRegisterDetails';
import ChinsaliStoreShiftDetails from './components/chinsaliStore/ShiftDetails';
import ChinsaliRestaurantDetails from './components/chinsali restaurant/ChinsaliRestaurantDetails';

//Chansa
import ChansaRestaurant from './pages/ChansaRestaurant';
import ChansaStore from './pages/ChansaStore';
import ChansaRegister from './pages/ChansaRegister';
import ChansaRegisterDetails from './components/chansaRegister/ChansaRegisterDetails';
import ChansaStoreShiftDetails from './components/chansaStore/ShiftDetails';
import ChansaRestaurantDetails from './components/chansaRestaurant/ChansaRestaurantDetails';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={user ? <Dasboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/goat/*'
          element={user ? <Goat /> : <Navigate to='/login' />}
        />
        <Route
          path='/restaurant'
          element={user ? <Restaurant /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsalirestaurant'
          element={user ? <ChinsaliRestaurant /> : <Navigate to='/login' />}
        />
        <Route
          path='/chansarestaurant'
          element={user ? <ChansaRestaurant /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopa1'
          element={user ? <ShopA1 /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopa2'
          element={user ? <ShopA2 /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopb'
          element={user ? <ShopB /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopc'
          element={user ? <ShopC /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopw'
          element={user ? <ShopW /> : <Navigate to='/login' />}
        />
        <Route
          path='/store'
          element={user ? <Store /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsalistore'
          element={user ? <ChinsaliStore /> : <Navigate to='/login' />}
        />
        <Route
          path='/chansastore'
          element={user ? <ChansaStore /> : <Navigate to='/login' />}
        />
        <Route
          path='/register'
          element={user ? <Register /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsaliregister'
          element={user ? <ChinsaliRegister /> : <Navigate to='/login' />}
        />
        <Route
          path='/chansaregister'
          element={user ? <ChansaRegister /> : <Navigate to='/login' />}
        />
        <Route
          path='/employees'
          element={user ? <Employees /> : <Navigate to='/login' />}
        />
        <Route
          path='/credit'
          element={user ? <Credit /> : <Navigate to='/login' />}
        />
        <Route
          path='/users'
          element={
            user && user.role === 'admin' ? (
              <UserManager />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/restaurant/:id'
          element={user ? <Details /> : <Navigate to='/login' />}
        />

        <Route
          path='/shopa1/:id'
          element={user ? <ShopA1Details /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopa2/:id'
          element={user ? <ShopA2Details /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopb/:id'
          element={user ? <ShopBDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopc/:id'
          element={user ? <ShopCDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/shopw/:id'
          element={user ? <ShopWDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/employees/:id'
          element={user ? <EmployeeDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/store/:id'
          element={user ? <ShiftDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsalistore/:id'
          element={
            user ? <ChinsaliStoreShiftDetails /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/chansastore/:id'
          element={
            user ? <ChansaStoreShiftDetails /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/register/:id'
          element={user ? <RegisterDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsaliregister/:id'
          element={
            user ? <ChinsaliRegisterDetails /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/chansaregister/:id'
          element={user ? <ChansaRegisterDetails /> : <Navigate to='/login' />}
        />
        <Route
          path='/chinsalirestaurant/:id'
          element={
            user ? <ChinsaliRestaurantDetails /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/chansarestaurant/:id'
          element={
            user ? <ChansaRestaurantDetails /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/credit/:id'
          element={user ? <CreditDetails /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
