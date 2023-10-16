import React from 'react'
import Table from 'react-bootstrap/Table';
import {Trash,ShoppingCart} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart} from '../reduxcart/cartSlice';
import { removewishList } from '../reduxcart/wishlistSlice';
import { Link } from 'react-router-dom';





function Wishlist() {
    const dispatch=useDispatch()
    var wishlistArray=useSelector(state=>state.wishlist)
    const handleSubmit=(id,item)=>{
        dispatch(addTocart(item))
        dispatch(removewishList(id))
    }
  return (
    <div>
        <h1>Items in wishlist</h1>
      <Table className='shadow container striped border border-primary hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody  class="table-group-divider">
            {
            wishlistArray.length>0?wishlistArray.map((i,index)=>(   <tr>
            <td>{index}</td>
            <td>{i?.title}</td>
            <td>{i?.price}</td>
            <td><img src={i?.image} alt="" style={{width:'10rem',height:'10rem'}}  /></td>
            <td> <Trash onClick={()=>dispatch(removewishList(i?.id))} size={30} color='red' className='mt-5 '/>
            <ShoppingCart onClick={()=>handleSubmit(i?.id,i)} size={30} color='black' className='mt-5 ms-2 '/>

           
            </td>
          </tr>)): <h1>no Items In Wishlist</h1>
             }
         

        </tbody>
      </Table>
      
      <div className='d-flex justify-content-center mt-4'><Link to={"/"}>
          <button type="button" class="btn btn-primary btn-lg ms-5 ">
            Continue Shopping
          </button>
        </Link></div >

    </div>
  )
}

export default Wishlist
