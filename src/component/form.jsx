import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { addCloud, ADD_CLOUD } from '../redux/action/listProduct';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../config/firebase';
import { v4 } from "uuid"

const Form = () => {
    const [nama, setNama] = useState('');
    const [foto, setFoto] = useState(null);
    const [beli, setBeli] = useState('');
    const [jual, setJual] = useState('');
    const [sukses, setSukses] = useState(false);
    const [status, setStatus] = useState('');

    const dispatch = useDispatch()
    const { addProduct } = useSelector((state) => state.JobReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            // addEdit = true
            console.log("lam==", addProduct)
            dispatch(addCloud({ nama: nama, beli: beli, jual: jual, foto: foto }))
            dispatch({
                type: ADD_CLOUD,
                payload: {
                    loading: false,
                    data: false,
                }
            })
            setSukses(true)

        } catch (error) {

        }
    }
    console.log('cek: ', addProduct)

    const stora = storage;
    const uploadFoto = (e) => {
        e.preventDefault()
        if (foto == null) return;
        const imgref = ref(stora, `gambar/${foto.nama + v4()}`);
        const uploadTask = uploadBytesResumable(imgref, foto);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        setStatus("mohon menunggu")
                        break;
                }
            }, (error) => {
                setStatus("Priksa kembali format dan size file anda")
                console.log("error")
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFoto(downloadURL)
                    setStatus("Selesai")
                    console.log("url:", downloadURL)
                });
            }
        );
    }

    return (
        <div>
            <div className="mb-1 form">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nama Produk</label>
                <input
                    value={nama} onChange={(e) => {
                        setNama(e.target.value)
                    }}
                    type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nama Product" />
            </div>
            <div className="d-flex justify-content-between">
                <div className="mb-1 col-6 me-1">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Harga Jual</label>
                    <input
                        value={jual} onChange={(e) => {
                            setJual(e.target.value)
                        }}
                        type="number" className="form-control" id="exampleFormControlInput1" placeholder="Masukan harga Jual" />
                </div>
                <div className="mb-1 col-6">
                    <label htmlFor="beli" className="form-label">Harga Beli</label>
                    <input
                        value={beli} onChange={(e) => {
                            setBeli(e.target.value)
                        }}
                        type="number" className="form-control" id="beli" placeholder="Masukan harga beli" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Foto Product</label>
                <div >
                    <input onChange={(e) => {
                        setFoto(e.target.files[0])
                    }} className="form-control" type="file" id="formFile" />
                    <button className='btn btn-upload mt-3' onClick={uploadFoto}>upload</button>
                    <div class="ket" role="alert">
                        {status}
                    </div>
                </div>

            </div>
            {
                sukses ? <div className="alert alert-success" role="alert">
                   Product telah ditambahkan
                </div> : ""
            }

            <button onClick={handleSubmit} className='btn btn-dark'>Masukan Barang</button>
        </div>
    );
}

export default Form;
