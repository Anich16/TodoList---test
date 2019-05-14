import React from "react";
import {connect} from "react-redux";
import CreateForm from "../../components/CreateForm/CreateForm.js";

let mapStateToProps =(state)=> {
    return {
        form: state.form
    }
};

 let CreateFormContainer = connect (mapStateToProps, null)(CreateForm);
export  default CreateFormContainer;