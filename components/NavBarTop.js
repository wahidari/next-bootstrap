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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        {/* <hr className="d-lg-none mt-2 mb-0"></hr> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-0 ms-lg-2 mt-2 mt-lg-0">
                                <ActiveLink activeClassName="active" href="/">
                                    <a className="nav-link">Home</a>
                                </ActiveLink>
                            </li>
                            {/* <hr className="d-lg-none my-1"></hr> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="profilDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profil
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="profilDropdown">
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
                                <a className="nav-link dropdown-toggle" href="#" id="informasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Informasi
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="informasiDropdown">
                                    <li>
                                        <ActiveLink activeClassName="active" href="/blog">
                                            <a className="nav-link ms-3 ms-md-2">Blog</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/agenda">
                                            <a className="nav-link ms-3 ms-md-2">Agenda</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="chartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Demografis
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="chartDropdown">
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
                                <a className="nav-link dropdown-toggle" href="#" id="galeriDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Galeri
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="galeriDropdown">
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
                            <li className="nav-item ms-0 ms-lg-2">
                                <ActiveLink activeClassName="active" href="/bumdes">
                                    <a className="nav-link">Bumdes</a>
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}