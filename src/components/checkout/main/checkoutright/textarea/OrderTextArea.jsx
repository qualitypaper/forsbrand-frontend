import React, {useContext, useState} from 'react'
import {AppContext} from "../../../../app/App";
import "./OrderTextArea.scss"
import list1 from "../../../../../assets/images/list.svg";

const OrderTextArea = () => {
    const {} = useContext(AppContext);
    const [openNote, setOpenNote] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [noteEdited, setNoteEdited] = useState(false);

    const handleCloseTextarea = () => {
        setOpenNote(false);
        if (!userInput.trim()) {
            setNoteEdited(false);
        } else {
            setNoteEdited(true);
        }
    };

    const handleTextareaChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleToggleNote = () => {
        setOpenNote(!openNote);
        // If the note was already edited, setNoteEdited to false to hide userInput
        if (noteEdited) {
            setNoteEdited(false);
        }
    };

    return (
        <div className="checkout-right__order-promo">
            <div className="checkout-right__list">
                <div onClick={handleToggleNote} className="cart__order-full-list2">
                    <img width={20} height={20} src={noteEdited ? list1 : list1} alt="List" />
                    {noteEdited === false ? "Додати примітку" : "Змінити примітку"}
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
                </div>
            )}
            {noteEdited && (
                <p className="userInput">{userInput}</p>
            )}
        </div>
    );
};

export default OrderTextArea;