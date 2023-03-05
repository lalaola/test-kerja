import axios from "axios";

export const GET_LIST_JOB = 'GET_LIST_JOB'
export const SEARCH_LIST_JOB = 'SEARCH_LIST_JOB'
export const FIND_JOB_LIST = 'FIND_JOB_LIST'
export const DETAIL_JOB_LIST = 'DETAIL_JOB_LIST'

export  const jobList = () => {
    return (dispatch) => {
        // loading 
        console.log('2. loading masuk action')
        dispatch({
            type: GET_LIST_JOB,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        axios({
            method: 'GET',
            url: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
            timeout: 120000
        })
            .then((Response) => {
                // berhasil
                console.log("3. data berhasil masuk",Response.data)
                dispatch({
                    type: GET_LIST_JOB,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal")
                dispatch({
                    type: GET_LIST_JOB,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
export  const searchJobList = (data) => {
    return (dispatch) => {
        // loading 
        dispatch({
            type: SEARCH_LIST_JOB,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        console.log(data)
        axios({
            method: 'GET',
            url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${data.description}&location=${data.location}&type=${data.type}`,
            timeout: 120000
        })
            .then((Response) => {
                // berhasil
                console.log("3. data berhasil masuk",Response.data)
                dispatch({
                    type: SEARCH_LIST_JOB,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal")
                dispatch({
                    type: SEARCH_LIST_JOB,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
export  const findJobList = (data) => {
    return (dispatch) => {
        // loading 
        dispatch({
            type: FIND_JOB_LIST,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        axios({
            method: 'GET',
            url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${data.description}&location=${data.location}&type=${data.type}`,
            timeout: 120000
        })
            .then((Response) => {
                // berhasil
                console.log("3. data berhasil masuk")
                dispatch({
                    type: FIND_JOB_LIST,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal")
                dispatch({
                    type: FIND_JOB_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
export  const detailJobList = (data) => {
    return (dispatch) => {
        // loading 
        dispatch({
            type: DETAIL_JOB_LIST,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        axios({
            method: 'GET',
            url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${data}`,
            timeout: 120000
        })
            .then((Response) => {
                dispatch({
                    type: DETAIL_JOB_LIST,
                    payload: {
                        loading: false,
                        data: Response.data,
                        errorMassage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal")
                dispatch({
                    type: DETAIL_JOB_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
