import React from 'react'

const Loader = ({hidden}) => {
    return (
        <div className="loader-container" style={{display: `${hidden ? 'none' : 'block'}`}}>
            <div className="circle-loader">
                <span className="circle" />
            </div>
        </div>
    );
};
export default Loader;
