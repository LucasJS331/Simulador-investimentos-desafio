import styled, { css } from 'styled-components';
import { Form } from '../../components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../components/Loading';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary_color};
    width: 96%;
    margin: 3rem auto 0 auto;
    padding: 2.2rem;
    animation: fade 0.5s ease-in;

    .main-title {
      margin-bottom: 2.7rem;
      text-align: center;
    }
    .sub-title {
      margin-bottom: 2.7rem;
    }
    @keyframes fade {
      0% {
        transform: translateX(-30px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media screen and (max-width: 830px) {
      width: 100%;
      padding: 2.5rem;
      margin: 0;
    }
  `}
`;

function App() {
  const [indicadores, setIncadores] = useState([]);
  useEffect(() => {
    async function loadIndicadores() {
      const data = (await axios.get('http://localhost:3000/indicadores')).data;

      setIncadores(data);
    }
    loadIndicadores();
  }, []);

  if (indicadores.length === 0) {
    return <Loading />;
  }
  return (
    <Container>
      <section id="heading-section">
        <h1 className="main-title">Simulador de investimentos</h1>
        <h2 className="sub-title">Simulador</h2>
      </section>
      <Form indicadores={indicadores} />
    </Container>
  );
}

export default App;
