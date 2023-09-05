import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectItemById } from "../redux/items";


export default function ItemPage(props) {
    const { id } = useParams();
    const item = useSelector(state => selectItemById(state, '0a4e5abb-5d4a-4076-a342-ce6bbe247b0b'));
    console.log(item);



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
                            <textarea className="w-100 h-100">
                                sdvsdv
                            </textarea>
                        </div>
                        <div className="col-4">
                            <div>
                                Notes
                            </div>
                            <textarea className="w-100" rows={3} >
                                sdvsdv
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};