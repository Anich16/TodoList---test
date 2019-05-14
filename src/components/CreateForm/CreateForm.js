import React from "react";
import style from "./CreateForm.module.css";
import {Field, reduxForm} from "redux-form";

class CreateForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fields: [
                {
                    name: "name",
                    type: "text",
                    placeholder: "Your Task"
                },
                {
                    name: "author",
                    type: "text",
                    placeholder: "Yor Name"
                },
                {
                    name: "date",
                    type: "number",
                    placeholder: "How many days are needed to complete the task?"
                }
            ]
        };

    };

    collectDataForm = (e) =>{
        e.preventDefault();
        this.props.submit();
    };

    render () {
        return (
            <form onSubmit={this.collectDataForm} className={style.form}>

                {
                    this.state.fields.map(f => {
                        return <Field name={f.name} component="input" type={f.type}
                                      placeholder={f.placeholder} className={style.field} />
                    })}


                    <Field name="description" component="textarea" rows="5"
                           placeholder="What should be done?" className={style.field}/>

                <button type="submit" className={style.createButton}>Send</button>
            </form>
        )
    }

}

CreateForm = reduxForm({
    form: 'info'
})(CreateForm);

export default CreateForm;