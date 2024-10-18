import {useEffect, useState} from "react";
import {Title} from "./Title.jsx";
import {Count} from "./Count.jsx";
import {ResetButton} from "./ResetButton.jsx";
import {ButtonContainer} from "./ButtonContainer.jsx";
import {CountButton} from "./CountButton.jsx";

export const Card = () => {
    const [count, setCount] = useState(0);
    const locked = count === 5;

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.code === "space") {
                setCount(count + 1);
                const newCount = count + 1;
                if (newCount > 5){
                    setCount(5);
                    return;
                }
                setCount(newCount)
            }
        };
        window.addEventListener("keydown", handleKeydown);
        // Clean up function
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        }
    }, [count]);

    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title locked={locked}/>
            <Count count={count} />
            <ResetButton setCount={setCount}/>
            <ButtonContainer>
                <CountButton type="minus" setCount={setCount} locked={locked} />
                <CountButton type="plus" setCount={setCount} locked={locked} />
            </ButtonContainer>
        </div>
    )
}
