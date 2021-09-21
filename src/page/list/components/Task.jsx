import React, {useState} from 'react';
import TooltipButton from "../../shared/TooltipButton";
import {markAsDoneTask, removeTask, setNewTaskName, updateTaskName} from "../actions";

const Task = ({item, dispatch}) => {

    const [isEditedId, setIsEditedId] = useState(null)

    const isEditedMode = (id) => isEditedId === id;

    const editTaskName = (task) => dispatch(setNewTaskName(task))
    const markAsDone = (task) => dispatch(markAsDoneTask(task));
    const removeExistTask = (task) => dispatch(removeTask(task));

    const getTaskClasses = (task) => {
        const isCompleted = task.is_completed ? 'done' : '';
        const isEdited = isEditedMode(task.id) ? 'edited' : '';

        return `task ${isCompleted} ${isEdited}`;
    };

    const updateNameOnServer = (task) => {
        dispatch(updateTaskName(task));
        setIsEditedId(null);
    }

    const updateTaskNameOnServerByKeyPress = (e, task) => {
        if (e.key === 'Enter') {
            updateNameOnServer(task);
        }
    }

    return (
        <li
            className={getTaskClasses(item)}
            key={item.id}
        >
            <label className="checkbox-container">
                <input
                    checked={item.is_completed}
                    onChange={() => markAsDone({
                        id: item.id,
                        task: item.task,
                        is_completed: item.is_completed ? 0 : 1,
                    })}
                    type="checkbox"
                    className="hidden-input"
                />
                <div className="checkmark"/>
                {isEditedMode(item.id) ?
                    <input
                        id={item.id}
                        className="task-name-input"
                        value={item.task}
                        onChange={(e) => editTaskName({
                            id: item.id,
                            task: e.target.value,
                            is_completed: item.is_completed,
                        })}
                        onKeyPress={(e) => updateTaskNameOnServerByKeyPress(e, item)}
                        onBlur={() => updateNameOnServer(item)}
                        type="text"
                    /> :
                    <div className="task-name">{item.task}</div>
                }

            </label>
            {!isEditedMode(item.id) &&
            <div className="edit-btn">
                <TooltipButton
                    handleClick={() => setIsEditedId(item.id)}
                    className="icon-btn brown-bg"
                    iconClass="icon-pencil"
                    tooltipText="Edit task"
                />
            </div>
            }
            <div className="remove-btn">
                <TooltipButton
                    handleClick={() => removeExistTask(item)}
                    className="icon-btn brown-bg"
                    iconClass="icon-bin"
                    tooltipText="Remove task"
                />
            </div>
        </li>
    );
};

export default Task;
