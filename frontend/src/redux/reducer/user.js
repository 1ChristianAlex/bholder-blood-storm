const INITIAL_STATE = {
  user: {
    createdAt: '',
    description: '',
    elo: '',
    email: '',
    enable: '',
    guild: '',
    id: '',
    itemId: '',
    mapRpgId: '',
    masterId: '',
    name: '',
    password: '',
    playerId: '',
    updatedAt: '',
    userName: ''
  },
  token: ''
};
export function User_Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...INITIAL_STATE
      };
    case 'SET_USER':
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
