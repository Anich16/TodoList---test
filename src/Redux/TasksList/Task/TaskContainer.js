import {connect} from "react-redux";
import Task from "../../../components/TasksList/Task/Task";
import {
    changeEditModeAC, changeStatusAC, deleteTaskAC, setAuthorAC, setDescriptionAC,
    setNameAC
} from "../../TodoListReducer";

let mapDispatchToProps =(dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAC(id))
        },
        changeStatus: (status, id) => {
            dispatch(changeStatusAC(status, id))
        },
        changeEditMode: (status, id) => {
            dispatch(changeEditModeAC(status, id))
        },
        setAuthor: (author, id) => {
            dispatch(setAuthorAC(author, id))
        },
        setName: (name, id) => {
            dispatch(setNameAC(name, id))
        },
        setDescription: (text, id) => {
            dispatch(setDescriptionAC(text, id))
        }
    }
};

export let TaskContainer = connect (null, mapDispatchToProps)(Task);
