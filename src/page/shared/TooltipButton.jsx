import React, {useState} from 'react';

const TooltipButton = ({handleClick, className, iconClass, tooltipText, toggleTooltipText = tooltipText, toggleTextHook = null }) => {
    const [visibilityTooltip, setVisibilityTooltip] = useState(false)

    return (
        <button
            onClick={handleClick}
            className={className}
            onMouseOver={() => setVisibilityTooltip(true)}
            onMouseLeave={() => setVisibilityTooltip(false)}
        >
            {visibilityTooltip &&
            <div className="tooltip-content">
                {toggleTextHook ? tooltipText : toggleTooltipText}
            </div>
            }
            <i className={iconClass}/>
        </button>
    );
};

export default TooltipButton;
