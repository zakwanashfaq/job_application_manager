
function OffCanvasBar(props) {
    return <div className="">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            Upcoming features
        </a>
        <div class="offcanvas offcanvas-start p-2" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Upcoming Feature List</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div className="pb-2">
                    This is a list of features I plan to add iteratively, as I make this app better over time. 
                </div>
                <ul className="">
                    <li>Ability to delete records</li>
                    <li>Ability to modify records</li>
                    <li>Mass Selection</li>
                    <li>Sort by column</li>
                    <li>Search for a particular record</li>
                    <li>Pagination/Lazy load for a large list</li>
                    <li>Ability to reorder list (put at certain index)</li>
                    <li>Ability to reorder list by drag and drop</li>
                    <li>More meta data for each item</li>
                </ul>
                <div className="">
                    *This will eventually be a sub-module for an AIO job 
                    serach solution and preparation tool. Everything over here 
                    is written in a reusable and louse-coupled manner.
                </div>
            </div>
        </div>
    </div>
}

function ModalPopover(props) {
    return <div>
        {/* eslint-disable-next-line */}
        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
        </a>

        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span>
                            Job Application Manager
                            An application I built (roughly in a day) to keep track of all the jobs I applied to.
                            <br />
                            <br />
                            Tech Stack: Javascript, AWS, Bootstrap, NodeJS, ReactJS, Redux, IndexedDB, DexieJS & GIT
                        </span>
                        <br />
                        <br />
                        Made by <a href="https://www.linkedin.com/in/zakwanashfaq/" rel="noreferrer" target="_blank">Zakwan Ashfaq</a>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Header(params) {
    return(<div className="header-container">
        <div className="header-container-first-row">
            <h3>Job Application Manager</h3>
            <ModalPopover />
        </div>
        <span>
            Keep track of Jobs you have applied to and the ones you want to apply 
            to in one place. Everything is stored on your local computers browser(IndexedDB).
            This list is private to you.
        </span>
        <OffCanvasBar />
    </div>);
}

export default Header;