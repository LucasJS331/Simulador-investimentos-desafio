import { load_index, handle_rendimento, form_push, form_clear } from './types';

export const handle_index = async (dispach, index) => {
  dispach({ type: load_index, payload: index });
  return;
};

export const handleRendimento = async (dispach, rendimento) => {
  dispach({ type: handle_rendimento, payload: rendimento });
  return;
};

export const formPush = async (dispach, value) => {
  dispach({ type: form_push, payload: value });
  return;
};

export const formClear = async (dispach) => {
  dispach({ type: form_clear });
  return;
};
