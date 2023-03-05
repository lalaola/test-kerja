import React, { useState } from 'react';
import Form from './form';

const AddProdcut = (props) => {
    const [close, setClose] = useState(false);
    const handleClose =()=>{
        setClose(true)
        props.set(false)
    }
    return (
       <>
        {close ? "" :  <div className='model-add' >
           
           <div className="wrap-form  col-8 mx-auto text-black container">
            <button onClick={handleClose} type="button" className="btn-close" aria-label="Close"></button>
                <h1 className='mt-3 text-center'> olla form</h1>
                <div className="col-10 mx-auto">
                <Form />
                </div>
                
           </div>
        </div>}
       </>
    );
}

export default AddProdcut;
