import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchData, deleteItem } from "../redux/items";
import "../css/out/ViewPage.css"

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

export default function ViewItemPage(props) {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let item = location.state?.data;
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleEditClick = (e) => {
        navigate('/app/item/edit/', { state: { data: item } });
    };

    const handleOnDelete = (e) => {
        dispatch(deleteItem(item.id));
        navigate("/app");
    }

    const handleOnBackButtonClick = (e) => {
        navigate("/app");
    }

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" fill="currentColor" onClick={handleOnBackButtonClick} className="bi bi-arrow-left-square text-secondary me-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </div>
                        <div className="display-6 me-auto d-flex flex-row">
                            View
                            {
                                item.applied &&
                                <>
                                    <div className="ms-4 p-2 bg-success rounded-3 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" fill="currentColor" className="bi bi-check-circle-fill text-light" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                        <span className="ps-2 text-light fs-6">
                                            Applied
                                        </span>
                                    </div>
                                </>
                            }
                        </div>

                        <div className="d-flex align-items-center">
                            <button className="me-2 btn btn-primary w-100" onClick={handleEditClick}>Edit post</button>
                            <button className="btn btn-danger" onClick={handleOnDelete}>Delete</button>
                        </div>
                    </div>
                    <div className="fs-3 pt-4 d-flex flex-column align-items-start">
                        {mainTitle}
                        <div className="fs-6">
                            <a target="_blank" rel="noreferrer" href={item.link}>{item.link}</a>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <div className="fs-5 pb-3">
                                Job Description
                            </div>
                            <pre className="p-3 form-control">{item.jobDescription}</pre>
                            <div className="fs-5 py-3">
                                Notes
                            </div>
                            <pre className="p-3 form-control">{item.notes}</pre>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};