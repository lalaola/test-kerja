import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SeacrhList from '../component/searchList';
import { searchDataCloud } from '../redux/action/listProduct';

const Search = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        console.log('test masuk')
        dispatch(searchDataCloud())
    }, [searchDataCloud]);

    return (
        <div>
           
            <SeacrhList/>
        </div>
    );
}

export default Search;
