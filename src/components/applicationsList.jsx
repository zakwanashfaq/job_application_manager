import React, { useEffect, useRef, useCallback } from 'react';
import Sortable from 'sortablejs';
import { useSelector } from 'react-redux';

function ApplicationList(props) {
  const listContainerRef = useRef(null);
  const all_items = useSelector(state => state.items.value);

  const onSwapFunction = useCallback(async (event) => {
    let itemsArray = [];
    let count = 0;
    for (const item of event.from.children) {
      itemsArray.push({
        id: item.id,
        new_index: count
      });
      count++;
    }
    
    console.log(itemsArray);        
  }, [all_items]); 

  useEffect(() => {
    let sortable = Sortable.create(listContainerRef.current, {
      animation: 150,
      onEnd: onSwapFunction
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
