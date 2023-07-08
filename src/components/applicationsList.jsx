import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';

function ApplicationList(props) {
    const listContainerRef = useRef(null);

    useEffect(() => {
        let sortable = Sortable.create(listContainerRef.current, {
            animation: 150,
            // Add other SortableJS options as needed
        });

        // Clean up function
        return () => sortable.destroy();
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <div className="application-list-container" ref={listContainerRef}>
            {props.children}
        </div>
    );
}

export default ApplicationList;
