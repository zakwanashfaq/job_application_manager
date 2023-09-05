import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
    const dispatch = useDispatch();
    let item = useSelector(state => selectItemById(state, '6824a9a9-8c4b-4677-9dcb-92de37082b0a'));
    console.log(item);


    useEffect(() => {
        dispatch(fetchData());
    }, []);



    return (
        <>
            <div className="container-lg">
                <div className="d-flex flex-column px-2 py-4">
                    <div className="d-flex flex-row">
                        <div className="display-3 me-auto">
                            Edit
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <div className="fs-4">
                        {item?.companyName + " " + item?.jobTitle}
                    </div>
                    <div className="row py-4">
                        <div className="col-8">
                            <div className="fs-5 py-3">
                                Job Description
                            </div>
                            <textarea className="w-100 h-100 p-3 form-control" value={"sdjbfskd"}/>
                            <div className="fs-5 py-3">
                                Notes
                            </div>
                            <textarea disabled className="w-100 p-3 form-control" rows={3}  value={"ddd\nfgfsgsfg\ndsfdsfs\ndsfsdfsd"}/>
                        </div>
                        <div className="col-4">
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5 pt-2">Company Name</label>
                                <input required  className="rounded border p-2" value={"handleNameChange"} type="text" ></input>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5">Position</label>
                                <input required  className="rounded border p-2" value={"jobTitle"} type="text" ></input>
                            </div>
                            <div className="p-1 mt-3 d-flex flex-column">
                                <label className="form-label fs-5">Link</label>
                                <input className="rounded border p-2" value={"link"} type="text"></input>
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