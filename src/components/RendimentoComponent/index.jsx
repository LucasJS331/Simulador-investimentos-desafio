import styled, { css } from 'styled-components';
import { Contex } from '../../context/context';
import { handleRendimento } from '../../context/actions';

import { useContext, useState } from 'react';
const Div = styled.div`
    ${({ theme }) => css`
      a {
        display: inline-block;
        padding: 1.2rem 2rem;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 5px 0px 0px 5px;
      }

      .rendimento {
        background-color: transparent;
      }

      .rendimento-bg {
        background-color: ${theme.colors.secondary_color};
        color: white;
      }
      .rendimento-br-10 {
        border-radius: 0px 5px 5px 0px;
      }
      .rendimento-bg-br-10 {
        background-color: ${theme.colors.secondary_color};
        color: white;
        border-radius: 0px 5px 5px 0px;
      }

      #rendimento-title {
        margin-bottom: 1.4rem;
      }
    `}
}
`;
export const Rendimento = () => {
  const [btnOne, setBtnOne] = useState(true);
  const [btnTwo, setBtnTwo] = useState(false);
  const data = useContext(Contex);
  const { dispach } = data;

  function handleBtn1() {
    btnOne
      ? handleRendimento(dispach, 'bruto')
      : handleRendimento(dispach, 'liquido');
    setBtnOne((s) => !s);
    setBtnTwo((t) => !t);
  }

  return (
    <Div>
      <h3 id="rendimento-title">Rendimento</h3>
      <a
        onClick={handleBtn1}
        className={btnOne ? 'rendimento' : 'rendimento-bg'}
        href="#"
      >
        Bruto
      </a>

      <a
        onClick={handleBtn1}
        className={btnTwo ? 'rendimento-br-10' : 'rendimento-bg-br-10'}
      >
        Liquido
      </a>
    </Div>
  );
};
