import React from "react";
import {connect} from "react-redux";
import {actionCreator} from "../store"
import { Link } from "react-router-dom";
const ToDo = ({text, deleteToDo, id}) => {
    return (
        <li>
            <Link to={`/${id}`}>
            {text}
            </Link>
            <button onClick={deleteToDo}>delete</button>
        </li>
    );
}

const mapDistpatchToProps = (dispatch, ownProps) => {
    return {
        deleteToDo : () => dispatch(actionCreator.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDistpatchToProps)(ToDo);
