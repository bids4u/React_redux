import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {buyIcecream} from './../Redux/index'
function IcecreamContainer(){
    const numOfIcecream = useSelector(state=>state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Icecream - {numOfIcecream}</h2>
            <button onClick={()=>{dispatch(buyIcecream())}}>Buy Cake</button>
        </div>
    )
}

export default IcecreamContainer;