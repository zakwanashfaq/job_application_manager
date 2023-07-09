
function Item(props){
    return (<div className="item-container" id={props.id}>
        <div className="col-11 col-sm-11 col-md-7">
            <input className="checkbox" type="checkbox" title="checkbox" placeholder="checkbox" value={props.applied}/>
            <span className="job-name">{props.name}</span>
        </div>
        <span className="col-12 col-sm-12 col-md-4 link-container">
            <a rel="noreferrer" href={props.link} target="_blank"> {props.link}</a>
        </span>
        <span className="col-12 col-sm-12 col-md-1 ps-2">{(new Date(props.timeAdded)).toLocaleString()}</span>
    </div>);
}

export default Item;