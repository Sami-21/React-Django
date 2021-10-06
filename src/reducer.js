export const initialState ={
    client:{       
    },
    cart:[],
    categories:[]
}
/////////////////////////////////////////////////////////////////////////////

export const cartTotal = (cart) =>
cart?.reduce((amount, item) => item.price*item.quantity + amount, 0);

/////////////////////////////////////////////////////////////////////////////
export const categoriesNumber = (data , categories=[]) => {
    data.forEach(element => {
        if(categories.includes(element.category)===false){
            categories.unshift(element.category)
        }
    });
    return categories;
}
/////////////////////////////////////////////////////////////////////////////

export const reducer = (state,action) =>{
    switch(action.type){
        // case "FILTER_CATEGORIES":
        //     action.data.forEach(element => {
        //         if(state.categories?.includes(element.category)===false){
        //             state.categories?.unshift(element.catergory)
        //         }
        //     });
        //     return{
        //         state, categories:[...state.categories]
        //     }
        case "ADD_PRODUCT":
                return{
                state , cart:[...state.cart,action.item]
            }
          
           case "INCREACE_QTY":
            const index1 = state.cart.findIndex(
                (CartItem ) => CartItem.ID === action.item.ID
            ); let Newcart1 =[...state.cart]
            Newcart1[index1].quantity++;

            return {
                state, cart:[...Newcart1]
            }

            case "DECREACE_QTY":
            const index2 = state.cart.findIndex(
                (CartItem ) => CartItem.ID === action.item.ID
            ); let Newcart2 =[...state.cart]
            Newcart2[index2].quantity--;
            return {
                state, cart:[...Newcart2]
            }
            
            case "DELETE_FROM_CART":
                const index3 = state.cart.findIndex(
                    (CartItem ) => CartItem.ID === action.item.ID
                );                
            let Newcart3 = [...state.cart];
            if(index3 >=0){
                Newcart3.splice(index3,1);
            }else{
                console.warn("The item you want to remove isn't in the cart.")
            }
            return {
                ...state,
                cart:Newcart3
            }
            case "EMPTY_CART":
                return {
                    ...state,
                    cart:[]
                }
            case "CONTACT_SET_UP":
                return {
                    ...state,
                    client:action.data   
                        
                       
                }
                case "ADDRESS_SET_UP":
                    return {
                        ...state,
                        client:{
                            ...state.client,
                            
                             address:action.data   
                            
                           }
                    }
        default:
            return state;
    }

} 