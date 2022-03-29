class MenuBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<nav class="nav navbar sticky-top navbar-expand-lg navbar-light bg-light fixed-top wow slideInDown" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <h3>Clinical QR Kit</h3>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="index.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Home
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="index.html#abstract">
                                    Abstract
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="index.html#video">
                                    Project Video
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="index.html#team">
                                    Meet the Team
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="index.html#management">
                                    Project Management
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="requirements.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Requirements
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#background">
                                    Project Background
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#goals">
                                    Project Goals
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#gathering">
                                    User Interviews
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#personas">
                                    Personas
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#usecases">
                                    Use Cases
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="requirements.html#moscow">
                                    MoSCoW List
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="research.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Research
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="research.html#relatedProjects">
                                    Related Projects
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="research.html#techreview">
                                    Technology Review
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="research.html#references">
                                    References
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="hci.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            HCI
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="hci.html#principles">
                                    Design Principles
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="hci.html#sketches">
                                    Sketches
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="hci.html#wireframes">
                                    Wireframes
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="system.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            System Design
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="system.html#architecture">
                                    System Architecture
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="system.html#sitemap">
                                    Site Map
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="system.html#dataStorage">
                                    Data Storage
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="system.html#packages">
                                    Packages and API
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="implementation.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Implementation
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="implementation.html#login">
                                    Login System
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="implementation.html#users">
                                    User Types
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="implementation.html#equipment">
                                    Equipment Management
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="implementation.html#sharing">
                                    Sharing System
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="implementation.html#report">
                                    Report System
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="testing.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Testing
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="testing.html#strategy">
                                    Testing Strategy
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="testing.html#unit">
                                    Unit and Integration Testing
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="testing.html#responsive">
                                    Responsive Design Testing
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="testing.html#acceptance">
                                    User Acceptance Testing
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="evaluation.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Evaluation
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="evaluation.html#summary">
                                    Achievement Summary
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="evaluation.html#critical">
                                    Critical Evaluation
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="evaluation.html#future">
                                    Future Work
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="appendices.html"
                            id="navbarDropdown"
                            role="button"
                            
                            aria-expanded="false"
                        >
                            Appendices
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="appendices.html#user">
                                    User Manual
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="appendices.html#deployment">
                                    Deployment Manual
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="appendices.html#legal">
                                    Legal Issues and Processes
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="appendices.html#blog">
                                    Development Blog
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item scroll-to-section"  href="appendices.html#videos">
                                    Monthly Videos
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    }
}

customElements.define("menubar-component", MenuBar);
