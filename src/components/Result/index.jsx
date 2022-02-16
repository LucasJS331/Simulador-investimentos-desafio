import styled, { css } from 'styled-components';
import P from 'prop-types';
import { FinantialCard } from '../FinantialCard';
import img from './assets/loading.gif';

export const Container = styled.div`
  .loading-result {
    display: block;
    margin: 0;
    width: 78%;
    height: 340px;
  }

  .title-result {
    margin-bottom: 2rem;
  }
`;
export const ContainerGrid = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
    gap: 30px 45px;
    animation: fade 0.4s ease-in;

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

    @media ${theme.media.default} {
      display: block;
    }
  `}
`;

export const Result = ({ finantial_data, isLoading }) => {
  if (isLoading) {
    return (
      <Container>
        <img src={img} alt="loading the result" className="loading-result" />
      </Container>
    );
  }
  return (
    <>
      <Container>
        <h3 className="title-result">Simulação</h3>
      </Container>
      <ContainerGrid id="form-result">
        <FinantialCard
          value={finantial_data.valorFinalBruto}
          name={'Valor final Bruto'}
        />
        <FinantialCard
          value={finantial_data.aliquotaIR}
          name={'Aliquota do IR'}
        />
        <FinantialCard
          value={finantial_data.valorPagoIR}
          name={'Valor pago do IR'}
        />

        <FinantialCard
          value={finantial_data.valorFinalLiquido}
          name={'Valor final Liquido'}
          greenValue={true}
        />
        <FinantialCard
          value={finantial_data.valorTotalInvestido}
          name={'Valor total Investido'}
        />
        <FinantialCard
          value={finantial_data.ganhoLiquido}
          name={'Ganho liquido'}
          greenValue={true}
        />
      </ContainerGrid>
    </>
  );
};

Result.propTypes = {
  finantial_data: P.object,
  isLoading: P.bool,
};
