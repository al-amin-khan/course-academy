import React from 'react';


const Course = (props) => {
  const {title, price} = props.course;
  return (
    <div className=''>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-10'>
          <div className='card mt-5 container'>
            <div className='p-1'>
              <img className='img-fluid' src="https://fakeimg.pl/600x350/" alt=""/>
            </div>
            <div className='p-2'>
              <h5 className='card-title p-2'>{title}</h5>
              <h6>Price: ${price}</h6>
            </div>
            <div>
              <p className='btn btn-success' onClick={() => props.handleEnrollNow(props.course)}>Enroll now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
