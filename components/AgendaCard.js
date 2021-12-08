import Image from "next/image"
import Link from "next/link"
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function AgendaCard({ id, slug, image, title, location, date, time }) {

    return (
        <>
            <style jsx>{`
                .card-link:hover {
                    transition: box-shadow 0.5s ease; /* Animation */
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
                    transition: all 0.7s ease-out;
                }
                .card-link:hover .card-title {
                    color: #0d6efd;
                    transition: color 0.7s ease-out;
                }
                .card-title h5 {
                    text-decoration: none;
                    font-weight: 500;
                }
                .shadow-card {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                .card-text {
                    color: #495057;
                    font-size: 15px;
                }
            `}</style>

            <article className="card h-100 card-link shadow-card agenda border-0">
                <div className="row g-0">
                    <div className="col-sm-4 d-flex align-items-center">
                        <Image
                            alt="Agenda Image"
                            src={image}
                            width="200"
                            height="160"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title mb-3">{title}</h5>
                            <Link href={`/agenda/${slug}`}>
                                <a className="stretched-link"></a>
                            </Link>
                            <hr />
                            <div className="d-flex mb-3">
                                <FaRegCalendarAlt />
                                <small className="text-muted ms-2">{time} - {date}</small>
                            </div>
                            <div className="d-flex">
                                <FaMapMarkerAlt />
                                <small className="text-muted ms-2">{location}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}