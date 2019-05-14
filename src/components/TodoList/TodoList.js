import React from "react";
import style from "./TodoList.module.css";
import {TasksListContainer} from "../../Redux/TasksList/TasksListContainer";
import CreateFormContainer from "../../Redux/CreateForm/CreateFormContainer";


let TodoList = (props) => {

    let submit =(values) => {
        let name = values.name;
        let author = values.author;
        let description = values.description;
        let day = values.date;
        props.addTask(name, author, description, day);
        values.name = "";
        values.author = "";
        values.date = "";
        values.description = "";
    };

    return (
        <div className={style.todoBlock}>
            <h1 className={style.title}>ToDo List</h1>
            <div className={style.createBlock}>

                <CreateFormContainer onSubmit = {submit}/>

            </div>

            <TasksListContainer />

        </div>
    )
};

export default TodoList;