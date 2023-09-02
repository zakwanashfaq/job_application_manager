import "../css/out/LandingPage.css";
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
    const navigate = useNavigate();
    return (
        <nav className="navbar landing-nav-container">
            <div className="container-fluid mx-2">
                <a className="navbar-brand d-flex flex-row align-items-center p-0 m-0" href="/">
                    <img src="logo-word-art.png" width="100" height="60" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-text-fill text-dark nav-icon-color" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    <div className="ps-2 pb-1 fs-1 fw-bolder nav-brand-text">
                        JAM
                    </div> */}
                </a>
                <form className="d-none d-lg-block" role="search">
                    <div class="d-flex flex-row">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#features">Features</a>
                            </li>
                            {/* <li class="nav-item px-3">
                                <a class="nav-link" href="#">Instructions</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link">About</a>
                            </li> */}
                        </ul>
                        {/* <button className="btn btn-sm btn-outline-dark ms-2 p-2 ms-md-4" type="submit">Log in</button>
                        <button className="button-theme-color btn btn-sm btn-primary ms-2 p-2" type="submit">Sign up</button> */}
                        <button className="button-theme-color btn btn-sm btn-primary ms-4 p-2" type="submit" onClick={() => navigate("/app")}>Go to app</button>
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
                                    {/* <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link" href="#">Instructions</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-2">
                                        <a class="nav-link" href="#">FAQ</a>
                                    </li>
                                    <li class="nav-item d-flex justify-content-center pb-4">
                                        <a class="nav-link">About</a>
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
                <div class="col-md-6 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Job Application Manager. Built by Zakwan Ashfaq.</span>
                </div>

                <ul class="nav col-md-6 justify-content-end list-unstyled d-flex">
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
        <div id="features" className="features-main-container">
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Give yourself <b>the advantage</b> you deserve</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Save details to view later</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Search your records</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-sort-numeric-up-alt" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
                                <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Organize by priority</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" />
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Handy notes</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Mark records</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon feature-icon-background rounded-4 text-white d-inline-flex align-items-center justify-content-center bg-gradient p-4 fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-sort-numeric-up-alt" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Edit and modify</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Testemonials(props) {
    return (
        <div class="container-xl pb-3 pb-md-5">
            <div class="row p-2">
                <div class="col-sm-12">
                    <h2>What <b>our users</b> are saying</h2>
                    <div id="myCarousel" class="carousel slide pointer-event" data-ride="carousel">
                        {/* <!-- Carousel indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/1.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                                                    <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/2.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                                                    <p class="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/3.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                                                    <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/4.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                                                    <p class="overview"><b>Mary Saveley</b>, Web Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/5.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                                                    <p class="overview"><b>Martin Sommer</b>, UX Analyst</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <img src="/examples/images/clients/6.jpg" class="mr-3" alt="" />
                                            <div class="media-body">
                                                <div class="testimonial">
                                                    <p>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                                                    <p class="overview"><b>John Williams</b>, Web Developer</p>
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