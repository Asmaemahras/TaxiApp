import { useEffect, useState } from 'react';

function AddressAuto() {
  const [source, setSource]= useState<any>()
  const [addressList, setAddressList] = useState<any>([]);

  useEffect(()=> {
    
    const delayDebounceFn = setTimeout(()=>{

      getAddressList()
    },1000);

    return () => clearTimeout(delayDebounceFn)
  }, [source]); 

  
  const getAddressList=async()=>{
    const res= await fetch('/api/search-address?q='+source,{
      headers:{
        "Content-Type": "application/json",
      }
    });
    const result = await res.json();
    setAddressList(result);
  }  
  return (
    <div className='mt-5'>
        <div>
            <label>Lieu de départ  ?</label>
            <input type='text' className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-gray-500
            ' value={source} onChange={(e)=>setSource(e.target.value)}/>
            {addressList?.suggestions?
            <div>
            {addressList?.suggestions.map((item:any, index:number) => (
              <h2>{item.full_address}</h2>
  
            ))}
            </div>:null}
        </div>
        <div>
            <label>Où allez-vous ?</label>
            <input type='text' className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-gray-500'/>
        </div>
    </div>
  )
}

export default AddressAuto 