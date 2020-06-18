import React from "react";
import {connect} from "react-redux";
function Detail({toDo}){
    console.log(toDo)
    return (
    <>
    {/* ?는 리다이랙트시 데이터가 없을때 나는 오류를 막기위함 */}
    <h1>{toDo?.text}</h1>
    <h5>Created at: {toDo?.id}</h5>
    </>
    )
}

const mapStateToProps = (state, ownprops) => {
    const id = ownprops.match.params.id;
    console.log(state)
    return {
        toDo: state.find(toDo => toDo.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail);