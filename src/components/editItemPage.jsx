import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData, selectItemById } from "../redux/items";
import "../css/out/EditPage.css"

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
                    <div className="display-3">
                        IBM
                    </div>
                    <div className="fs-4">
                        Software Developer
                    </div>
                    <div className="row py-4">
                        <div className="col-8">
                            <div>
                                Job Description
                            </div>
                            <textarea className="w-100 h-100" value={"sdjbfskd"}/>
                        </div>
                        <div className="col-4">
                            <div>
                                Notes
                            </div>
                            <textarea className="w-100" rows={3}  value={"ddd"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};