import React, {useState, useEffect } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
import LayoutApp from '../../components/Layout';

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    const getAllProducts = async()=>{
      try{

        const {data} = await axios.get('/api/products/getproducts');
        setProductData(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }

    getAllProducts();
  })
  return (
        <LayoutApp>
          <h2>Home</h2>
        </LayoutApp>
  )
}

export default Home