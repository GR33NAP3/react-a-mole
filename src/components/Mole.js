import { useEffect } from "react";
import MoleImg from "./mole.jpg"

function Mole (props) {

    useEffect (()=> {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <img 
            style={{'width': '30vw'}}
            src= {MoleImg}
            onClick={(props.handleClick)}
            alt="empty mole hill" />
    )
}

export default Mole