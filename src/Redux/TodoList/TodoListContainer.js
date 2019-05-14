import {connect} from "react-redux";
import TodoList from "../../components/TodoList/TodoList";
import {

    addTaskAC, editModeSelector, statusSelector
} from "../TodoListReducer";

let mapStateToProps =(state) => {
    return {
        status: statusSelector(state),
        editMode: editModeSelector(state)
    }
};


export let TodoListContainer = connect (mapStateToProps, {
        addTask:addTaskAC
    }
)(TodoList);
