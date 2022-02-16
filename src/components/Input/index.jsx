import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import P from 'prop-types';
import { formPush } from '../../context/actions';
import { Contex } from '../../context/context';
import { number_validation } from '../Form/utils';

export const Container = styled.div`
  ${() => css`
    label {
      margin-top: 0.8rem !important;
      font-size: 1.4rem;
      display: block;
    }
    .on {
      display: block;
      color: red;
      margin-top: 0.8rem;
      font-size: 1.4rem;
    }

    .errorInput {
      border-color: red;
    }
  `}
`;

export const Input = ({ errorMsg, defaultValue, name }) => {
  const [show, setShow] = useState(false);
  const data = useContext(Contex);
  const { state, dispach } = data;

  function validate(e) {
    let value = e.target.value;
    let result = number_validation(value);

    if (!result) {
      setShow(true);
    } else {
      setShow(false);
    }
    let form = state.form;

    form[name] = e.target.value;
    formPush(dispach, form);
  }

  return (
    <Container>
      <input
        onChange={(e) => validate(e)}
        className={show ? 'errorInput' : ''}
        defaultValue={defaultValue ? defaultValue : ''}
        name={name}
      />
      <label className={show ? 'on' : 'of'}>{show ? errorMsg : ''} </label>
    </Container>
  );
};

Input.propTypes = {
  errorMsg: P.string.isRequired,
  defaultValue: P.number,
  name: P.string.isRequired,
};
