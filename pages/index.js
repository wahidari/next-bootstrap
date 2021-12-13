import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import NavBarTop from '../components/NavBarTop';
import CarouselHome from '../components/CarouselHome';
import Footer from '../components/Footer';
import PostCard from "../components/PostCard";
import AgendaCard from '../components/AgendaCard';
import VideoCard from '../components/VideoCard';
import BackToTop from "../components/BackToTop";
import imageLogo from "../public/logo.png";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/autoplay";
// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// install Swiper modules
// SwiperCore.use([Autoplay]);
SwiperCore.use([Autoplay, Pagination]);

const title = "Home";

export default function Home({ posts, agendas, videos, photos }) {

    useEffect(() => {
        AOS.init();
    });

    // Take only 3 item as featured
    const featuredPost = posts.slice(0, 3);
    const featuredAgenda = agendas.slice(0, 2);
    const featuredVideo = videos.slice(0, 2);
    const featuredPhotos = photos.slice(0, 3);

    // For Image Lightbox & Carousel 
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const lightboxStyles = {
        header: (base, state) => {
            const opacity = 1;
            const transform = "translateY(10px)";
            const top = "-10";
            return { ...base, opacity, transform, top };
        },
        navigation: (base, state) => {
            const opacity = 1;
            const background = "rgba(0, 0, 0, 0.8)";
            return { ...base, opacity, background };
        },
        navigationPrev: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        navigationNext: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        footer: (base, state) => {
            const opacity = 1;
            const transform = "translateY(-10px)";
            const bottom = "-10";
            return { ...base, opacity, transform, bottom };
        }
    };

    return (
        <>
            <style jsx>
                {`
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://next-bootstrapp.vercel.app/" />
                <meta property="og:title" content="Next Bootstrap" />
                <meta property="og:description" content="Next Bootstrap" />
                <meta property="og:image" content="https://next-bootstrapp.vercel.app/metalogo.png"></meta>
            </Head>

            <NavBarTop />

            <main>

                <CarouselHome />

                {/* <!-- Start Welcome  --> */}
                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-5" data-aos="fade-up" data-aos-duration="750">
                                <div className="d-flex justify-content-center">
                                    <Image alt="Logo" src={imageLogo} height={200} width={200} />
                                </div>
                            </div>
                            <div className="col-md-7" data-aos="fade-up" data-aos-duration="1500">
                                <div className="text-center text-md-start mt-3 mt-md-0">
                                    <h3>Welcome To Our Web</h3>
                                    <p className="text-dark-secondary" id="scroll-to-statistic">
                                        Qui aliqua nostrud esse aliqua amet. Aute Lorem et aliquip Lorem consectetur consectetur non eiusmod voluptate nostrud sint Lorem laboris. Laborum eiusmod commodo nulla sunt elit Lorem et dolore aliquip exercitation.
                                    </p>
                                    <a href="#scroll-to" className="btn btn-primary shadow rounded px-3 scroll-to">See More <i className="ms-2"><FaArrowDown /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Welcome  --> */}

                <div className="container my-5 py-4" id="scroll-to">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Blog</h3>
                        <Link href="/blog">
                            <a className="text-decoration-none">All Blog
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        <Swiper className="swiper-custom"
                            spaceBetween={24}
                            slidesPerView={3}
                            breakpoints={{
                                "320": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "480": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "640": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 24
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 24
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 24
                                }
                            }}
                            autoplay={{
                                "delay": 4000,
                                "disableOnInteraction": false
                            }}
                            pagination={{
                                "clickable": true
                            }}
                            // navigation={false}
                            loop={true}
                        >
                            {posts.map(post =>
                                <SwiperSlide key={post.id}>
                                    <PostCard
                                        id={post.id}
                                        image={post.image}
                                        title={post.title}
                                        slug={post.slug}
                                        author={post.author}
                                        date={post.date}
                                        excerpt={post.excerpt} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>

                {/* <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Blog</h3>
                        <Link href="/blog">
                            <a className="text-decoration-none">All Blog
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredPost.map(post =>
                            <div className="col-sm-6 col-md-6 col-lg-4" key={post.id}>
                                <PostCard
                                    id={post.id}
                                    image={post.image}
                                    title={post.title}
                                    slug={post.slug}
                                    author={post.author}
                                    date={post.date}
                                    excerpt={post.excerpt} />
                            </div>
                        )}
                    </div>
                </div> */}

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Agenda</h3>
                        <Link href="/agenda">
                            <a className="text-decoration-none">All Agenda
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        <Swiper className="swiper-custom"
                            spaceBetween={24}
                            slidesPerView={3}
                            breakpoints={{
                                "320": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "480": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "640": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "768": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 24
                                },
                                "1024": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 24
                                }
                            }}
                            autoplay={{
                                "delay": 6000,
                                "disableOnInteraction": false
                            }}
                            pagination={{
                                "clickable": true
                            }}
                            // navigation={false}
                            loop={true}
                        >
                            {agendas.map(agenda =>
                                <SwiperSlide key={agenda.id}>
                                    <AgendaCard
                                        id={agenda.id}
                                        slug={agenda.slug}
                                        image={agenda.image}
                                        title={agenda.title}
                                        location={agenda.location}
                                        date={agenda.date}
                                        time={agenda.time} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>

                {/* <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Agenda</h3>
                        <Link href="/agenda">
                            <a className="text-decoration-none">All Agenda
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredAgenda.map(agenda =>
                            <div className="col-lg-6" key={agenda.id}>
                                <AgendaCard
                                    id={agenda.id}
                                    slug={agenda.slug}
                                    image={agenda.image}
                                    title={agenda.title}
                                    location={agenda.location}
                                    date={agenda.date}
                                    time={agenda.time} />
                            </div>
                        )}
                    </div>
                </div> */}

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Video</h3>
                        <Link href="/video">
                            <a className="text-decoration-none">All Video
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        {featuredVideo.map(video =>
                            <div className="col-md-6" key={video.title}>
                                <VideoCard title={video.title} src={video.src} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="container my-5 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">Foto</h3>
                        <Link href="/foto">
                            <a className="text-decoration-none">All Foto
                                <i className="ms-2"><FaArrowRight /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="row g-4">
                        <Gallery photos={featuredPhotos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        styles={lightboxStyles}
                                        showNavigationOnTouchDevice={true}
                                        currentIndex={currentImage}
                                        views={featuredPhotos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
    const posts = await getAllPosts.json();
    const getAllAgenda = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda`);
    const agendas = await getAllAgenda.json();
    const getAllVideo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/video`);
    const videos = await getAllVideo.json();
    const getAllPhotos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/photo`);
    const photos = await getAllPhotos.json();
    return {
        // will be passed to the page component as props
        props: { posts, agendas, videos, photos },
    };
};