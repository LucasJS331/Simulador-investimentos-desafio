import { form_clear, form_push, handle_rendimento, load_index } from './types';

export const actionHandler = (state, action) => {
  if (action.type === load_index) {
    return {
      ...state,
      index: action.payload,
    };
  }

  if (action.type === handle_rendimento) {
    return {
      ...state,
      rendimento: action.payload,
    };
  }

  if (action.type === form_push) {
    return {
      ...state,
      form: action.payload,
    };
  }

  if (action.type === form_clear) {
    return {
      ...state,
      form: {
        aporte: '',
        prazo: '',
        ipca: '10.06',
        aporte_mensal: '',
        rentabilidade: '',
        cdi: '9.15',
      },
    };
  }
  return state;
};
