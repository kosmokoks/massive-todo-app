import React, {useState} from 'react';
import {addTask} from "../actions";

const AddNewInput = ({showAddNewTaskInput, dispatch}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const addNewTask = (task) => {
        if (!task.task) {
            return;
        }
        dispatch(addTask(task))
        setInputValue('')
    };

    const handleKeypress = (e, task) => {
        if (!task.task) {
            return;
        }
        if (e.key === 'Enter') {
            addNewTask(task);
        }
    };

    return (
        showAddNewTaskInput &&
        (
            <li className="add-new">
                <div className="form-group">
                    <input
                        value={inputValue}
                        type="text"
                        onChange={handleInputValue}
                        onKeyPress={(e) =>
                            handleKeypress(
                                e,
                                {
                                    task: inputValue,
                                    is_completed: 0,
                                }
                            )}
                    />
                    <button
                        className="add-new-button"
                        onClick={() => addNewTask(
                            {
                                task: inputValue,
                                is_completed: 0,
                            }
                        )}
                        disabled={!inputValue}
                    >
                        Add
                        <i className="icon-plus"/>
                    </button>
                </div>
            </li>
        )
    );
};

export default AddNewInput;
