import React from 'react';
import TooltipButton from "../../shared/TooltipButton";

const TodoHeader = ({showAddNewTaskInput, setShowAddNewTaskInput, setIsToDoListViewType, isToDoListViewType}) => (
    <div className="todo-list-header">
        <div>
            <TooltipButton
                handleClick={() => setShowAddNewTaskInput(!showAddNewTaskInput)}
                className="icon-btn"
                iconClass="icon-plus"
                tooltipText="Add new task"
            />
        </div>
        <h1>{isToDoListViewType ? 'To-Do List' : 'Completed task'}</h1>
        <div>
            <TooltipButton
                handleClick={() => setIsToDoListViewType(!isToDoListViewType)}
                className="icon-btn"
                iconClass="icon-cog"
                tooltipText="Show completed task"
                toggleTooltipText="Show full list"
                toggleTextHook={isToDoListViewType}
            />
        </div>

    </div>
);

export default TodoHeader;
