import React from 'react';
import "../css/out/App.css";

function Item(props){
    const shortLink = props.link.length > 50 ? `${props.link.substring(0, 50)}...` : props.link;

    return (
        <div className="item-container p-4" id={props.id}>
            <div className="col-11 col-sm-11 col-md-6">
                {/* Uncomment the below line when checkbox logic is implemented*/}
                {/* <input className="checkbox" type="checkbox" title="checkbox" placeholder="checkbox" value={props.applied}/> */}
                <strong className="job-name">{props.name}</strong>  {/* Making name bold */}
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
            <span className="col-12 col-sm-12 col-md-2 ps-2">{(new Date(props.timeAdded)).toLocaleString()}</span>
        </div>
    );
}

export default Item;
