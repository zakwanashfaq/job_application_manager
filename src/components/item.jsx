import React from 'react';
import "../css/out/App.css";
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/items';

function EditItem(props) {
    const target_id = "editModal-" + props.id; 
    return <div className=''>
        {/* eslint-disable-next-line */}
        <a data-bs-toggle="modal" data-bs-target={"#"+target_id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
        </a>

        <div className="modal fade" id={target_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" id="editModalBox">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <span>
                            EDDDITTT
                            <br />
                            {props.id}
                            <br />
                            Tech Stack: Javascript, AWS, Bootstrap, NodeJS, ReactJS, Redux, IndexedDB, DexieJS & GIT
                        </span>
                        <br />
                        <br />
                        Made by <a href="https://www.linkedin.com/in/zakwanashfaq/" rel="noreferrer" target="_blank">Zakwan Ashfaq</a>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Update</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Item(props){
    const dispatch = useDispatch();
    const shortLink = props.link.length > 50 ? `${props.link.substring(0, 50)}...` : props.link;
    //const [isSelected, setIsSelected] = useState(false);
    // props.applied
    // const handleOnSelect = (e) => {
    //     setIsSelected(e.target.checked);
    // }

    const handleOnDelete = (e) => {
        dispatch(deleteItem(props.id));
        console.log("Deleted: " + props.id);
    }
    
    // todo: add the following fields
    // company name
    // Job Title
    // date posted
    // response
    // response date
    // job description

    return (
        <div className="item-container p-4" id={props.id}>
            <div className=" item-hover col-11 col-sm-11 col-md-5">
                <div className='item-hover-container'>
                    <div className="item-dragDrop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-grip-vertical" viewBox="0 0 16 16">
                            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </div>
                    {/* <input className="checkbox" type="checkbox" title="checkbox" onChange={handleOnSelect} placeholder="checkbox" value={isSelected} /> */}
                    
                    <strong className="job-name ps-4">{props.name}</strong>
                    <div className='item-hover-toolbar-edit-button ps-4'>
                        <EditItem id={props.id}/>
                    </div>
                </div>
            </div>
            <span className="col-12 col-sm-12 col-md-4 link-container">
                <a 
                    rel="noreferrer" 
                    href={props.link} 
                    target="_blank"
                    className="truncate-link"  
                    data-full-link={props.link}  
                > 
                    {shortLink}
                </a>
            </span>
            <span className="item-end-column col-12 col-sm-12 col-md-3">
                <div className="div date-box">
                    {(new Date(props.timeAdded)).toUTCString().toLocaleString()}
                </div>
                <div className='item-delete-button ps-2' onClick={handleOnDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </div>
            </span>
        </div>
    );
}

export default Item;
