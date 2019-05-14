import {connect} from "react-redux";
import TasksList from "../../components/TasksList/TasksList";
import {tasksListSelector} from "../TodoListReducer";

let mapStateToProps = (state) => {
    return {
        todoList: tasksListSelector(state)
    }
};



export let TasksListContainer = connect (mapStateToProps, null)(TasksList);