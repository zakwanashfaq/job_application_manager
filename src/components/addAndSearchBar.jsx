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
        <div className="addAndSearchBar-container sticky-top ">
            <div className="p-1 px-3 px-xl-0 container-xl">
                <div className="my-3 d-flex flex-row">
                    <button type="button" className="btn add-new-record-btn text-light" data-bs-toggle="modal" data-bs-target="#addItemModal">
                        Add a new job posting
                    </button>
                    <div className="input-group ps-2">
                        <span className="input-group-text">Search</span>
                        <input type="text" className="form-control" value={props.searchText} onChange={onSearchTextChange} placeholder="Search by company name or job title..." aria-label="Username" />
                    </div>
                </div>
            </div>
        </div>
    );
}