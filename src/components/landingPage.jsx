import "../css/out/App.css";

function Navbar(props) {
    return (
        <nav className="navbar landing-nav-container">
            <div className="container-fluid">
                <a className="navbar-brand d-flex flex-row" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-text-fill text-dark nav-icon-color" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    <div className="ps-2 fs-3">
                        Job Application Manager
                    </div>
                </a>
                <form className="d-flex" role="search">
                    <button className="btn btn-sm btn-outline-dark" type="submit">Log in</button>
                    <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button>
                </form>
            </div>
        </nav>
    );
}

function Hero(props) {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom landing-hero-container">
            <div className="display-4 fw-bold text-body-emphasis hero-main-text-container">
                <span className="hero-main-text">
                    Organize and track all your job applications in one place
                </span>
            </div>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="button-theme-color btn btn-primary btn-lg px-4 me-sm-3">Sign up! Its free</button>
                </div>
            </div>
            <div className="overflow-hidden landing-hero-image">
                <div className="container px-5">
                    <img src="appDash.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export function LandingPage(props) {
    return (
        <div>
            <Navbar />
            <Hero />
            LandingPage
        </div>
    );
}