import React, { useState, useEffect } from 'react';
import "../css/out/App.css";
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../redux/items';

/**
 * Represents an item component that displays job application details.
 * 
 * @param {Object} props - The properties for the item.
 * @param {boolean} props.applied - Indicates if the job has been applied for.
 * @param {string} props.companyName - The name of the company.
 * @param {number} props.datePosted - The date the job was posted.
 * @param {string} props.id - The unique identifier for the job application.
 * @param {number} props.index - The index number.
 * @param {string} props.jobDescription - The description of the job.
 * @param {string} props.jobTitle - The title of the job.
 * @param {string} props.link - The link to the job application.
 * @param {string} props.notes - Any additional notes.
 * @param {number} props.responseDate - The date of response.
 * @param {number} props.timeAdded - The timestamp when the job was added.
 * @returns {JSX.Element} The item component.
 */
function EditItem(props) {
    const target_id = "editModal-" + props.id;
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState(props.companyName);
    const [datePosted, setDatePosted] = useState(props.datePosted);
    const [jobDescription, setJobDescription] = useState(props.jobDescription);
    const [jobTitle, setJobTitle] = useState(props.jobTitle);
    const [link, setLink] = useState(props.link);
    const [notes, setNotes] = useState(props.notes);
    const [responseDate, setResponseDate] = useState(props.responseDate);
    const [applied, setApplied] = useState(props.applied);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [showUpdateAlert, setShowAlert] = useState(false);

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const handleDatePostedChange = (e) => {
        setDatePosted(e.target.value);
    }
    
    const handleResponseDateChange = (e) => {
        setResponseDate(e.target.value);
    }

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value)
    }

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    }

    const handleJobDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    }

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }

    const handleUpdateClick = () => {

        if (isReadOnly) {
            setIsReadOnly(false);
            return;
        }

        dispatch(updateItem({
            id: props.id,
            jobTitle,
            link,
            companyName,
            jobDescription,
            notes
        }));

        setShowAlert(true);

        // infinite loop caused here
        // const modalElement = document.getElementById(target_id);
        // modalElement.classList.remove('show');
        // document.body.classList.remove('modal-open');

        // const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        // for (let i = 0; i < modalBackdrops.length; i++) {
        //     modalBackdrops[i].classList.remove('show');
        // }
    }

    const handleAppliedButtonClick = (e) => {
        let newAppliedState = !applied;
        dispatch(updateItem({
            id: props.id,
            applied: newAppliedState
        }));
        setApplied(newAppliedState);
    }

    const onCloseButtonClick = (e) => {
        setIsReadOnly(true);
    }


    useEffect(() => {
        if (showUpdateAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            
            return () => clearTimeout(timer); // Clear the timer if the component is unmounted
        }
    }, [showUpdateAlert]);


    return <div className='ps-2'>
        {/* eslint-disable-next-line */}
        <a data-bs-toggle="modal" data-bs-target={"#" + target_id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right item-hover-toolbar-edit-button" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
        </a>

        <div className="viewRecordModal modal fade" id={target_id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" id="editModalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 d-flex flex-row">
                            {isReadOnly ? "Job post details" : "Edit job post details"}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseButtonClick}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className='p-1 px-lg-3 col-12 col-lg-4'>
                                <div className="mb-3">
                                    <label className="form-label ps-1">Job Title</label>
                                    <input className="form-control" placeholder="" value={jobTitle} onChange={handleJobTitleChange} readOnly={isReadOnly} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label ps-1">Company Name</label>
                                    <input className="form-control" placeholder="" value={companyName} onChange={handleCompanyNameChange} readOnly={isReadOnly} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label ps-1">Link</label>
                                    <input className="form-control" placeholder="https//lineToPost.com/postID" value={link} onChange={handleLinkChange} readOnly={isReadOnly} />
                                </div>
                            </div>
                            <div className="p-1 px-lg-3 col-12 col-lg-8">
                                <div className="textarea-container">
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control description-textarea" value={jobDescription} onChange={handleJobDescriptionChange} readOnly={isReadOnly} ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Notes</label>
                                        <textarea className="form-control notes-textarea" value={notes} onChange={handleNotesChange} readOnly={isReadOnly} ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div className="d-flex flex-row">
                            <button type="button" className="btn btn-success" onClick={handleAppliedButtonClick}>{props.applied ? "Unmark as applied" : "Mark as applied"}</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={handleUpdateClick}>{isReadOnly ? "Edit" : "Update"}</button>
                            {
                                showUpdateAlert && 
                                <div className="alert alert-success ms-2 py-1 m-0 fs-6" role="alert">
                                    Updated successfully!
                                </div>
                            }
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"  onClick={onCloseButtonClick}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


function getShortString(string, lenght) {
    if (!string) {
        return "";
    }
    return string.length > lenght ? `${string.substring(0, lenght)}...` : string;
}


/**
 * Represents an item component that displays job application details.
 * 
 * @param {Object} props - The properties for the item.
 * @param {boolean} props.applied - Indicates if the job has been applied for.
 * @param {string} props.companyName - The name of the company.
 * @param {number} props.datePosted - The date the job was posted.
 * @param {string} props.id - The unique identifier for the job application.
 * @param {number} props.index - The index number.
 * @param {string} props.jobDescription - The description of the job.
 * @param {string} props.jobTitle - The title of the job.
 * @param {string} props.link - The link to the job application.
 * @param {string} props.notes - Any additional notes.
 * @param {number} props.responseDate - The date of response.
 * @param {number} props.timeAdded - The timestamp when the job was added.
 * @returns {JSX.Element} The item component.
 */
function Item(props) {
    const dispatch = useDispatch();
    let shortLink = getShortString(props.link, 40);
    let shortJobTitle = getShortString(props.jobTitle, 30);
    let shortCompanyName = getShortString(props.companyName, 30);
    const target_id = "editModal-" + props.id;
    //const [isSelected, setIsSelected] = useState(false);
    // props.applied
    // const handleOnSelect = (e) => {
    //     setIsSelected(e.target.checked);
    // }


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOnDelete = (e) => {
        dispatch(deleteItem(props.id));
        console.log("Deleted: " + props.id);
    }

    return (
        <div className={"item-container p-3 " + (props.applied ? "item-applied" : "")} id={props.id}>
            <div className=" item-hover col-12 col-sm-12 col-md-5">
                <div className='item-hover-container'>
                    <div className="item-start-block">
                        <div className="item-dragDrop">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-grip-vertical" viewBox="0 0 16 16">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                        {/* <input className="checkbox" type="checkbox" title="checkbox" onChange={handleOnSelect} placeholder="checkbox" value={isSelected} /> */}
                        <div className='d-flex flex-column ps-4'>
                            <div className="d-flex flex-row">
                                <strong className={"pt-1 " + (props.applied ? "text-decoration-line-through" : "")} data-bs-toggle="modal" data-bs-target={"#" + target_id}>
                                    {shortJobTitle}
                                </strong>
                                <EditItem {...props} />
                            </div>
                            <span>{shortCompanyName}</span>
                        </div>
                    </div>
                    <div className={' ' + (windowWidth < 770) ? "pe-2" : "pe-4"}>
                    </div>
                </div>
            </div>
            <span className="col-12 col-sm-12 col-md-4 ps-5 ps-md-2 pt-2 link-container">
                <a
                    rel="noreferrer"
                    href={props.link}
                    target="_blank"
                    className="truncate-link text-dark"
                    data-full-link={props.link}
                >
                    {shortLink}
                </a>
            </span>
            <span className="col-12 col-sm-12 col-md-3">
                <div className="item-end-column">
                    <div className="ps-5 ps-md-2 date-box ">
                        {(new Date(props.timeAdded)).toUTCString().toLocaleString()}
                    </div>
                    <div className='item-delete-button ps-2' onClick={handleOnDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    </div>
                </div>
            </span>
        </div>
    );
}

export default Item;
