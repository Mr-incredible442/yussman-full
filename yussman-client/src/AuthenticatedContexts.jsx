// AuthenticatedContexts.jsx
import { StoreContextProvider } from './context/StoreContext.jsx';
import { RegisterContextProvider } from './context/RegisterContext.jsx';
import { ShopA1ContextProvider } from './context/ShopA1Context.jsx';
import { ShopA2ContextProvider } from './context/ShopA2Context.jsx';
import { ShopBContextProvider } from './context/ShopBContext.jsx';
import { ShopCContextProvider } from './context/ShopCContext.jsx';
import { ShopWContextProvider } from './context/ShopWContext.jsx';
import { RestaurantContextProvider } from './context/RestaurantContext.jsx';
import { GoatContextProvider } from './context/GoatContext';
import { EmployeeContextProvider } from './context/EmployeeContext.jsx';
import { CreditContextProvider } from './context/CreditContext.jsx';
import { ChinsaliRestaurantContextProvider } from './context/ChinsaliRestaurantContext.jsx';
import { ChinsaliStoreContextProvider } from './context/ChinsaliStoreContext.jsx';
import { ChinsaliRegisterContextProvider } from './context/ChinsaliRegisterContext.jsx';
import { ChansaRestaurantContextProvider } from './context/ChansaRestaurantContext.jsx';
import { ChansaStoreContextProvider } from './context/ChansaStoreContext.jsx';
import { ChansaRegisterContextProvider } from './context/ChansaRegisterContext.jsx';

// eslint-disable-next-line react/prop-types
const AuthenticatedContexts = ({ children }) => {
  return (
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
                                <ChansaRestaurantContextProvider>
                                  <ChansaStoreContextProvider>
                                    <ChansaRegisterContextProvider>
                                      {children}
                                    </ChansaRegisterContextProvider>
                                  </ChansaStoreContextProvider>
                                </ChansaRestaurantContextProvider>
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
  );
};

export default AuthenticatedContexts;
