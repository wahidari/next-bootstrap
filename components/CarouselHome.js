import Image from "next/image"

export default function CarouselHome() {

    return (
        <>
            <style jsx>{`
                .carousel-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 98%;
                    background-color: rgba(0, 0, 0, 0.4);
                }
            `}</style>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            alt="Carousel"
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                            width="1400"
                            height="700"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Carousel"
                            src="https://cdn.pixabay.com/photo/2021/12/05/10/28/nature-6847175_960_720.jpg"
                            width="1400"
                            height="700"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}