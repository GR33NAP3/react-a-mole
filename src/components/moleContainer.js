import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot"

const MoleContainer = (props) => {
    const [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    //if its true displays a mole if not it displays emtyslot
    let needMole = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />
    

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {needMole}
         </div>
    )
}

export default MoleContainer