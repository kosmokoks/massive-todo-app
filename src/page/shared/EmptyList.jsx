import React from 'react';

const EmptyList = ({items, children}) => {

    if (items && items.length) {
        return children
    }

    return (
        <div className="empty-list">
            <div className="content">
                <i className="icon-no-results"/>
                No results
            </div>
        </div>
    );
};

export default EmptyList;
