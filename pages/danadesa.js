import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );

const title = "Dana Desa";
const colors = ["#36b9cc", "#1cc88a", "#6f42c1", "#e74a3b", "#fd7e14", "#f6c23e"];

export default function DanaDesa({ danadesa }) {

    // const dataGender = populateData(gender);
    // const [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal] = getTotalData(covid);
    console.log(danadesa);
    
    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
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
                <div className="bg-light">
                    <Breadcrumb pageName="Covid-19" currentPage="Covid-19" />
                </div>

                <div className="container my-5">
                    <h5 className="mt-5 mb-4">Tabel Sebaran Covid-19</h5>
                    <div className="table-responsive mt-3">
                        <table id="tabel-sebaran" className="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Kecamatan</th>
                                    <th>Konfirmasi</th>
                                    <th>Aktif</th>
                                    <th>Sembuh</th>
                                    <th>Meninggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {covid.dataKecamatan.map(item => 
                                    <tr key={item.id}>
                                        <td>{item.kecamatan}</td>
                                        <td>{item.konfirmasi}</td>
                                        <td>{item.aktif}</td>
                                        <td>{item.sembuh}</td>
                                        <td>{item.meninggal}</td>
                                    </tr>
                                )} */}
                                <tr>
                                    <td className="text-center fw-bold">Jumlah</td>
                                    {/* <td className="text-center fw-bold">{totalKonfirmasi}</td>
                                    <td className="text-center fw-bold">{totalAktif}</td>
                                    <td className="text-center fw-bold">{totalSembuh}</td>
                                    <td className="text-center fw-bold">{totalMeninggal}</td> */}
                                </tr>
                            </tbody>
                        </table>
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
    const getDataDanaDesa = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/danadesa`);
    const danadesa = await getDataDanaDesa.json();
    return {
        props: { danadesa: danadesa }, // will be passed to the page component as props
    };
};

// Populate Data for ChartJS 
function populateData(param) {
    const labels = [];
    const totals = [];
    param.map(item =>
        labels.push(item.name)
    );
    param.map(item =>
        totals.push(item.total)
    );
    const data = {
        labels: labels,
        datasets: [{
            data: totals,
            backgroundColor: colors
        }]
    };
    return (data);
}

// Count each row value for total row
function getTotalData(param) {
    const konfirmasi = [], aktif = [], sembuh = [], meninggal = [];
    let totalKonfirmasi = 0, totalAktif = 0, totalSembuh = 0, totalMeninggal = 0;
    param.dataKecamatan.map(item =>
        konfirmasi.push(item.konfirmasi)
    );
    param.dataKecamatan.map(item =>
        aktif.push(item.aktif)
    );
    param.dataKecamatan.map(item =>
        sembuh.push(item.sembuh)
    );
    param.dataKecamatan.map(item =>
        meninggal.push(item.meninggal)
    );

    for (let index = 0; index < konfirmasi.length; index++) {
        totalKonfirmasi += parseInt(konfirmasi[index]);
        totalAktif += parseInt(aktif[index]);
        totalSembuh += parseInt(sembuh[index]);
        totalMeninggal += parseInt(meninggal[index]);
    }

    return [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal];
}