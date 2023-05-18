import React from 'react'

import Modal from '../components/Modal';
import CourseAdd from '../components/courseComponent/courseAdd';
import CourseAppeal from '../components/courseComponent/courseAppeal';


const Courses = () => {
  
  return (
    <div className='flex flex-row gap-8 flex-wrap'>

    <CourseAdd />

    <CourseAppeal />
    </div>
  )
}

export default Courses