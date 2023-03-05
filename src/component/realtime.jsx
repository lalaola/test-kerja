import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firestore } from '../config/firebase';

const Realtime = () => {
    const [barang, setBarang] = useState([]);
    const fires = firestore
    const getData = collection(fires, 'product')
    useEffect(() => {
       const unsicribe = onSnapshot(getData,snapshot =>{
            setBarang(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
        })
        return () => {
            unsicribe()
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default Realtime;
