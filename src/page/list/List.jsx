import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems} from "./actions";
import TodoHeader from "./components/TodoHeader";
import Loader from "../shared/Loader";
import EmptyList from "../shared/EmptyList";
import Task from "./components/Task";
import AddNewInput from "./components/AddNewInput";

const TodoList = () => {

    const dispatch = useDispatch();

    const [showAddNewTaskInput, setShowAddNewTaskInput] = useState(false);
    const [isToDoListViewType, setIsToDoListViewType] = useState(true)

    const {items, isWaiting} = useSelector(state => state.list)
    const completedItems = items?.filter((item) => item.is_completed);

    const preparedItems = isToDoListViewType ? items : completedItems;

    useEffect(() => {
        dispatch(fetchListItems())
    }, [])

    return (
        <div className="todo-list-wrapper">
            <TodoHeader
                setShowAddNewTaskInput={setShowAddNewTaskInput}
                showAddNewTaskInput={showAddNewTaskInput}
                setIsToDoListViewType={setIsToDoListViewType}
                isToDoListViewType={isToDoListViewType}
            />
            <div className="loader-parent">
                <Loader hidden={!isWaiting}/>
                <ul className="todo-list">
                    <AddNewInput
                        dispatch={dispatch}
                        showAddNewTaskInput={showAddNewTaskInput}
                    />
                    <EmptyList items={preparedItems}>
                        {preparedItems?.map((item) => (
                            <Task
                                key={item.id}
                                dispatch={dispatch}
                                item={item}
                            />
                        ))}
                    </EmptyList>
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
