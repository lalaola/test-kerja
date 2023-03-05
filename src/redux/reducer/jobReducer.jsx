import { EDIT_CLOUD_BTN } from "../../component/card";
import { DETAIL_JOB_LIST, GET_LIST_JOB, SEARCH_LIST_JOB } from "../action/jobAction";
import { ADD_CLOUD, ADD_DATA, EDIT_CLOUD, GET_DATA, GET_DATA_CLOUD, SEARCH_CLOUD } from "../action/listProduct";

const innitialState ={
    addProduct : false,
    addProductLoading : false,
    addProductError : false,
    
    searchProduct : false,
    searchProductLoading : false,
    searchProductError : false,

    getProduct : false,
    getProductLoading : false,
    getProductError : false,
   
    getProductCloud : false,
    getProductCloudLoading : false,
    getProductCloudError : false,
   
    searchListJob : false,
    searchListJobLoading : false,
    searchListJobError : false,

    addEdit: false,
    
    detailListJob : false,
    detailListJobLoading : false,
    detailListJobError : false,

}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case EDIT_CLOUD_BTN :
            return {
                ...state,
                addEdit : action.payload.data
            }
        case GET_DATA_CLOUD :
            return {
                ...state,
                getProductCloud : action.payload.data,
                getroductCloudLoading : action.payload.loading,
                getroductCloudError : action.payload.errorMassage
               
            }
        case SEARCH_CLOUD :
            return {
                ...state,
                searchProduct : action.payload.data,
                gsearchProductLoading : action.payload.loading,
                gsearchProductError : action.payload.errorMassage
               
            }
        case GET_DATA :
            return {
                ...state,
                getProduct : action.payload.data,
                getroductLoading : action.payload.loading,
                getroductError : action.payload.errorMassage
               
            }
        case GET_DATA :
            return {
                ...state,
                getProduct : action.payload.data,
                getroductLoading : action.payload.loading,
                getroductError : action.payload.errorMassage
               
            }
        case ADD_CLOUD :
            return {
                ...state,
                addProduct : action.payload.data,
                addProductLoading : action.payload.loading,
                addProductError : action.payload.errorMassage

            }
        default:
            return state;
    }
}

export default job