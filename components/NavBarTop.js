import Image from "next/image"
import Link from "next/link"
import imgLogo from "../public/logo.png"
import ActiveLink from './ActiveLink'
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { webName } from "../siteIdentity";

export default function NavBarTop() {
    // console.log("lala "+process.env.NAMA_DESA);
    const [isFixedNavbar, setFixedNavbar] = useState("false");
    
    useEffect(() => {
        setFixedNavbar(false);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 35) {
                setFixedNavbar(true);
            } else {
                setFixedNavbar(false);
            }
        });
    }, []);

    return (
        <>
            <style jsx>
                {`
                    .nav-item a.active {
                        color: #0d6efd;
                    }
                    .text-14 {
                        font-size: 14px !important;
                    }
                `}
            </style>
            <div className="d-none d-md-block bg-light py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-8">
                            <div className="">
                                <a href="#" className="text-decoration-none text-14 text-black-50">
                                    <i className="me-2"><FaPhoneAlt /></i>
                                    08123456789
                                </a>
                                <span className="mx-2 text-black-50">|</span>
                                <a href="#" className="text-decoration-none text-14 text-black-50">
                                    <i className="me-2"><FaRegEnvelope /></i>
                                    admin@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-4">
                            <div className="float-end">
                                <a href="#" className="mx-2 text-black-50" aria-label="Facebook">
                                    <i className=""><FaFacebook/></i>
                                </a>
                                <a href="#" className="mx-2 text-black-50" aria-label="Twitter">
                                    <i className=""><FaTwitter/></i>
                                </a>
                                <a href="#" className="mx-2 text-black-50" aria-label="Youtube">
                                    <i className=""><FaYoutube/></i>
                                </a>
                                <a href="#" className="mx-2 text-black-50" aria-label="Instagram">
                                    <i className=""><FaInstagram/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={`navbar navbar-expand-xl navbar-light bg-white shadow-sm ${isFixedNavbar ? "fixed-top" : ""}`}>
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
                            <h5 className="ms-2 my-0">{webName}</h5>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        {/* <hr className="d-lg-none mt-2 mb-0"></hr> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-2 mt-xl-0 ms-lg-1">
                                <ActiveLink activeClassName="active" href="/">
                                    <a className="nav-link">Home</a>
                                </ActiveLink>
                            </li>
                            {/* <hr className="d-lg-none my-1"></hr> */}
                            <li className="nav-item dropdown ms-lg-1">
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
                                        <ActiveLink activeClassName="active" href="/visimisi">
                                            <a className="nav-link ms-3 ms-md-2">Visi Misi</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/struktur">
                                            <a className="nav-link ms-3 ms-md-2">Struktur</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-1">
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
                            <li className="nav-item dropdown ms-lg-1">
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
                            <li className="nav-item dropdown ms-lg-1">
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
                            <li className="nav-item ms-lg-1">
                                <ActiveLink activeClassName="active" href="/bumdes">
                                    <a className="nav-link">Bumdes</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-lg-1">
                                <ActiveLink activeClassName="active" href="/covid">
                                    <a className="nav-link">Covid-19</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-lg-1">
                                <ActiveLink activeClassName="active" href="/danadesa">
                                    <a className="nav-link">Dana Desa</a>
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}