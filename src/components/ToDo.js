import React from "react";
import {connect} from "react-redux";
import {actionCreator} from "../store"

const ToDo = ({text, deleteToDo}) => {
    return (
        <li>
            {text}<button onClick={deleteToDo}>delete</button>
        </li>
    );
}

const mapDistpatchToProps = (dispatch, ownProps) => {
    return {
        deleteToDo : () => dispatch(actionCreator.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDistpatchToProps)(ToDo);
