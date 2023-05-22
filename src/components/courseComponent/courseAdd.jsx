import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import GetData from '../../hooks/getData';
import Modal from '../Modal';
import axios from 'axios';
import { deleteCourse} from "../../services/courseServices";

const CourseAdd = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newCourseValue, setNewCourseValue] = useState({ courseName: "" });

  
  const { data, error, loading, setReset } = GetData('https://testapi.odessayazilim.com/api/Courses?Page=0&PageSize=20');
  
  useEffect(() => { 

  }, [])


  const handleSubmitNewCourse = async (e) => {
    e.preventDefault();
    await axios.post('https://testapi.odessayazilim.com/api/Courses', newCourseValue)
      .then(response => {
        setReset(true)
        setNewCourseValue("")
        setModalOpen(false)
      })
      .catch(error => {
        console.log(error);
      })
  }


  const handleChange = (event) => {
    setNewCourseValue({
      courseName: event.target.value
    });
  };




  const handleDeleteCourse = async (id) => {
    await deleteCourse(id);
    window.location.reload(true); 
  }




  if (loading) {

    return <div>Loading ..</div>
  }

  if (error !== null) {
    return <div>Error ...</div>
  }

  if (data) {
    // console.warn(data)
    return (
      <div className='flex-auto'>


        <h1 className='font-bold text-center mb-8'>Açılacak Kurslar</h1>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Kurs Adı</th>
                <th><button onClick={() => setModalOpen(true)} className='flex items-center px-3 py-2 text-gray-700 active'>Kurs Ekle</button></th>
              </tr>


            </thead>
            <tbody>



              {data.items.map((course,index) => (
                <tr key={course.id}>

                  <td>
                    
                    <div className="font-bold">{index + 1}</div>
                  </td>

                  <th>

                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-6 h-6">
                          <img src="/public/vite.svg" alt="course" />
                        </div>
                      </div>
                      <div>

                        <div className="font-bold">{course.courseName}</div>

                      </div>
                    </div>
                  </th>
                  <td>
                    <button onClick={() => handleDeleteCourse(course.id)} className='cursor-pointer ml-6'> <FaTrashAlt  /> </button>
                  </td>
                </tr>

              ))}


            </tbody>

          </table>
        </div>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <div className="flex justify-center items-center p-12">

            <div className="mx-auto w-full max-w-[550px]">
              <form className="" onSubmit={handleSubmitNewCourse}>
                <div className="-mx-3 flex flex-wrap items-center justify-between">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        for="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Kurs
                      </label>
                      {/* <input
                        type="text"
                        name="course"
                        id="course"
                        value={newCourseValue.courseName}
                        onChange={handleChange}
                        placeholder="Course"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> */}

                      <input type="text" value={newCourseValue.courseName} onChange={handleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                  </div>


                  <div>
                    <button
                      type='submit'
                      className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Ekle
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default CourseAdd