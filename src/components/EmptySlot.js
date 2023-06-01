import { useEffect } from "react";
import Molehill from "./molehill.jpg"

function EmptySlot (props) {

    useEffect (()=> {
        let randSeconds = Math.ceil(Math.random()*5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <img 
            style={{'width': '30vw'}}
            src= {Molehill}
            alt="empty mole hill" />
    )
}

export default EmptySlot