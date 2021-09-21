import {
    UPDATE_RESULTS,
    ADD_TODO_TASK,
    MARK_AS_DONE,
    REMOVE_TASK,
    START_WAITING,
    STOP_WAITING,
    EDIT_TASK_NAME
} from './actions';

export const getStateRoot = (state) => state.list;

const initialState = {
    items: [],
    isWaiting: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_WAITING:
            return {...state, isWaiting: true};
        case UPDATE_RESULTS:
            return {...state, items: action.results};
        case STOP_WAITING:
            return {...state, isWaiting: false};
        case ADD_TODO_TASK:
            return {...state, items: [action.task, ...state.items]};
        case MARK_AS_DONE:
            return {
                ...state,
                items: state.items.map(task =>
                    task.id === action.task.id ? {...task, is_completed: !task.is_completed} : task,
                ),
            }
        case REMOVE_TASK:
            return {
                ...state,
                items: state.items.filter(task => task.id !== action.task.id)
            }

        case EDIT_TASK_NAME:
            return {
                ...state,
                items: state.items.map(task =>
                    task.id === action.task.id ? {...task, task: action.task.task} : task,
                ),
            }

        default:
            return state;
    }
}

export default reducer;
