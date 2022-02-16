import styled, { css } from 'styled-components';
import P from 'prop-types';
import { Input } from '../Input';
import { Button } from '../DefaultButton';
import { Rendimento } from '../RendimentoComponent';
import { Indexacao } from '../IndexacaoComponent';
import { Contex } from '../../context/context';
import { useContext, useState } from 'react';
import { Result } from '../Result';
import { SimuladorBtn } from '../SimuladorBtn';
import { form_validation, get_data } from './utils';
import { FormLabel } from '../FormLabel';
import { formClear } from '../../context/actions';
export const FormContainer = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 200px 200px 1fr;

    gap: 0px 55px;
    grid-template-areas: '. .';

    fieldset {
      border: none;
    }

    @media ${theme.media.default} {
      display: block;
    }
  `}
`;

export const Form = ({ indicadores }) => {
  const data = useContext(Contex);
  const { state, dispach } = data;
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState();
  const [errorMsg, setErrorMsg] = useState(false);

  async function handle_result() {
    let validation = form_validation(state);
    console.log(validation);
    if (!validation) {
      setErrorMsg(true);
      return;
    }
    setErrorMsg(false);
    setIsLoading(true);
    let result = await get_data(state);
    if (result.length > 0) {
      setShowResult(true);
      setResultData(result['0']);
    }
    setIsLoading(false);
  }

  return (
    <>
      <FormContainer action="#">
        <fieldset>
          <Rendimento />
          <FormLabel text="Aporte inicial" />
          <Input errorMsg="Aporte deve ser um numero" name="aporte" />

          <FormLabel text="Prazo (em meses)" />
          <Input errorMsg="Prazo deve ser um numero" name="prazo" />

          <FormLabel text="IPCA(ao ano)" />
          <Input
            defaultValue={indicadores[1].valor}
            errorMsg="IPCA deve ser um numero"
            name="ipca"
          />
        </fieldset>

        <fieldset>
          <Indexacao />
          <FormLabel text="Aporte mensal" />
          <Input errorMsg="Aporte deve ser um numero" name="aporte_mensal" />

          <FormLabel text="Rentabilidade" />
          <Input
            errorMsg="Rentabilidade deve ser um numero"
            name="rentabilidade"
          />

          <FormLabel text="CDI(ao ano)" />
          <Input
            defaultValue={indicadores[0].valor}
            errorMsg="CDI deve ser um numero"
            name="cdi"
          />
        </fieldset>
        <fieldset>
          {showResult && (
            <Result isLoading={isLoading} finantial_data={resultData} />
          )}
        </fieldset>
        <Button
          text="Limpar Campos"
          type="reset"
          fn={() => formClear(dispach)}
        ></Button>

        <SimuladorBtn text={'Simular'} fn={handle_result}></SimuladorBtn>
      </FormContainer>
      {errorMsg && <h5>Por favor, verifique todos os campos.</h5>}
    </>
  );
};

Form.propTypes = {
  indicadores: P.array,
};
