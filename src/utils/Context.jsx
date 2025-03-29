import { createContext, useEffect, useState } from "react";
import instance from "./axios";

export const ProductContext  = createContext();
const Context = (props)=>{
    const [product, setproduct] = useState(null)

    const getproducts = async () => {
        try {
            const {data} = await instance("/products"); 
            setproduct(data);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getproducts()
    },[])
    

    
    return(
        <ProductContext.Provider value={[product , setproduct]}>
        {props.children}
    </ProductContext.Provider>
)
}
export default Context