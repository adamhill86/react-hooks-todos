import { State, Action, Type } from './todos';

export const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Type.Add:
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          completed: false,
        },
      ];
    case Type.Delete:
      return state.filter(item => item.id !== action.payload);
    case Type.Complete:
      return state.map(item =>
        item.id === action.payload
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      );
    case Type.Reset:
      return action.payload as State;
    case Type.UpdateText:
      return state.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.text,
            }
          : item
      );
    default:
      return state;
  }
};
