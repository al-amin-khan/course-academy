import React from 'react';
import './Enrolled.css'

const Enrolled = (props) => {
  const cart = props.cart;
  console.log(cart);
  // const precision = (num) => {
  //   const result = Number(num.toFixed(2));
  //   return result;
  // }

  const total = cart.reduce((total, courseFee) => total+Number(courseFee.price), 0);

  return (
    <div>
      <h4>Coursed you have added</h4>
      <h5>Added Course: {cart.length}</h5>
      <h5 className=''>Total: ${total.toFixed(2)} </h5>
      <ol>
        {
          cart.map(course => <li>{course.title}</li>)
        }
      </ol>
    </div>
  );
}

export default Enrolled;
