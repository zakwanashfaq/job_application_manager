

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



function Header(params) {
    return (<div className="header-container py-5">
        <div className="container-xl">
            <div className="header-container-first-row text-light">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-text-fill" viewBox="0 0 16 16" data-bs-toggle="offcanvas" href="#offcanvasExample">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                </svg> */}
                <h3 className="display-6 ps-1">Job Application Manager</h3>
                <ModalPopover />
            </div>
            <div className="text-light header-container-info pt-4">
                Keep track of Jobs you have applied to and the ones you want to apply
                to in one place. Everything is stored on your local computers browser(IndexedDB).
                This list is private to you.
                <OffCanvasBar />
            </div>
        </div>
    </div>);
}

export default Header;