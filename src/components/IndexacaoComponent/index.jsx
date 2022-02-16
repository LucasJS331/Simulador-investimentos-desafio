import styled, { css } from 'styled-components';
import { Contex } from '../../context/context';
import { handle_index } from '../../context/actions';
import { useContext, useState } from 'react';

const Container = styled.div`
    ${({ theme }) => css`
      a {
        display: inline-block;
        padding: 1.2rem;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 5px 0px 0px 5px;
        font-size: 1.5rem;
      }

      .btn-selected {
        background-color: transparent;
      }

      .btn-selected-bg {
        background-color: ${theme.colors.secondary_color};
        color: white;
      }
      .btn-selected-br10 {
        border-radius: 0px 5px 5px 0px;
      }
      .btn-selected-bg-br0 {
        background-color: ${theme.colors.secondary_color};
        color: white;
        border-radius: 0px 0px 0px 0px;
      }
      .btn-selected-br0 {
        border-radius: 0px 0px 0px 0px;
      }
      .btn-selected-bg-br10 {
        border-radius: 0px 5px 5px 0px;
        background-color: ${theme.colors.secondary_color};
        color: white;
      }

      .index-title {
        margin-bottom: 1.5rem;
      }
    `}
}
`;
export const Indexacao = () => {
  const [btnOne, setBtnOne] = useState(true);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnTree, setBtnTree] = useState('of');
  const data = useContext(Contex);
  const { dispach } = data;

  function handleBtn1() {
    if (btnOne) {
      setBtnOne(false);
    } else {
      handle_index(dispach, 'pre');
      setBtnOne(true);
      setBtnTwo(false);
      setBtnTree('of');
    }
  }

  function handleBtn2() {
    if (btnTwo) {
      setBtnTwo(false);
    } else {
      handle_index(dispach, 'pos');
      setBtnTwo(true);
      setBtnOne(false);
      setBtnTree('of');
    }
  }
  function handleBtn3() {
    if (btnTree === 'on') {
      setBtnTree('of');
    } else {
      handle_index(dispach, 'ipca');
      setBtnTree('on');
      setBtnOne(false);
      setBtnTwo(false);
    }
  }

  return (
    <Container>
      <h3 className="index-title">Tipos de Indexação</h3>
      <a
        onClick={handleBtn1}
        className={btnOne ? 'btn-selected-bg' : 'btn-selected'}
        href="#"
      >
        PRÉ
      </a>

      <a
        onClick={handleBtn2}
        className={!btnTwo ? ' btn-selected-br0 ' : 'btn-selected-bg-br0 '}
      >
        PÓS
      </a>
      <a
        onClick={handleBtn3}
        className={
          btnTree === 'on' ? 'btn-selected-bg-br10' : 'btn-selected-br10'
        }
      >
        FIXADO
      </a>
    </Container>
  );
};
