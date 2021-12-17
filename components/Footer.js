import Link from "next/link";
import Image from "next/image";
import imgLogo from "../public/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { webName } from "../siteIdentity";

export default function Footer() {

    return (
        <>
            <style jsx>{`
                .list-unstyled a {
                    font-size: 15px;
                    text-decoration: none;
                    color: #495057;
                }
                .list-unstyled a:hover {
                    color: #0d6efd;
                }
                .copyright {
                    color: #495057;
                    background-color: #f5f5f5;
                }
                .copyright a {
                    color: #495057;
                    text-decoration: none;
                }
                .copyright a:hover {
                    color: #0d6efd;
                }
                .text-15 {
                    font-size: 15px;
                }
                .text-18 {
                    font-size: 18px;
                }
            `}</style>

            <footer className="pt-4 mt-5 bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <Link href="/">
                                <a className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                                    <Image
                                        alt=""
                                        src={imgLogo}
                                        width="30"
                                        height="30"
                                        className="img-fluid"
                                    />
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
                                    <h4 className="mb-0 ms-2">{webName}</h4>
                                </a>
                            </Link>

                            <ul className="list-unstyled text-muted">
                                <li className="mb-2 text-15">Designed and built with all the love in the world by the <a href="/docs/5.0/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                                <li className="mb-2 small">Currently v5.0.2.</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5 className="mb-3">Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                                <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className="mb-3">Guides</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/docs/5.0/getting-started/">Getting started</a></li>
                                <li className="mb-2"><a href="/docs/5.0/examples/starter-template/">Starter template</a></li>
                                <li className="mb-2"><a href="/docs/5.0/getting-started/webpack/">Webpack</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className="mb-3">Projects</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                                <li className="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className="mb-3">Community</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                                <li className="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright pt-3 pb-3 pb-md-1 text-center text-15">
                    <div className="container d-md-flex">
                        <div className="col-md-8 my-1 text-center text-md-start">
                            <p>Copyright {" "}
                                <Link href="/">
                                    <a>Next-Bootstrap</a>
                                </Link>
                                {" "} 2021.
                            </p>
                        </div>
                        <div className="col-md-4 my-1 text-center text-md-end ">
                            <a href="#" aria-label="Facebook" className="text-white-80 mx-2 text-decoration-none text-18">
                                <FaFacebook/>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-white-80 mx-2 text-decoration-none text-18">
                                <FaTwitter/>
                            </a>
                            <a href="#" aria-label="Youtube" className="text-white-80 mx-2 text-decoration-none text-18">
                                <FaYoutube/>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white-80 mx-2 text-decoration-none text-18">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}