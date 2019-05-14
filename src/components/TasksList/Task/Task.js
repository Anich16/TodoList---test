import React from 'react';
import style from "./Task.module.css";

let Task =(props) => {
    let {id, status, name, author, description, editMode, date} = props;

    let deleteItem = (id) => {
        props.deleteTask(id);
    };

    let setChangeMode = (status, id) => {
        if (status === false){
            openDescription(false, id);
            props.changeEditMode(true, id)
        } else {
            props.changeEditMode(false, id)
        }
    };

    let openDescription = (status, id) => {
        if (status === false){
            props.changeStatus(true, id)
        } else {
            props.changeStatus(false, id)
        }
    };

    let changeAuthor = (e, id) => {
        let author = e.target.value;
        props.setAuthor(author, id)
    };

    let changeName = (e, id) => {
        let name = e.target.value;
        props.setName(name, id)
    };

    let changeDescription = (e, id) => {
        let text = e.target.value;
        props.setDescription(text, id)
    };


    return (
        <div className={style.item} >
            <div  className={style.info} onClick={() => {
                props.editMode === false &&  openDescription(status, id)
            }} >
                <div className={style.author}>[{editMode === false ?
                    <span className={style.authorInfo}>{author}</span> :
                    <input type="text" className={style.authorInfo}
                           onChange = {(e)=>changeAuthor(e,id)} value={author} />
                }]</div>
                <div className={style.name}>{editMode === false ?
                    <span className={style.nameInfo}>{name}</span>:
                    <input type="text" className={style.nameInfo}
                           onChange = {(e)=>changeName(e,id)} value={name} />
                }</div>
            </div>
            {status === true &&  <div className={style.description}>{editMode === false ?
                <p>{description}</p> : <textarea className={style.description} rows="5"
                                                 onChange = {(e)=>changeDescription(e,id)}
                                                   value={description}></textarea>}</div>}
            <span className={style.dataInfo}>{date}</span>

            <button className={style.deleteButton} onClick={()=> deleteItem(id)}>Delete</button>
            <button className={style.changeButton} onClick={() => setChangeMode(editMode, id)}>{
                editMode === false ? "Change" : "Save"}
            </button>
        </div>
    )
};

export default Task;