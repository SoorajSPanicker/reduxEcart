import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import {Trash} from 'react-feather';
import { removeCart } from '../reduxcart/cartSlice';
import { Link } from 'react-router-dom';





function Cart() {
  const cartArray=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  if(cartArray.length!=0){
    var total=cartArray.map(i=>i.price).reduce((n,m)=>n+m)
  }

  return (
    <div><h1>Items in cart</h1>
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
          {cartArray.length > 0 ? cartArray.map((i, index) => (<tr>
            <td>{index+1}</td>
            <td>{i?.title}</td>
            <td>{i?.price}</td>
            <td><img src={i?.image} alt="" style={{width:'10rem',height:'10rem'}}  /></td>
            <td> <Trash onClick={()=>dispatch(removeCart(i?.id))} size={30} color='red' className='mt-5 text-danger'/></td>
          </tr>)) : <h1>no product in cart</h1>}

        </tbody>
      </Table>
      <h2>Total Price {total}$</h2>

      <div className='d-flex justify-content-center mt-3'>
        <Link to={''} ><button className='p-2' style={{color:'green',backgroundColor:'greenyellow'}} > Continue Shopping</button></Link>
       <button className='p-2 ms-3' style={{color:'white',backgroundColor:'blue'}}  type='submit'> Payment</button>

        
  
      </div>
    </div>

  )
}

export default Cart
