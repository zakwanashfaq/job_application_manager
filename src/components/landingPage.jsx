import "../css/out/LandingPage.css";
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
    const navigate = useNavigate();
    return (
        <nav className="navbar landing-nav-container">
            <div className="container-fluid mx-2">
                <a className="navbar-brand d-flex flex-row align-items-center p-0 m-0" href="/">
                    {/* <img src="logo-word-art.png" width="100" height="60" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-text-fill text-dark nav-icon-color" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg> */}
                    <div className="ps-2 pb-1 fw-bolder nav-brand-text">
                        resJam
                    </div>
                </a>
                <form className="d-none d-lg-block" role="search">
                    <div className="d-flex flex-row">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item px-3">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            {/* <li className="nav-item px-3">
                                <a className="nav-link" href="#">Instructions</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link">About</a>
                            </li> */}
                        </ul>
                        {/* <button className="btn btn-sm btn-outline-dark ms-2 p-2 ms-md-4" type="submit">Log in</button>
                        <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button> */}
                        <button className="button-theme-color btn btn-sm btn-primary ms-4 p-2" type="submit" onClick={() => navigate("/app")}>Go to app</button>
                    </div>
                </form>
                <button className="d-lg-none navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2 py-3" id="navbarNav">
                    <div className="d-lg-none">
                        <div className="d-flex justify-content-center mini-collpase-nav-container pt-3 pb-4">
                            <div className="d-flex flex-column">
                                <ul className="navbar-nav">
                                    <li className="nav-item d-flex justify-content-center pb-2">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item d-flex justify-content-center pb-2">
                                        <a className="nav-link" href="#features">Features</a>
                                    </li>
                                    {/* <li className="nav-item d-flex justify-content-center pb-2">
                                        <a className="nav-link" href="#">Instructions</a>
                                    </li>
                                    <li className="nav-item d-flex justify-content-center pb-2">
                                        <a className="nav-link" href="#">FAQ</a>
                                    </li>
                                    <li className="nav-item d-flex justify-content-center pb-4">
                                        <a className="nav-link">About</a>
                                    </li> */}
                                </ul>

                                <div className="d-flex flex-row">
                                    {/* <button className="btn btn-sm btn-outline-dark ms-2 p-2" type="submit">Log in</button>
                                    <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button> */}
                                    <button className="button-theme-color btn btn-sm btn-primary mt-2 p-2" type="submit" onClick={() => navigate("/app")}>Go to app</button>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function Hero(props) {
    const navigate = useNavigate();
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom landing-hero-container">
            <div className="display-4 fw-bold text-body-emphasis hero-main-text-container">
                <span className="hero-main-text">
                    Manage all your <span className="text-color-highlight">job applications</span> simply in one app
                </span>
            </div>
            <div className="col-lg-6 py-3 mx-auto">
                <p className="lead mb-4">
                    Job Application Manager (JAM) is a tool built to manage all your job applications in one place.
                    It helps you to organize, save, track, filter and much much more!
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="button-theme-color btn btn-primary btn-lg px-4 my-sm-3 py-3" onClick={() => navigate("/app")}>Try the app and be amazed!</button>
                    {/* <button type="button" className="button-theme-color btn btn-primary btn-lg px-4 my-sm-3 py-3">Sign up! It's free...</button> */}
                </div>
            </div>
            <div className="overflow-hidden landing-hero-image">
                <div className="container px-5">
                    <img src="https://job-application-manager-bucket.s3.amazonaws.com/appDash.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-6 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Job Application Manager. Built by Zakwan Ashfaq.</span>
                </div>

                <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

function Features(props) {
    return (
        <div id="features" className="features-main-container">
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Unleash your <b>job search</b> superpowers!</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-save2" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Capture Every Detail!</h3>
                        <p>Save the entire content of job descriptions. No more guessing during recruitment or worries if the original link disappears.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Find in a Flash!</h3>
                        <p>Dive deep into your records with our quick search and spot the entry you desire in seconds.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-sort-numeric-up-alt" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
                                <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Prioritize with Pizzazz!</h3>
                        <p>Simply drag and drop to arrange your posts in the perfect sequence tailored just for you.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-save2" viewBox="0 0 16 16">
                                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Jot Down Job Journals!</h3>
                        <p>Preserve your insights and game plan for each job post. Dive right back into your strategy whenever you wish.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Application Status: Sorted!</h3>
                        <p>With a simple mark, easily differentiate between jobs you've applied for and those still on your radar.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-sort-numeric-up-alt" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Oops-Proof Editing!</h3>
                        <p>Made an error? Fret not! Seamlessly edit or update any post whenever you need.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Testemonials(props) {
    return (
        <div className="container-xl pb-3 pb-md-5">
            <div className="row p-2">
                <div className="col-sm-12">
                    <h2>What <b>our users</b> are saying</h2>
                    <div id="myCarousel" className="carousel slide pointer-event" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="media">
                                            <img src="/examples/images/clients/1.jpg" className="mr-3" alt="" />
                                            <div className="media-body">
                                                <div className="testimonial">
                                                    <p>
                                                        Before using this platform, I felt like my job search was a never-ending maze. Now, every detail is at my fingertips, and I'm more organized than ever. The 'Capture Every Detail' feature is a game changer. Highly recommend to anyone serious about their career!
                                                    </p>
                                                    <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="media">
                                            <img src="/examples/images/clients/2.jpg" className="mr-3" alt="" />
                                            <div className="media-body">
                                                <div className="testimonial">
                                                    <p>
                                                        Navigating the job market has never been this seamless! The ability to prioritize and keep track of applications, all while jotting down my thoughts, has transformed my approach. This platform isn't just a tool—it's my job search companion.
                                                    </p>
                                                    <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <Testemonials />
            <Footer />
        </div>
    );
}