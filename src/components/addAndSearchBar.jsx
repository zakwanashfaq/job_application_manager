export function AddAndSearchBar(){
    return (
        <div className="addAndSearchBar-container sticky-top ">
            <div className="p-1 container-xl">
                <div className="my-3 d-flex flex-row">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addItemModal">
                        Add a new job posting
                    </button>
                    <div className="input-group ps-2">
                        <span className="input-group-text">Search</span>
                        <input type="text" className="form-control" placeholder="Search by position or job title..." aria-label="Username" />
                    </div>
                </div>
            </div>
        </div>
    );
}