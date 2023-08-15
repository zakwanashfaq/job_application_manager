import React, { useEffect, useRef, useCallback } from 'react';
import Sortable from 'sortablejs';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/items';

function ApplicationList(props) {
    const listContainerRef = useRef(null);
    const dispatch = useDispatch();

    const onSwapFunction = useCallback(async (event) => {
        let itemsArray = [];
        let count = 0;
        for (const item of event.from.children) {
            itemsArray.push({
                id: item.id
            });
        }
        
        itemsArray.reverse().forEach(item => {
            dispatch(updateItem({id: item.id, index: count}));
            count++;
        });
    }, [dispatch]);

    useEffect(() => {
        let sortable = Sortable.create(listContainerRef.current, {
            animation: 150,
            onEnd: onSwapFunction,
            handle: ".item-dragDrop"
            // Add other SortableJS options as needed
        });

        // Clean up function
        return () => sortable.destroy();
    }, [onSwapFunction]);

    useEffect(() => {

    }, [props.list_items]);

    return (
        <div className="application-list-container" ref={listContainerRef}>
            {props.children}
        </div>
    );
}

export default ApplicationList;
