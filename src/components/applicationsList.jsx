import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { db } from '../db';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, updateItem } from "../redux/items";


// Config variables
const MAX_SEARCH_DEPTH = 7;

function getTextFromHtmlElement(element, depth = 0) {
    // Base case: if the depth is greater than maxDepth, return null
    if (depth > MAX_SEARCH_DEPTH) {
        return null;
    }

    // If this is a text node and it's not empty or just whitespace, return its text
    if (element.nodeType === Node.TEXT_NODE && element.textContent.trim() !== '') {
        return element.textContent.trim();
    }

    // Recursive case: if this element has child nodes, iterate over each one
    if (element.hasChildNodes()) {
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
        
        itemsArray.forEach(item => {
            dispatch(deleteItem(item.id));
        })

        itemsArray.forEach(item => {
            dispatch(addItem(item));
        })
        
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

    return (
        <div className="application-list-container" ref={listContainerRef}>
            {props.children}
        </div>
    );
}

export default ApplicationList;
