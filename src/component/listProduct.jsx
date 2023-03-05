import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getDataProdctCloud } from '../redux/action/listProduct';
import AddProdcut from './addProdcut';
import Card from './card';
import Edit from './edit';

const ListProduct = () => {
    
    const dispatch = useDispatch()
    const { getProductCloud ,addEdit,addProduct,seachValue} = useSelector((state) => state.JobReducer)
    const [add, setAdd] = useState(false);    
    useEffect(() => {
        const unsicribe = () =>{
            dispatch(getDataProdctCloud())
        } 
        return () => {
            unsicribe()
        };
    }, []);
    const handleOpenAdd = () =>{
        setAdd(add ? false : true)
    }

    const changeSeacrh = (e) =>{
        setSearch(e.target.value)
        console.log(search)

    }
    const [search, setSearch] = useState();
    return (
        <div>
            <div className="container mt-5">
                <h1 > List Product</h1>
                <input type="text" value={search} onChange={changeSeacrh}/>
                {add}
                <h3>{add ? <AddProdcut data={add} set={setAdd}/>: ''}</h3>
                {addProduct ? <Edit/> :  ''}
                {addEdit ? <Edit/> :  ''}
                <button className='btn-dark btn' onClick={handleOpenAdd}>Add Product</button>
                <div className='mt-3  text-white bg-dark p-3'>
                   {getProductCloud ? <div  className="d-flex flex-wrap">{getProductCloud.map(produk =>
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

export default ListProduct;
