import { Contex } from './context';
import { useReducer } from 'react';
import { actionHandler } from './reducer';
import { data } from './data';
import P from 'prop-types';
export const FinantialContext = ({ children }) => {
  const [finantial, dispach] = useReducer(actionHandler, data);

  return (
    <Contex.Provider value={{ state: finantial, dispach }}>
      {children}
    </Contex.Provider>
  );
};
FinantialContext.propTypes = {
  children: P.node,
};
