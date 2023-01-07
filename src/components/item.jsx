

function Item(){
    return (<div className="item-container">
        <div className="col-12 col-sm-12 col-md-8">
            <input className="checkbox" type="checkbox" title="checkbox" placeholder="checkbox" />
            <span className="job-name"> Job Name</span>
        </div>
        <span className="col-12 col-sm-12 col-md-4 link-container">
            <a  href="https://stackoverflow.com/questions/22982146/span-with-a-href-link-not-working" target="_blank"> Link</a>
        </span>
    </div>);
}

export default Item;