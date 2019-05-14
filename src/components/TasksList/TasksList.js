import React from "react";
import style from "./TasksList.module.css";
import {TaskContainer} from "../../Redux/TasksList/Task/TaskContainer";

let TasksList =(props) => {
    return (
    <div className={style.list}>
        {
            props.todoList.map(t => {
                return  (
                    <TaskContainer key={t.id} {...t} />
                )
            })
        }
    </div>
    )
};

export default TasksList;

