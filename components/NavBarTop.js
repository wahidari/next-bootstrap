import Image from "next/image"
import Link from "next/link"
import imgLogo from "../public/logo.png"
import ActiveLink from './ActiveLink'

export default function NavBarTop() {

    return (
        <>
            <style jsx>
                {`
                    .nav-item a.active {
                        color: #0d6efd;
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex align-items-center">
                            <Image
                                alt="logo"
                                src={imgLogo}
                                height="30"
                                width="30"
                                className="img-fluid"
                            />{" "}
                            <h5 className="ms-2 my-0">Next-Bootstrap</h5>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-0 ms-lg-2 mt-3 mt-md-0">
                                <ActiveLink activeClassName="active" href="/" passHref>
                                    <a className="nav-link">Home</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-0 ms-lg-2">
                                <ActiveLink activeClassName="active" href="/blog" passHref>
                                    <a className="nav-link">Blog</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-0 ms-lg-2">
                                <ActiveLink activeClassName="active" href="/agenda" passHref>
                                    <a className="nav-link">Agenda</a>
                                </ActiveLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}