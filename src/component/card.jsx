import React, { useState } from 'react';
import { deleteDoc, doc,getFirestore } from "firebase/firestore";
import Edit from './edit';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
export const EDIT_CLOUD_BTN = 'EDIT_CLOUD_BTN'

const Card = (props) => {
    const { addEdit } = useSelector((state) => state.JobReducer)
    const dispatch = useDispatch()
    
    const deleteDocdok = (e) => {
        const db = getFirestore();
        const docRef = doc(db, "product", e.target.id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              deleteDoc(docRef)
              .then(() => {
                  console.log("Entire Document has been deleted successfully.",e.target.id)
                  
              })
              .catch(error => {
                  console.log(error);
              })
            }
          })
       
    }
    const handleEdit = (e) =>{
        console.log('edit')
        let baru  = e.target.id
        dispatch({
            type: EDIT_CLOUD_BTN,
            payload: {
                loading: false,
                data: baru,
            }
        })  
        console.log('edit',baru)

    }

    return (
        <div>
            <div className="col" >
                <div className="card mx-2 ">
                    <img src={props.foto} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="harga justify-content-between">
                            <p className="card-text harga"> Harga beli: Rp.{props.jual}</p>
                            <p className="card-text-batas harga"> ||</p>
                            <p className="card-text harga"> Harga jual: Rp.{props.beli}</p>
                        </div>
                        <p className=' stok'>SISA STOK : 2</p>
                        <div className="d-flex justify-content-between">
                            < button onClick={handleEdit}  id={`${props.id}`} className="btn btn-edit btn-primary">
                                Edit
                            </button>
                            <button className="btn btn-danger btn-edit " id={`${props.id}`} onClick={deleteDocdok}> hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
