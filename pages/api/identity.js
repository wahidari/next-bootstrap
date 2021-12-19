
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let namaDesa = "Alang Alang"; 
let namaKecamatan = "Tragah";

let identity = 
    { "namaDesa": namaDesa, "namaKecamatan": namaKecamatan}
;

export default function allHandler(req, res) {
    if (req.method === 'POST') {
        namaDesa = req.body.namaDesa ;
        namaKecamatan = req.body.namaKecamatan;
        identity.namaDesa = namaDesa
        identity.namaKecamatan = namaKecamatan
        // console.log(identity)
        res.status(200).json(identity);
    } else {
        res.status(200).json(identity);
    }
};

