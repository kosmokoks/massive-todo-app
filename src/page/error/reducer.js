import { SHOW_MODAL, HIDE_MODAL} from './actions';

const initialState = {
  isModalVisible: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isModalVisible: true };
    case HIDE_MODAL:
      return { ...state, isModalVisible: false };
    default:
      return state;
  }
}

export default reducer;
