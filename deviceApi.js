import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createType = async (type) =>{
  const{data} = await $authHost.post('api/type',type)
  
  return data
}

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
   
    return data
  }

  export const createBrand = async (brand) =>{
    const{data} = await $authHost.post('api/brand',brand)
    
    return data
  }

  export const createOrder = async (order) =>{
    try{
      const{data} = await $host.post('api/order',order)
    alert('Sargyt üstünlikli kabul edildi')
    return data
    } catch(error){
      if (error.isAxiosError && error.response) {
       
        console.error('Bu sargyt siziň hasabyňyzda öň hem bar', error.response.data);
        alert('Bu sargyt siziň hasabyňyzda öň hem bar ');
      }  else {
        // Другие ошибки
        console.error('Ýalňyşlyk döredi', error.message);
        alert(`Ýalňyşlyk döredi: ${error.message}`);
      }
    }
    
  }
  
  export const fetchBrands = async ( ) =>{
      const {data} = await $host.get('api/brand')
     
      return data
    }
   
    export const fetchAdmins = async ( ) =>{
        const {data} = await $authHost.get('api/user/admin')
       
        return data
      }
    

    export const createDevice = async (device) =>{
      const{data} = await $authHost.post('api/device',device)
      
      return data
    }
    
    export const fetchDevices = async (typeId, brandId, page,userId, limit = 3) =>{
        const {data} = await $host.get('api/device', {params:{
          typeId , brandId, userId, page, limit
        }})
       
        return data
      }
  

      



      export const fetchOneDevice = async (id) =>{
        const {data} = await $host.get('api/device/ ' + id)
       
        return data
      }
      export const fetchOneBasket = async (id) =>{
        const {data} = await $host.get('api/basket/ ' + id )
       
        return data
      }