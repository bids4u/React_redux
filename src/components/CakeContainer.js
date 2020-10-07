import React from 'react';
import {connect} from 'react-redux'
import {buyCake} from './../Redux/index'
const mapStateToProps = state =>{
    return{
        numOfCakes:state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
 function CakeContainer(props){
    //  console.log(props)
    return(
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)