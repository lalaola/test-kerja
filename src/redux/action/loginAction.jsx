import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
export const GET_REGIS = 'GET_REGIS'
export const GET_LOGIN = 'GET_LOGIN'
export const GET_LOGIN_GOOGLE = 'GET_LOGIN_GOOGLE'
export const GET_REGIS_GOOGLE = 'GET_REGIS_GOOGLE'

export  const userLogin = (data) => {
    const auth = getAuth();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("3.data masuk",user)
          dispatch({
            type: GET_LOGIN,
            payload: {
                loading: false,
                data: user,
                errorMassage: false
            }
        })
          // ...
        })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error
                    }
                })
            })
    }
}
export  const googleUserRegis = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_REGIS_GOOGLE,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            dispatch({
                type: GET_REGIS_GOOGLE,
                payload: {
                    loading: false,
                    data: user,
                    errorMassage: false
                }
            })
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_LOGIN_GOOGLE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error
                    }
                })
            })
    }
}
export  const googleUserLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_LOGIN_GOOGLE,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log('3. loading masuk action',user)
            dispatch({
                type: GET_LOGIN_GOOGLE,
                payload: {
                    loading: false,
                    data: true,
                    errorMassage: false
                }
            })
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_LOGIN_GOOGLE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error
                    }
                })
            })
    }
}
export  const userRegis = (data) => {
    const auth = getAuth();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_REGIS,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        createUserWithEmailAndPassword(auth, data.email, data.password,data.displayName)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("3.data masuk")
          dispatch({
            type: GET_REGIS,
            payload: {
                loading: false,
                data: user,
                errorMassage: false
            }
        })
          // ...
        })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_REGIS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error
                    }
                })
            })
    }
}


