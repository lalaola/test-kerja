import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getDataProdctCloud, searchDataCloud } from '../redux/action/listProduct';
import AddProdcut from './addProdcut';
import Card from './card';
import Edit from './edit';

const SeacrhList = () => {
    const dispatch = useDispatch()
    const { searchProduct ,addEdit,addProduct} = useSelector((state) => state.JobReducer)
    const [seachValue, setSeachValue] = useState('');
    const [add, setAdd] = useState(false);    
    let search
    useEffect(() => {
        console.log("lala",searchProduct)
        const unsicribe = () =>{
            dispatch(searchDataCloud())
        } 
        return () => {
            unsicribe()
        };
    }, []);
    const handleSearch = () =>{
        console.log(seachValue, searchProduct)
        search = searchProduct.filter(produk=>produk.namaProduk.nama.includes(seachValue))
        console.log('hasil: ', search )
    }
    const handleOpenAdd = () =>{
        setAdd(add ? false : true)
    }

    return (
        <div>
            <div className="container mt-5">
                <h1 > List Product</h1>
                <div className="col-sm-8 d-flex container mt-4">
                    <input type="text" value={seachValue}
                    onChange={(e)=>{
                        setSeachValue(e.target.value)
                    }}
                    className="form-control" placeholder="Cari keyword yang ingin anda cari" aria-label="City" />
            
                </div>
                {add}
                <h3>{add ? <AddProdcut data={add} set={setAdd}/>: ''}</h3>
                {addProduct ? <Edit/> :  ''}
                {addEdit ? <Edit/> :  ''}
                <button className='btn-dark btn' onClick={handleOpenAdd}>Add Product</button>
                <div className='mt-3  text-white bg-dark p-3'>
                   {searchProduct ? <div  className="d-flex flex-wrap">{searchProduct.filter(product => product.namaProduk.nama.toLowerCase().includes(seachValue)).map(produk =>
                        <div key={produk.id}  className="wrap-col-4 col-6 col-md-4">
                             <Card  id={produk.id} title={produk.namaProduk.nama} foto={produk.namaProduk.foto} jual={produk.namaProduk.jual} beli={produk.namaProduk.beli}/>
                           
                        </div>
                    )}</div>
                        : "Loading..."}
                </div>
            </div>

        </div>
    );
}

export default SeacrhList;
