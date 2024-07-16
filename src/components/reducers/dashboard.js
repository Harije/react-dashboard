const initialState ={
    productslist : []
} 

const DashboardReducer = (state = initialState,action) =>{
    console.log("---------DashboardReducer-----",action);
    switch(action.type){
        case 'GET_PRODUCTS_LIST':
            // return {productslist: state.productslist};
            return {...state, productslist:action.payload.products};
        case 'ACTIVE_PRODUCTS_LIST':
            return {productslist: state.productslist}; 
        default:
            return state;      
    }
}

export default DashboardReducer;