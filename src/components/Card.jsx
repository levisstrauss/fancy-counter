import {Title} from "./Title.jsx";
import {Count} from "./Count.jsx";
import {ResetButton} from "./ResetButton.jsx";
import {CountButtons} from "./CountButtons.jsx";

export const Card = () => {
    return (
        <div className="card">
            <Title/>
            <Count/>
            <ResetButton/>
            <CountButtons/>
        </div>
    )
}
