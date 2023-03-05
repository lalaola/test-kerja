import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListProduct from '../component/listProduct';
import Navbar from '../component/navbar';
import { getDataProdctCloud } from '../redux/action/listProduct';

const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const unsicribe = () =>{
            dispatch(getDataProdctCloud())
        } 
        return () => {
            unsicribe()
        };
    }, []);
    return (
        <div>
            
            <ListProduct/>
        </div>
    );
}

export default ProductList;
