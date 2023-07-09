import { addItem, selectAllItems } from "../redux/items";
import { useDispatch, useSelector } from 'react-redux'
import ApplicationList from "./applicationsList";
import { useState } from "react";

function AddItem(props) {
    const dispatch = useDispatch();
    const all_items = useSelector(selectAllItems);
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    }

    const onButtonCLick = (event) => {
        const today = new Date();
        console.log(all_items);
        dispatch(addItem({
            id: crypto.randomUUID(),
            applied: false,
            name: name,
            link: link,
            timeAdded: today.getTime(),
            index: all_items.length
        }));
        setName("");
        setLink("");
    }

    return <ApplicationList>
        <div className="add-item-container">
        <div className="m-2"> Add an application or job post </div>
        <div className="row m-1">
            <div className="col-12 col-md-6 col-lg-5 p-1">
                <input className="" placeholder="Name" value={name} onChange={handleNameChange}></input>
            </div>
            <div className="col-12 col-md-6 col-lg-5 p-1">
                <input className="" placeholder="Link" value={link} onChange={handleLinkChange}></input>
            </div>
            <div className="col-12 col-md-12 col-lg-2 p-1">
                <button className="full-width btn btn-primary" onClick={onButtonCLick}>Add</button>
            </div>
        </div>
        </div>
    </ApplicationList>
}

export default AddItem;