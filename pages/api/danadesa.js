// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const danadesa = {
    "pendapatan": [
        {
            "nama": "Dana Desa",
            "anggaran": "10.500.000",
            "realisasi": "10.000.000",
            "selisih": "500.000",
            "presentase": "54.0"
        }
    ],
    "belanja": [
        {
            "nama": "Bidang Pelaksanaan Pembangunan Desa",
            "anggaran": "1.100.000",
            "realisasi": "1.000.000",
            "selisih": "100.000",
            "presentase": "50.0"
        },
        {
            "nama": "Bidang Pemberdayaan Masyarakat",
            "anggaran": "2.100.000",
            "realisasi": "2.000.000",
            "selisih": "100.000",
            "presentase": "50.0"
        },
        {
            "nama": "Bidang Penanggulangan Bencana Desa",
            "anggaran": "3.100.000",
            "realisasi": "3.000.000",
            "selisih": "100.000",
            "presentase": "50.0"
        }
    ],
    "pembiayaan": [
        {
            "nama": "Pengeluaran Pembiayaan	",
            "anggaran": "4.100.000",
            "realisasi": "4.000.000",
            "selisih": "100.000",
            "presentase": "54.0"
        }
    ],
};

export default function allHandler(req, res) {
    res.status(200).json(danadesa);
};

