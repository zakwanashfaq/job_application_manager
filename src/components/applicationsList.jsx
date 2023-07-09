import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { db } from '../db';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, getAllItems, selectAllItems, fetchData } from "../redux/items";


// Config variables
const MAX_SEARCH_DEPTH = 7;

function getTextFromHtmlElement(element, depth = 0) {
    // Base case: if the depth is greater than maxDepth, return null
    if (depth > MAX_SEARCH_DEPTH) {
        return null;
    }

    // If this is a text node and it's not empty or just whitespace, return its text
    if (element?.nodeType === Node.TEXT_NODE && element.textContent.trim() !== '') {
        return element.textContent.trim();
    }

    // Recursive case: if this element has child nodes, iterate over each one
    if (element?.hasChildNodes()) {
        for (let child of element.childNodes) {
            let childText = getTextFromHtmlElement(child, depth + 1, MAX_SEARCH_DEPTH);
            if (childText !== null) {
                return childText;
            }
        }
    }

    // If we've gone through all child nodes and found no text, return null
    return null;
}


function ApplicationList(props) {
    const listContainerRef = useRef(null);
    const dispatch = useDispatch();
    let all_items = useSelector(state => state.items.value);// not working here but works elsewhere in other components
    
    
    // console.log(props.list_items);
    const onSwapFunction = async (event) => {
        let itemsArray = [];
        for (const item of event.from.children) {
            const id = item.id;
            let name, applied, link, timeAdded;
            name = getTextFromHtmlElement(item.children[0]);
            link = getTextFromHtmlElement(item.children[1]);
            timeAdded = getTextFromHtmlElement(item.children[2]);
            applied = false; // todo: wire up this variable from ui
            itemsArray.push({
                id,
                applied,
                name,
                link,
                timeAdded
            });
        }
        
        itemsArray.reverse();
        console.log(all_items);
        // await Promise.all(itemsArray.map(item => dispatch(deleteItem(item.id))));
        // db.items.clear().then(() => {
        //     itemsArray.forEach(item => {
        //         dispatch(addItem(item));
        //     })
        // }).catch(err => {
        //     console.error("Failed to delete all items on swap: " + err);
        // });
        
        
    }

    useEffect(() => {
        let sortable = Sortable.create(listContainerRef.current, {
            animation: 150,
            onEnd: onSwapFunction
            // Add other SortableJS options as needed
        });

        // Clean up function
        return () => sortable.destroy();
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    useEffect(() => {

    }, [props.list_items]);
    return (
        <div className="application-list-container" ref={listContainerRef}>
            {props.children}
        </div>
    );
}

export default ApplicationList;
