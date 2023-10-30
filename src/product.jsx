import React, { useContext, useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Context } from './context';

function Product() {
    const nav=useNavigate()
    const { product,setproduct,details,setdetails }=useContext(Context)
   
    // const[product,setproduct]=useState()
 useEffect(()=>{
    async function data(){
    const products=await axios.get('http://127.0.0.1:8000/api/user/product')
    console.log(products.data);
    setproduct(products.data)

    }
    data()

 },[])


  return (
    <div className='container'>
        <div className='row d-flex justify-content-center '>
            {
                product?.map((items)=>( <Card className='w-25 col-md-6 m-3'  onClick={()=>{
                    setdetails(items)
                    nav('/details')


                    }}>
                    <Card.Img src={items.image} />
                  
                        <Card.Body>
                        
                            <Card.Title>
                                {items.title}
                            </Card.Title>
                            <p>{items.desc}</p>
                        </Card.Body>

                    </Card>
                ))
            }

        </div>
      
    </div>
  )
}

export default Product
// const products=[{
//     name:'shoe',
//     image:"https://imgs.search.brave.com/K4ND8SuYCyKt4cZsaJYVmmzjHN1C2AtTApXLiLNdt7M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjUzMjYyL3Bob3Rv/L2Jyb3duLWxlYXRo/ZXItc2hvZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTJT/M0JOS05hdVMxVWZ2/WGlabngwX3NJdXU4/NjdhYmNuTjI3QjE5/M18xWHc9",
//     price:"300",
//     desc:"dgcwefuwf"

// },
// {
//     name:'shoe',
//     image:"https://imgs.search.brave.com/K4ND8SuYCyKt4cZsaJYVmmzjHN1C2AtTApXLiLNdt7M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjUzMjYyL3Bob3Rv/L2Jyb3duLWxlYXRo/ZXItc2hvZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTJT/M0JOS05hdVMxVWZ2/WGlabngwX3NJdXU4/NjdhYmNuTjI3QjE5/M18xWHc9",
//     price:"300",
//     desc:"dgcwefuwf"
// }
// ]