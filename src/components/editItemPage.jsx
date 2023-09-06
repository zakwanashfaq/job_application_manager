import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchData, deleteItem, updateItem } from "../redux/items";
import "../css/out/EditPage.css"

/**
 interface JobItem {
    id: string;
    applied: boolean;
    companyName?: string;  // the '?' denotes that the property is optional
    link: string;
    jobTitle?: string;
    datePosted?: number;
    responseDate?: number;
    jobDescription?: string;
    notes?: string;
    timeAdded: number;
    index: number;
    name?: string;
}
 */

// todo: optimize this code. We do not want to fetch data here from server
// find a way to get data from initial fetch

export default function EditItemPage(props) {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let item = location.state?.data;
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const [companyName, setCompanyName] = useState(item.companyName);
    const [datePosted, setDatePosted] = useState(item.datePosted);
    const [jobDescription, setJobDescription] = useState(item.jobDescription);
    const [jobTitle, setJobTitle] = useState(item.jobTitle);
    const [link, setLink] = useState(item.link);
    const [notes, setNotes] = useState(item.notes);
    const [responseDate, setResponseDate] = useState(item.responseDate);
    const [applied, setApplied] = useState(item.applied);
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
            id: item.id,
            applied: newAppliedState
        }));
        setApplied(newAppliedState);
    }

    const onCloseButtonClick = (e) => {
        setIsReadOnly(true);
    }

    const handleOnDelete = (e) => {
        dispatch(deleteItem(item.id));
        navigate("/app");
    }

    const handleOnBackButtonClick = (e) => {
        navigate("/app");
    }

    useEffect(() => {
        if (showUpdateAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timer); // Clear the timer if the component is unmounted
        }
    }, [showUpdateAlert]);


    let mainTitle = "";
    if (item?.companyName && item?.jobTitle) {
        mainTitle = item.companyName + " " + item.jobTitle;
    } else if (item?.companyName) {
        mainTitle = item.companyName;
    } else if (item?.jobTitle) {
        mainTitle = item.jobTitle;
    } else if (item?.name) {
        mainTitle = item.name;
    }


    return (
        <>
            <div className="container-lg">
                <div className="d-flex flex-column px-2 py-4">
                    <div className="d-flex flex-row align-items-center mb-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" onClick={handleOnBackButtonClick} className="bi bi-arrow-left-square text-secondary me-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </div>
                        <div className="display-4 me-auto">
                            Edit
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-danger" onClick={handleOnDelete}>Delete</button>
                        </div>
                    </div>
                    <div className="fs-3 d-flex flex-row align-items-center">
                        {mainTitle}
                        {
                            applied &&
                            <div className="ms-2 px-2 py-1 bg-success rounded-3 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-check-circle-fill text-light" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                <span className="ps-2 text-light">
                                    Applied
                                </span>
                            </div>
                        }
                    </div>
                    <div className="row py-4">
                        <div className="col-12 col-md-8">
                            <div className="fs-5 py-3">
                                Job Description
                            </div>
                            <textarea className="w-100 h-100 p-3 form-control" value={item.jobDescription} />
                            <div className="fs-5 py-3">
                                Notes
                            </div>
                            <textarea disabled className="w-100 p-3 form-control" rows={3} value={item.notes} />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5 pt-2">Company Name</label>
                                <input required className="rounded border p-2" value={item.companyName} type="text" ></input>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5">Position</label>
                                <input required className="rounded border p-2" value={item.jobTitle} type="text" ></input>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5">Link</label>
                                <input className="rounded border p-2" value={item.link} type="text"></input>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-row">
                                <button className="me-1 btn btn-success w-100" onClick={handleAppliedButtonClick}>{applied ? "Unmark as applied" : "Mark as applied"}</button>
                                <button className="me-1 btn btn-primary w-100" onClick={() => { console.log("Unimplemented!") }}>Update</button>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-row">
                                {
                                    showUpdateAlert &&
                                    <div className="alert alert-success ms-2 py-1 m-0 fs-6" role="alert">
                                        Updated successfully!
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};