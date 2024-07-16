import axios from "axios";

export function AC_GET_PRODUCTS_LIST(){
    return function(dispatch) {
        return axios.get("https://dummyjson.com/products")
          .then(({ data }) => {
           dispatch(sendProductList(data));
        });
      };
}

function sendProductList(data){
    return{
        type:"GET_PRODUCTS_LIST",
        payload:data
    }
}

export function AC_GET_ACTIVE_PRODUCTS_LIST(){
    return{
        type:"ACTIVE_PRODUCTS_LIST",
        payload:""
    }
}