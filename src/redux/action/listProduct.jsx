import { child, getDatabase, set, ref, onValue, push, update } from "firebase/database";
import { addDoc, collection, doc, getDocs, setDoc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { EDIT_CLOUD_BTN } from "../../component/card";
import { db, firestore } from "../../config/firebase";
export const ADD_DATA = 'ADD_DATA'
export const GET_DATA = 'GET_DATA'
export const GET_DATA_CLOUD = 'GET_DATA_CLOUD'
export const ADD_CLOUD = 'ADD_CLOUD'
export const EDIT_CLOUD = 'EDIT_CLOUD'
export const SEARCH_CLOUD = 'SEARCH_CLOUD'
export const EDIT_DATA_CLOUD = 'EDIT_DATA_CLOUD'
export const fires = firestore


export const addCloud = (nama, beli, jual, foto) => {
  return async (dispatch) => {
    // loading 
    console.log("data loading")
    dispatch({
      type: ADD_CLOUD,
      payload: {
        loading: true,
        data: false,
        errorMassage: false
      }
    })
    // get Api 
    try {
      const getData = collection(fires, 'product')
      addDoc(getData, {
        namaProduk: nama
      })
      console.log('komponent update: ', nama)
      dispatch({
        type: ADD_CLOUD,
        payload: {
          loading: false,
          data: true,
          errorMassage: false
        }
      })

      // get Ap

    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_DATA_CLOUD,
        payload: {
          loading: false,
          data: false,
          errorMassage: error
        }
      })
    }

  }
}
export const editDataCloud = (nama, beli, jual, foto) => {
  return async (dispatch) => {
    // loading 
    console.log("data loading")
    dispatch({
      type: ADD_CLOUD,
      payload: {
        loading: true,
        data: false,
        errorMassage: false
      }
    })
    // get Api 
    try {
      const getData = collection(fires, 'product')
      update(getData, {
        namaProduk: nama
      })
      console.log('komponent update: ', nama)
      dispatch({
        type: EDIT_DATA_CLOUD,
        payload: {
          loading: false,
          data: true,
          errorMassage: false
        }
      })
      // get Ap

    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_DATA_CLOUD,
        payload: {
          loading: false,
          data: false,
          errorMassage: error
        }
      })
    }

  }
}


export const getDataProdctCloud = () => {
  return async (dispatch) => {
    // loading 
    console.log("data loading")
    dispatch({
      type: GET_DATA_CLOUD,
      payload: {
        loading: true,
        data: false,
        errorMassage: false
      }
    })
    try {
      const getData = collection(fires, 'product')
      const unsubr = await onSnapshot(getData, snapshot => {
        const datanya = snapshot.docs.map((doc) => {
          const data = doc.data()
          data.id = doc.id
          return data
        })
        console.log("Current data: olla", datanya);
        dispatch({
          type: GET_DATA_CLOUD,
          payload: {
            loading: false,
            data: datanya,
            errorMassage: false
          }
        })
      })

    } catch (error) {
      console.log("gagal")
      dispatch({
        type: GET_DATA_CLOUD,
        payload: {
          loading: false,
          data: false,
          errorMassage: error
        }
      })
    }

  }
}
export const searchDataCloud = () => {
  return async (dispatch) => {
    // loading 
    console.log("data loading")
    dispatch({
      type: SEARCH_CLOUD,
      payload: {
        loading: true,
        data: false,
        errorMassage: false
      }
    })
    try {
      const getData = collection(fires, 'product')
      const unsubr = await onSnapshot(getData, snapshot => {
        const datanya = snapshot.docs.map((doc) => {
          const data = doc.data()
          data.id = doc.id
          return data
        })
        console.log("Current data: olla", datanya);
        dispatch({
          type: SEARCH_CLOUD,
          payload: {
            loading: false,
            data: datanya,
            errorMassage: false
          }
        })
      })

    } catch (error) {
      console.log("gagal")
      dispatch({
        type: SEARCH_CLOUD,
        payload: {
          loading: false,
          data: false,
          errorMassage: error
        }
      })
    }

  }
}


export const getDataProduxt = () => {
  return (dispatch) => {
    // loading 
    console.log("data loading")
    dispatch({
      type: GET_DATA,
      payload: {
        loading: true,
        data: false,
        errorMassage: false
      }
    })
    // get Api 
    console.log("test")

    const starCountRef = ref(db, 'product/');
    onValue(starCountRef, (snapshot) => {
      const dataLama = snapshot.val();
      const data = []
      Object.keys(dataLama).map(key => {
        data.push({
          id: key,
          data: dataLama[key]
        })
      })
      dispatch({
        type: GET_DATA,
        payload: {
          loading: false,
          data: data,
          errorMassage: false
        }
      })
    });
    //  catch (error) {
    //   dispatch({
    //       type: GET_DATA,
    //       payload: {
    //           loading: false,
    //           data: false,
    //           errorMassage: error
    //       }
    //   })
    //  }

  }
}

