import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectAllItems } from "../redux/items";

function OffCanvasBar(props) {
    return <div className="pb-2">
        <a className="text-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            Feature List
        </a>
        <div className="offcanvas offcanvas-start p-2" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Feature List</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="pb-2">
                    These are the features that are currently available, also. the upcoming features.
                </div>
                <ul className="">
                    <li>Ability to reorder list (put at certain index)</li>
                    <li>Ability to reorder list by drag and drop</li>
                    <li>Ability to delete records</li>
                    <li>Ability to modify records</li>
                    <li>Search for a particular record </li>
                    <li>Mass Selection (Upcoming)</li>
                    <li>Sort by column (Upcoming)</li>
                    <li>Pagination/Lazy load for a large list (Upcoming)</li>
                </ul>
                <div className="">
                    *This will eventually be a sub-module for an AIO job
                    serach solution and preparation tool. Everything over here
                    is written in a reusable and lousely-coupled architecture.
                </div>
            </div>
        </div>
    </div>
}

function ModalPopover(props) {
    return <div>
        {/* eslint-disable-next-line */}
        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-light bi bi-question-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
        </a>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-dark">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">About</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <span>
                            Job Application Manager
                            An application I built to keep track of all the jobs I applied to.
                            <br />
                            <br />
                            Tech Stack: Javascript, AWS, Bootstrap, NodeJS, ReactJS, Redux, IndexedDB, DexieJS & GIT
                        </span>
                        <br />
                        <br />
                        Made by <a href="https://www.linkedin.com/in/zakwanashfaq/" rel="noreferrer" target="_blank">Zakwan Ashfaq</a>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}



function OverviewWidget(props) {
    const dispatch = useDispatch();
    const data = useSelector(selectAllItems);
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const tottalItems = data.length;
    let totalApplied = 0;
    let totalRejected = 0;
    let totalInterviewCalls = 0;

    // set all variables here in one pass
    data.forEach(item => {
        if (item.applied) {
            totalApplied++;
        }
    })

    return (
        <>
            <div className="row text-light d-flex px-2">
                <div className="px-2 fs-5 fw-bold">Overview</div>
                <div className="col-6 col-md-4 col-lg-3 p-2">
                    Total number of items
                    <div className="display-1">
                        {tottalItems}
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-2">
                    Total Applied
                    <div className="display-1">
                        {totalApplied}
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-2">
                    Total Rejected
                    <div className="display-1">
                        N/A
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-2">
                    Total Interview Calls
                    <div className="display-1">
                        N/A
                    </div>
                </div>

            </div>
        </>
    );
}


function Header(params) {
    return (<div className="header-container pt-5 pb-1 my-0">
        <div className="container-xl">
            <div className="header-container-first-row text-light">
                <h3 className="display-6 ps-1"><span className="logo-font-header">rezJam</span> Dashboard</h3>
                <ModalPopover />
            </div>
            <div className="text-light header-container-info pt-4">
                Keep track of Jobs you have applied to and the ones you want to apply
                to in one place. Everything is stored on your local computers browser(IndexedDB).
                This list is private to you.
                <OffCanvasBar />
            </div>
            <hr className="thick-border border-white my-4" />
            <OverviewWidget />
            <hr className="thick-border border-white mt-4" />
        </div>
    </div>);
}

export default Header;