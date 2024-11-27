import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { GoatContextProvider } from './context/GoatContext';
import { StoreContextProvider } from './context/StoreContext.jsx';
import { RegisterContextProvider } from './context/RegisterContext.jsx';
import { RestaurantContextProvider } from './context/RestaurantContext.jsx';
import { EmployeeContextProvider } from './context/EmployeeContext.jsx';
import { ShopA1ContextProvider } from './context/ShopA1Context.jsx';
import { ShopA2ContextProvider } from './context/ShopA2Context.jsx';
import { ShopBContextProvider } from './context/ShopBContext.jsx';
import { ShopCContextProvider } from './context/ShopCContext.jsx';
import { ShopWContextProvider } from './context/ShopWContext.jsx';
import { CreditContextProvider } from './context/CreditContext.jsx';

import { ChinsaliRestaurantContextProvider } from './context/ChinsaliRestaurantContext.jsx';
import { ChinsaliStoreContextProvider } from './context/ChinsaliStoreContext.jsx';
import { ChinsaliRegisterContextProvider } from './context/ChinsaliRegisterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StoreContextProvider>
        <RegisterContextProvider>
          <ShopA1ContextProvider>
            <ShopA2ContextProvider>
              <ShopBContextProvider>
                <ShopCContextProvider>
                  <ShopWContextProvider>
                    <RestaurantContextProvider>
                      <GoatContextProvider>
                        <EmployeeContextProvider>
                          <CreditContextProvider>
                            <ChinsaliRestaurantContextProvider>
                              <ChinsaliStoreContextProvider>
                                <ChinsaliRegisterContextProvider>
                                  <BrowserRouter>
                                    <App />
                                  </BrowserRouter>
                                </ChinsaliRegisterContextProvider>
                              </ChinsaliStoreContextProvider>
                            </ChinsaliRestaurantContextProvider>
                          </CreditContextProvider>
                        </EmployeeContextProvider>
                      </GoatContextProvider>
                    </RestaurantContextProvider>
                  </ShopWContextProvider>
                </ShopCContextProvider>
              </ShopBContextProvider>
            </ShopA2ContextProvider>
          </ShopA1ContextProvider>
        </RegisterContextProvider>
      </StoreContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
