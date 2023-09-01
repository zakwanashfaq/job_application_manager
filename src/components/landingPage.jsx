import "../css/out/App.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md landing-nav-container">
            <div className="container-fluid">
                <a className="navbar-brand d-flex flex-row align-items-center" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-text-fill text-dark nav-icon-color" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    <div className="ps-2 pb-1 fs-1 fw-bolder nav-brand-text">
                        JAM
                    </div>
                </a>
                <form className="d-flex" role="search">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">About</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-sm btn-outline-dark ms-2" type="submit">Log in</button>
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
                    Manage all your job applications simply in one app
                </span>
            </div>
            <div className="col-lg-6 py-3 mx-auto">
                <p className="lead mb-4">
                    Job Application Manager (JAM) is a tool built to manage all your job applications in one place. 
                    It helps you to organize, save, track, filter and much much more!
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="button-theme-color btn btn-primary btn-lg px-4 my-sm-3 py-3">Sign up! It's free...</button>
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