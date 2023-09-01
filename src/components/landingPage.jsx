import "../css/out/App.css";

function Navbar(props) {
    return (
        <nav className="navbar landing-nav-container">
            <div className="container-fluid">
                <a className="navbar-brand d-flex flex-row align-items-center" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-text-fill text-dark nav-icon-color" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    <div className="ps-2 pb-1 fs-1 fw-bolder nav-brand-text">
                        JAM
                    </div>
                </a>
                <form className="d-none d-lg-block" role="search">
                    <div class="d-flex flex-row ">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#features">Features</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">Instructions</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link">About</a>
                            </li>
                        </ul>
                        <button className="btn btn-sm btn-outline-dark ms-2 p-2 ms-md-4" type="submit">Log in</button>
                        <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button>
                    </div>
                </form>
                <button class="d-lg-none navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-2 py-3" id="navbarNav">
                    <div className="d-lg-none">
                        <div className="d-flex justify-content-center mini-collpase-nav-container pt-3 pb-4">
                            <div className="d-flex flex-column">
                                <ul class="navbar-nav">
                                    <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link" href="#features">Features</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link" href="#">Instructions</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link" href="#">FAQ</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-4">
                                        <a class="nav-link">About</a>
                                    </li>
                                </ul>

                                <div className="d-flex flex-row">
                                    <button className="btn btn-sm btn-outline-dark ms-2 p-2" type="submit">Log in</button>
                                    <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button>
                                </div></div>
                        </div>
                    </div>
                </div>
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

function Footer(props) {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Job Application Manager</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

function Features(props) {
    return (
        <div id="features">
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Columns with icons</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use href="#collection"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi"><use href="#chevron-right"></use></svg>
                        </a>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi"><use href="#chevron-right"></use></svg>
                        </a>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi"><use href="#chevron-right"></use></svg>
                        </a>
                    </div>
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
            <Features />
            <Footer />
        </div>
    );
}