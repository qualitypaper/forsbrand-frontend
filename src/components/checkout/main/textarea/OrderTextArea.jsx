import React, {useContext, useState} from 'react'
import {AppContext} from "../../../app/App";
import "./OrderTextArea.scss"
import sale from "../../../../assets/images/sale.svg";
import list1 from "../../../../assets/images/list.svg";

const OrderTextArea = () => {
    const {
    } = useContext(AppContext)
    const [openNote, setOpenNote] = useState(false)
    const [userInput, setUserInput] = useState("");
    const [noteEdited, setNoteEdited] = useState(false);

    const handleCloseTextarea = () => {
        // Close the textarea
        setOpenNote(false);
        if (!userInput) {
            setNoteEdited(false); // Reset noteEdited if the user input is empty
        }
        setNoteEdited(true);
    };
    const handleTextareaChange = (event) => {
        setUserInput(event.target.value)
    }
    return (
        <div className="checkout-right__order-promo">
            <div className="checkout-right__list">
                <div onClick={() => setOpenNote(!openNote)} className="cart__order-full-list2">
                    <img width={20} height={20} src={noteEdited ? "" : list1} alt="List"/>
                    <p>{noteEdited ? "Змінити примітку" : "Додати примітку"}</p>
                </div>
            </div>
            {openNote && (
                <div className="cart__order-full-list2-open">
                            <textarea
                                className="inp2"
                                placeholder="Інструкції? Спеціальні запити? Додайте їх тут."
                                aria-invalid="false"
                                value={userInput}
                                onChange={handleTextareaChange}
                                onBlur={handleCloseTextarea}
                            />
                </div>)
            }
            {userInput && (
                <p className="userInput ">{userInput}</p>
            )}

        </div>
    )
}

export default OrderTextArea