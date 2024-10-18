import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export const CountButton = ({ type, setCount, locked }) => {

    const handleClick = (e) => {
        setCount((prev) => {
            if (type === 'minus') {
                const newCount = prev - 1;
                if (newCount < 0) {
                    return prev;
                }
                return prev - 1;
            } else {
                const newCount = prev + 1;
                if(newCount > 5 ) {
                    return prev;
                }
                return newCount;
            }
        });

        // unfocused the button
        e.currentTarget.blur();
    }
    return (
        <button disabled={locked } onClick={handleClick} className="count-btn">
            {type === "minus" ? (
                   <MinusIcon className="count-btn-icon"/>
                ) : (
                    <PlusIcon className="count-btn-icon"/>
                )
            }
        </button>
    )
}
