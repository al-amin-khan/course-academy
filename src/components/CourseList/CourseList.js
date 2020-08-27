import React from 'react';
import {useState} from 'react'
import './CourseList.css'
import fakeData from '../fakeData/courses';
import Course from '../Course/Course';
import Enrolled from '../Enrolled/Enrolled';

const CourseList = () => {
  const fake15Data = fakeData.slice(0,15);
  const [courses, setCourses] = useState(fake15Data);

  const [cart, setCart] = useState([]);

  const handleEnrollNow = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    // console.log(newCart);
  }
  return (
    <div className='container'>
      <div className='mt-5'>
        <div className='row'>
          <div className='col-md-8 border-right'>
            <h2 className='text-center'>Courses</h2>
            <ul>
              {
                courses.map(course => <Course course={course} handleEnrollNow={handleEnrollNow}></Course>)
              }
            </ul>
          </div>
          <div className='col-md-4'>
            <Enrolled cart={cart}></Enrolled>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseList;
