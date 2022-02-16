import axios from 'axios';
export function form_validation(state) {
  let { aporte, ipca, prazo, aporte_mensal, rentabilidade, cdi } = state.form;
  let result = number_validation(
    aporte,
    ipca,
    prazo,
    aporte_mensal,
    rentabilidade,
    cdi,
  );

  if (!result) {
    return false;
  }
  if (aporte.trim() == '' || ipca.trim() == '') {
    return false;
  }

  if (prazo.trim() === '' || aporte_mensal.trim() == '') {
    return false;
  }
  if (rentabilidade.trim() == '' || cdi.trim() == '') {
    return false;
  }

  return true;
}

export function number_validation(...args) {
  let arr = [];
  args.filter((value) => {
    let filtered_value = value.replace(/[^a-z0-9]/gi, '');

    if (isNaN(filtered_value)) {
      return arr.push(value);
    }
  });

  if (arr.length > 0) {
    return false;
  }
  return true;
}

export async function get_data(state) {
  let result = (
    await axios.get(
      `http://localhost:3000/simulacoes?tipoIndexacao=${state.index}&tipoRendimento=${state.rendimento}`,
    )
  ).data;

  return result;
}
