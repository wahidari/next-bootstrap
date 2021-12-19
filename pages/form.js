import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import PostCard from "../components/PostCard";
import BackToTop from "../components/BackToTop";
import { useRouter } from 'next/router'

const title = "Form";

export default function Form({identity}) {
    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();
        let namaDesa = event.target.namaDesa.value;
        let namaKecamatan = event.target.namaKecamatan.value;
        localStorage.setItem("namaDesa", namaDesa);
        localStorage.setItem("namaKecamatan", namaKecamatan);
        router.push("/");
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
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Form" currentPage="Form" />
                </div>

                <div className="container my-5">
                    <form className="mx-auto col-7" onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="namaDesa" className="form-label">Nama Desa</label>
                            <input type="text" className="form-control" id="namaDesa" aria-describedby="namaDesa" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="namaKecamatan" className="form-label">Nama Kecamatan</label>
                            <input type="text" className="form-control" id="namaKecamatan" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
// export async function getServerSideProps() {
//     const getSiteIdentity = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/identity`);
//     const identity = await getSiteIdentity.json();
//     console.log(identity)
//     return {
//         props: { identity }, // will be passed to the page component as props
//     };
// };