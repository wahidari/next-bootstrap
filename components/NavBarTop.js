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
                                <ActiveLink activeClassName="active" href="/">
                                    <a className="nav-link">Home</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-0 ms-lg-2">
                                <ActiveLink activeClassName="active" href="/blog">
                                    <a className="nav-link">Blog</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-0 ms-lg-2">
                                <ActiveLink activeClassName="active" href="/agenda">
                                    <a className="nav-link">Agenda</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profil
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <ActiveLink activeClassName="active" href="/sejarah">
                                            <a className="nav-link ms-3 ms-md-2">Sejarah</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/struktur">
                                            <a className="nav-link ms-3 ms-md-2">Struktur</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chart
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li>
                                        <ActiveLink activeClassName="active" href="/chart">
                                            <a className="nav-link ms-3 ms-md-2">Data</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/area">
                                            <a className="nav-link ms-3 ms-md-2">Area</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Galeri
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <li>
                                        <ActiveLink activeClassName="active" href="/foto">
                                            <a className="nav-link ms-3 ms-md-2">Foto</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/video">
                                            <a className="nav-link ms-3 ms-md-2">Video</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}