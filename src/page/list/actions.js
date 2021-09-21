import {fetchUrl, toggleTodoTask, updateTodoTask} from "../../utils/helpers";
import {showModal} from "../error/actions";

export const START_WAITING = 'LIST_START_WAITING';
export const STOP_WAITING = 'LIST_STOP_WAITING';
export const UPDATE_RESULTS = 'LIST_UPDATE_RESULTS';
export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const MARK_AS_DONE = 'MARK_AS_DONE';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK_NAME = 'EDIT_TASK_NAME';

export const startWaiting = () => ({
    type: START_WAITING,
});

export const stopWaiting = () => ({
    type: STOP_WAITING,
});


export const updateResults = (results) => ({
    type: UPDATE_RESULTS,
    results,
});

export const addTodoTask = (task) => ({
    type: ADD_TODO_TASK,
    task,
});

export const markAsDone = (task) => ({
    type: MARK_AS_DONE,
    task,
});

export const setRemoveTask = (task) => ({
    type: REMOVE_TASK,
    task,
});

export const setNewTaskName = (task) => ({
    type: EDIT_TASK_NAME,
    task,
});

export const fetchListItems = () => {
    return async (dispatch) => {
        dispatch(startWaiting());
        try {
            const response = await fetch(fetchUrl);
            const {data} = await response.json();
            dispatch(updateResults(data))
        } catch (err) {
            console.error(err);
            dispatch(showModal());
        } finally {
            dispatch(stopWaiting());
        }
    }
}

export const addTask = (task) => {
    return async (dispatch) => {
        try {
            const response = await updateTodoTask(task)
            const {data} = await response.json();
            dispatch(addTodoTask(data[0]))
        } catch (err) {
            console.error(err);
        }
    }
}

export const markAsDoneTask = (task) => {
    return async (dispatch) => {
        try {
            const response = await toggleTodoTask(task)
            const {data} = await response.json();
            dispatch(markAsDone(data[0]))
        } catch (err) {
            console.error(err);
        }
    }
}

export const updateTaskName = (task) => {
    return async () => {
        try {
            await toggleTodoTask(task)
        } catch (err) {
            console.error(err);
        }
    }
}

export const removeTask = (task) => {
    return async (dispatch) => {
        try {
            await fetch(`${fetchUrl}/${task.id}`, {
                method: 'delete'
            })
            dispatch(setRemoveTask(task))
        } catch (err) {
            console.error(err);
        }
    }
}
