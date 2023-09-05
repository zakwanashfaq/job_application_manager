/**
@param {Object} props - The properties for the item.
 * @param {function } searchText
 * @param {string} setSearchText
 * */
export function AddAndSearchBar(props){
    const onSearchTextChange = (e) => {
        props.setSearchText(e.target.value);
    }
    return (
        <div className="addAndSearchBar-container sticky-top">
            <div className="p-1 px-3 pb-4 px-xl-0 container-xl py-3">
                <div className="row">
                    <div className="col-sm-12 col-md-3 ps-md-4">
                        <button type="button" className="btn add-new-record-btn text-light h-100 w-100" data-bs-toggle="modal" data-bs-target="#addItemModal">
                            Add a new job posting
                        </button>
                    </div>
                    <div className="col-sm-12 col-md-9 pe-md-4">
                        <div className="input-group pt-3 pt-md-0 h-100 pt-md-0">
                            <span className="input-group-text">Search</span>
                            <input type="text" className="form-control py-3" value={props.searchText} onChange={onSearchTextChange} placeholder="Search by company name or job title..." aria-label="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}