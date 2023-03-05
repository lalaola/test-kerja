import React, { useState } from 'react';
import { firestore, storage } from '../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_CLOUD_BTN } from './card';
import { collection, doc, updateDoc } from 'firebase/firestore';

// export const EDIT_PRODUCT = "EDIT_PRODUCT"
const Edit = () => {
    const [nama, setNama] = useState('');
    const [mohon, setMohon] = useState('');
    const [foto, setFoto] = useState('');
    const [beli, setBeli] = useState('');
    const [jual, setJual] = useState('');
    const dispatch = useDispatch()
    const { addEdit } = useSelector((state) => state.JobReducer)

    console.log(foto)

    const handleSubmit = () => {
        // EDIT_PRODUCT
        alert('edit')
        const db = firestore;
        try {
            updateDoc(doc(db, "product", addEdit), {
                namaProduk: { beli: beli, jual: jual, nama: nama, foto: foto }
            });
            dispatch({
                type: EDIT_CLOUD_BTN,
                payload: {
                    loading: false,
                    data: false,
                }
            })
        } catch (error) {

        }

    }

    const handleClose = () => {
        dispatch({
            type: EDIT_CLOUD_BTN,
            payload: {
                loading: false,
                data: false,
            }
        })
    }

    const stora = storage;
    const uploadFoto = (e) => {
        e.preventDefault()
        if (foto == null) return;
        const imgref = ref(stora, `gambar/${foto.nama + v4()}`);
        const uploadTask = uploadBytesResumable(imgref, foto);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        setMohon('mohon mennungg sedang mengupload')
                        break;
                }
            }, (error) => {
                setMohon('priksa kembali ')
                console.log("mohon cek kembali")
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFoto(downloadURL)
                    console.log("url:", downloadURL)
                    setMohon('')
                });
            }
        );
    }


    return (
        <div className='edit'>
            <div className='wrap-form col-8 mx-auto text-black container'>
                <button type="button" onClick={handleClose} className="btn-close" aria-label="Close"></button>
                <h1 className='mt-3 text-center'> Edit olla form</h1>
                <div className="col-10 mx-auto">
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

                            <div class="keterangan" role="alert">
                                {mohon}
                            </div>
                        </div>

                    </div>

                    <button onClick={handleSubmit} className='btn btn-dark'>Update Barang</button>
                </div>
            </div>
        </div>
    );
}

export default Edit;
