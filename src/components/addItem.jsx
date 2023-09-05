import { addItem, selectAllItems } from "../redux/items";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";

function AddItem(props) {
    const dispatch = useDispatch();
    const all_items = useSelector(selectAllItems);
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [datePosted, setDatePosted] = useState(-1);
    const [link, setLink] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [notes, setNotes] = useState("");

    const handleNameChange = (event) => {
        setCompanyName(event.target.value);
    }

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    }

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    }
    
    const handleDatePostedChange = (event) => {
        setDatePosted(event.target.value); // Assuming this will be a timestamp or number, adjust as needed.
    }
    
    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    }
    
    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }
    

    const onButtonCLick = (event) => {
        const today = new Date();
        dispatch(addItem({
            id: crypto.randomUUID(),
            applied: false,
            companyName,
            link,
            jobTitle,
            datePosted,
            responseDate: -1,
            jobDescription,
            notes,
            timeAdded: today.getTime(),
            index: all_items.length
        }));
        setCompanyName("");
        setLink("");
    }

    return (
        <>
            <div className="modal fade" id="addItemModal" tabIndex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content p-2">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addItemModalLabel">Add an application or job post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="m-1 modal-body ">
                            <div className="p-1 d-flex flex-column">
                                <label className="form-label">Company Name</label>
                                <input required  className="rounded border py-2" value={companyName} onChange={handleNameChange} type="text" ></input>
                            </div>
                            <div className="p-1 d-flex flex-column">
                                <label className="form-label">Position</label>
                                <input required  className="rounded border py-2" value={jobTitle} onChange={handleJobTitleChange} type="text" ></input>
                            </div>
                            <div className="p-1 d-flex flex-column">
                                <label className="form-label">Link</label>
                                <input className="rounded border py-2" value={link} onChange={handleLinkChange} type="text"></input>
                            </div>
                            <div className="p-1">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="5" value={jobDescription} onChange={handleJobDescriptionChange}></textarea>
                            </div>
                            <div className="p-1">
                                <label className="form-label">Notes</label>
                                <textarea className="form-control" rows="2" value={notes} onChange={handleNotesChange}></textarea>
                            </div>
                        </div>
                        <div className="m-1 modal-footer">
                            <div className="d-flex flex-row">
                                <button className="me-1 btn btn-success" onClick={() => { console.log("Unimplemented!") }}>Mark as applied</button>
                                <button className="me-1 btn btn-primary" onClick={onButtonCLick}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddItem;