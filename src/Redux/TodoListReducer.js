const ADD_TASK = "TODOLIST/ADD_TASK";
const DELETE_TASK = "TODOLIST/DELETE_TASK";
const CHANGE_STATUS = "TODOLIST/CHANGE_STATUS";
const CHANGE_EDIT_MODE = "TODOLIST/CHANGE_EDIT_MODE";
const SET_AUTHOR = "TODOLIST/SET_AUTHOR";
const SET_NAME = "TODOLIST/SET_NAME";
const SET_DESCRIPTION ="TODOLIST/SET_DESCRIPTION";

let initialState = {
    tasksList: [
        {
            id: 1,
            name: "JS",
            author: "Ivan",
            date: "01/06/2019",
            description: "What need to be done",
            status: false,
            editMode: false
        },
        {
            id: 2,
            name: "Css",
            author: "Olga",
            date: "08/05/2019",
            description: "What need to be done",
            status: false,
            editMode: false
        },
        {
            id: 3,
            name: "Html",
            author: "Gena",
            date: "14/05/2019",
            description: "What need to be done",
            status: false,
            editMode: false
        }
    ],
    newName: "",
    newAuthor: "",
    newDescription: "",
    count: 3,
    countDays: "",
};

let getFutureDate =(day)=> {
    let targetDay = new Date();
    targetDay.setDate(targetDay.getDate() + day);

    let dd = targetDay.getDate();
    if (dd < 10) dd = ('0' + dd);

    let mm = targetDay.getMonth() + 1;
    if (mm < 10) mm = ('0' + mm );

    let yyyy = targetDay.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
};


let TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            let newState;
            let newItem = {
                id: ++state.count,
                name: action.name,
                author: action.author,
                date: getFutureDate(parseInt(action.day)),
                description: action.description,
                status: false,
                editMode: false
            };

            if (newItem.name !== "" && newItem.name !== " " &&
                newItem.author !== "" && newItem.author !== " ") {
                newState = {...state, tasksList: [...state.tasksList, newItem]}
            }
            return newState;
        }
        case DELETE_TASK: {
            let newState = {...state, tasksList: [...state.tasksList]};
            newState.tasksList = newState.tasksList.filter(t => {
                    return t.id !== action.id
                }
            );
            return newState;
        }
        case CHANGE_STATUS: {
            let newState = {...state};
            newState.tasksList = newState.tasksList.map(t => {
                if (t.id === action.id) {
                    return {...t, status: action.status}
                }
                return t;
            });
            return newState;
        }
        case CHANGE_EDIT_MODE: {
            let newState = {...state};
            newState.tasksList = newState.tasksList.map(t => {
                if (t.id === action.id) {
                    return {...t, editMode: action.status}
                }
                return t;
            });
            return newState;
        }
        case SET_AUTHOR: {
            let newState = {...state};
            newState.tasksList = newState.tasksList.map(t=> {
                if(t.id === action.id) {
                    return {...t, author: action.author}
                }
                return t;
            });
            return newState;
        }
        case SET_NAME: {
            let newState = {...state};
            newState.tasksList = newState.tasksList.map(t=> {
                if(t.id === action.id) {
                    return {...t, name: action.name}
                }
                return t;
            });
            return newState;
        }
        case SET_DESCRIPTION: {
            let newState = {...state};
            newState.tasksList = newState.tasksList.map(t=> {
                if(t.id === action.id) {
                    return {...t, description: action.text}
                }
                return t;
            });
            return newState;
        }
        default:
            return state
    }
};

export let addTaskAC = (name, author, description, day) => ({type: ADD_TASK, name, author, description, day});
export let deleteTaskAC = (id) => ({type: DELETE_TASK, id});
export let changeStatusAC = (status, id) => ({type: CHANGE_STATUS, status, id});
export let changeEditModeAC = (status, id) => ({type: CHANGE_EDIT_MODE, status, id});
export let setAuthorAC = (author, id) => ({type: SET_AUTHOR, author, id});
export let setNameAC = (name, id) => ({type: SET_NAME, name, id});
export let setDescriptionAC =(text, id) => ({type: SET_DESCRIPTION, text, id});

export let statusSelector = (state) => {
    return state.todoList.tasksList.map(u => u.status)
};

export let editModeSelector = (state) => {
    return state.todoList.tasksList.map(u => u.editMode)
};

export let tasksListSelector = (state) => {
    return state.todoList.tasksList.map(u => u)
};

export default TodoListReducer;
