import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/desa.png";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Sejarah";

export default function Blog({ posts }) {
    return (
        <>
            <style jsx>
                {`
                .maps {
                    height: 450px;
                }
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBarTop />

            <main>

                <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Sejarah Singkat</h3>
                            <Image 
                            src={imgDesa} 
                            alt="Desa" 
                            className="img-fluid rounded my-3"/>
                            <h5 className="mt-3">Uraian Singkat Profil Desa</h5>
                            <p className="text-dark-secondary">Desa Alang Alang merupakan Desa yang terletak di dataran rendah
                                yang sebelah selatannya terdapat Selat Madura, tinggi dari permukaan Pantai yaitu 2 M.
                                Selain
                                itu Desa Alang Alang memiliki Luas 113,48 Ha. Jarak tempuh dari Desa menuju Kantor Kecamatan
                                yaitu 2 KM.
                                Desa Alang Alang terdiri dari 7 dusun, 7 RW dan 32 Rt dengan jumlah penduduk sebanyak 6.506
                                Jiwa,
                                dengan rincian Laki-laki 3.178 jiwa dan perempuan 3.328 jiwa.</p>
                            <p className="text-dark-secondary">Alang-Alang adalah salah satu Desa yang terletak di wilayah
                                Kecamatan Tragah, Kabupaten Bangkalan, Provinsi Jawa
                                Timur, Indonesia. Desa alang-alang adalah Desa pintar pertama yang ada di Kabupaten
                                Bangkalan Dengan nama Smart
                                Village.</p>
                        </div>
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Peta Desa</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.455090103667!2d112.79724777055887!3d-7.112812075156755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd803520aa0f37b%3A0x1fc57e0b1c733c31!2sAlang%20Alang%2C%20Tragah%2C%20Bangkalan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1638032459681!5m2!1sen!2sid"
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Peta Geospatial</h3>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wx6-ec1QkUOTUYMywqIi6z-Q7W5GutsC"
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Visi Dan Misi</h3>
                            <h5>Visi</h5>
                            <p className ="text-dark-secondary">“ Terwujudnya Desa Alang Alang sebagai Desa yang Mandiri melalui Pengembangan Ekonomi Berbasis Potensi Sumber Daya Alam untuk mencapai masyarakat makmur dan agamis ”</p>
                            <h5>Misi</h5>
                            <p className ="text-dark-secondary mb-2">1. Mewujudkan dan mengembangkan kegiatan keagamaan untuk menambah keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa.</p>
                            <p className ="text-dark-secondary mb-2">2. Mewujudkan dan mendorong terjadinya usaha-usaha kerukunan antar dan intern warga masyarakat yang disebabkan karena adanya perbedaan agama, keyakinan, organisasi, dan lainnya dalam suasana saling menghargai dan menghormati.</p>
                            <p className ="text-dark-secondary mb-2">3. Membangun dan meningkatkan hasil perkebunan dengan jalan penataan pengairan dan pemupukan.</p>
                            <p className ="text-dark-secondary mb-2">4. Menata Pemerintahan Desa Alang Alang yang kompak dan bertanggung jawab dalam mengemban amanat masyarakat.</p>
                            <p className ="text-dark-secondary mb-2">5. Meningkatkan pelayanan masyarakat secara terpadu dan serius.</p>
                            <p className ="text-dark-secondary mb-2">6. Membangun dan mendorong majunya bidang pendidikan baik formal maupun informal yang mudah diakses dan dinikmati seluruh warga masyarakat tanpa terkecuali yang mampu menghasilkan insan intelektual, inovatif dan enterpreneur (wirausahawan).</p>
                            <p className ="text-dark-secondary mb-2">7. Meningkatkan SDM masyarakat agat lebih mampu dalam mengakses Computer dan Internet.</p>
                            <p className ="text-dark-secondary mb-2">8. Meningkatkan kesehatan masyarakat</p>
                        </div>
				    </div>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
// export async function getServerSideProps() {
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// };