import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SeacrhList from '../component/searchList';
import { searchDataCloud } from '../redux/action/listProduct';
import { motion } from 'framer-motion';


const Search = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('test masuk')
        dispatch(searchDataCloud())
    }, [searchDataCloud]);

    return (
        <motion.div
        initial={{opacity: 0 }}
        animate={{ opacity :1}}
        >
           
            <SeacrhList/>
        </motion.div>
    );
}

export default Search;
