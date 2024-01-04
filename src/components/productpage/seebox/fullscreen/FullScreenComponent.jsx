import React, {useState} from 'react'
import fullscreenExit from "../../../../assets/images/fullscreen_exit.svg";
import fullscreen from "../../../../assets/images/fullscreen.svg";

const FullScreenComponent = ({handle}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const toggleFullscreen = () => {
        setIsFullscreen(prevIsFullscreen => !prevIsFullscreen);
        if (isFullscreen) {
            handle.exit();
        } else {
            handle.enter();
        }
    };
    return (
        <div className="fullscreen" onClick={toggleFullscreen}>
            <img src={isFullscreen ? fullscreenExit : fullscreen} alt="" />
        </div>
    )
}
export default FullScreenComponent
