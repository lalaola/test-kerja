import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduxt, writeUserData } from '../redux/action/listProduct';

const Product = () => {
    const [nama, setName] = useState('');
    const [hargaBeli, setBeli] = useState('');
    const [hargaJual, setJual] = useState('');
    const [foto, setFoto] = useState('');
    const [stokBarang, setStokBarang] = useState('');
    const dispatch = useDispatch()
    const { getProduct, addProduct } = useSelector((state) => state.JobReducer)
    console.log('hai: ',getProduct)
    
    const handleUpdate =  (e) => {
        e.preventDefault()          
        // export const writeUserData = (name,stokBarang,hargaBeli,hargaJual,foto) =>{
        dispatch(writeUserData({ nama: nama, stokBarang: stokBarang, hargaBeli: hargaBeli, hargaJual: hargaJual, foto: foto }))
    }
    console.log("After lo :", getProduct)

    useEffect(() => {
        dispatch(getDataProduxt())
        console.log("adalah lo :", getProduct)
    }, [getDataProduxt])
    return (
        <div >
            <div className="container mt-4">
                product List
                <div className="form mt-4">
                    <div className="form-floating mb-3">
                        <input type="text"
                            onChange={((e) => {
                                setName(e.target.value)
                            })}
                            className="form-control" id="floatingInput" placeholder="name@example.com" value={nama} />
                        <label htmlFor="floatingInput">Nama Barang</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                            onChange={((e) => {
                                setBeli(e.target.value)
                            })}
                            className="form-control" id="beli" placeholder="Harga Beli" value={hargaBeli} />
                        <label htmlFor="beli">Harga Beli</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                            onChange={((e) => {
                                setStokBarang(e.target.value)
                            })}
                            className="form-control" id="jual" placeholder="Stok Barang" value={stokBarang} />
                        <label htmlFor="jual">Stok Barang</label>
                    </div>
                    <div className="form-floating">
                        <input type="file"
                            onChange={((e) => {
                                setFoto(e.target.value)
                            })}
                            className="form-control" id="foto" placeholder="nama" value={foto} />
                        <label htmlFor="foto" >Foto</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                            onChange={((e) => {
                                setJual(e.target.value)
                            })}
                            className="form-control" id="jual" placeholder="nama" value={hargaJual} />
                        <label htmlFor="jual">Jual</label>
                    </div>
                    <button onClick={handleUpdate}>submit</button>
                </div>
                {
                   getProduct ?  getProduct.map(produk=>{
                    return(
                        <div id={produk.id}>
                            <p>{produk.data.name.nama}</p>
                        </div>
                    )
                }) : "kosong"
                }
            </div>
        </div>
    );
}

export default Product;
