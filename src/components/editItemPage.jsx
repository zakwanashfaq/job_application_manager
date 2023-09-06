import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { fetchData, selectItemById } from "../redux/items";
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
    const { id } = useParams();
    const location = useLocation();
    // const data = location.state?.data;
    const dispatch = useDispatch();
    let item = location.state?.data;; // useSelector(state => selectItemById(state, '6824a9a9-8c4b-4677-9dcb-92de37082b0a'));

    useEffect(() => {
        dispatch(fetchData());
    }, []);

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
                    <div className="d-flex flex-row">
                        <div className="display-3 text-secondary me-auto">
                            Edit
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <div className="fs-4">
                        {mainTitle}
                    </div>
                    <div className="row py-4">
                        <div className="col-8">
                            <div className="fs-5 py-3">
                                Job Description
                            </div>
                            <textarea className="w-100 h-100 p-3 form-control" value={item.jobDescription} />
                            <div className="fs-5 py-3">
                                Notes
                            </div>
                            <textarea disabled className="w-100 p-3 form-control" rows={3} value={item.notes} />
                        </div>
                        <div className="col-4">
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
                                <button className="me-1 btn btn-success w-100" onClick={() => { console.log("Unimplemented!") }}>Mark as applied</button>
                                <button className="me-1 btn btn-primary w-100" onClick={() => { console.log("Unimplemented!") }}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};