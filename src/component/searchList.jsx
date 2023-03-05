import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProdctCloud, searchDataCloud } from '../redux/action/listProduct';
import AddProdcut from './addProdcut';
import Card from './card';
import Edit from './edit';
import { motion } from 'framer-motion';

const SeacrhList = () => {
    const dispatch = useDispatch()
    const { searchProduct, addEdit, addProduct } = useSelector((state) => state.JobReducer)
    const [seachValue, setSeachValue] = useState('');
    const [add, setAdd] = useState(false);
    useEffect(() => {
        console.log("lala", searchProduct)
        const unsicribe = () => {
            dispatch(searchDataCloud())
        }
        return () => {
            unsicribe()
        };
    }, []);

    const handleOpenAdd = () => {
        setAdd(add ? false : true)
    }

    return (
        <div>
            <div className="container mt-5">
                <h1 > List Product</h1>
                <div className="col-sm-8 d-flex container mt-4">
                    <input type="text" value={seachValue}
                        onChange={(e) => {
                            let search = e.target.value
                            setSeachValue(search.toLowerCase())
                        }}
                        className="form-control" placeholder="Cari keyword yang ingin anda cari" aria-label="City" />

                </div>
                {add}
                <h3>{add ? <AddProdcut data={add} set={setAdd} /> : ''}</h3>
                {addProduct ? <Edit /> : ''}
                {addEdit ? <Edit /> : ''}
                <button className='btn-dark btn' onClick={handleOpenAdd}>Add Product</button>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}

                    className='mt-3  text-white bg-dark p-3'>
                    {searchProduct ? <div className="d-flex flex-wrap">{searchProduct.filter(product => product.namaProduk.nama.toLowerCase().includes(seachValue)).map(produk =>
                        <div

                            key={produk.id} className="wrap-col-4 col-6 col-md-4">
                            <Card id={produk.id} title={produk.namaProduk.nama} foto={produk.namaProduk.foto} jual={produk.namaProduk.jual} beli={produk.namaProduk.beli} />

                        </div>
                    )}</div>
                        : "Loading..."}
                </motion.div>
            </div>

        </div>
    );
}

export default SeacrhList;
