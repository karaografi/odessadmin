import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { deleteDomain, editDomain } from "../../services/domainServices";
// import { useForm } from 'react-hook-form';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import Modal from '../Modal';

const Domain = ({ domain }) => {
  //console.log('gelenDomain', domain)
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [domainToEdit, setDomainEdit] = useState(domain);

  // console.log(errors);


  // useEffect(() => {
  //   //domain.registrationDate = domain.registrationDate.split("T")[0]
  //   setDomainEdit(domain)
  // }, [domainToEdit])

  const handleSubmitEditDomain = async (e) => {
    e.preventDefault();
    await editDomain({
      id: domain.id,
      domain: domain.domain,
      hosting: domain.hosting,
      note: domain.note,
      registrationDate: domain.registrationDate,
      endDate: domain.endDate
    })
    setDomainEdit("");
    setOpenModalEdit(false);
    window.location.reload(true);
  }


  const handleDeleteDomain = async (id) => {
    await deleteDomain(id);
    setOpenModalDeleted(false);
    window.location.reload(true);
  }


  return (

    <>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>

      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{domain.id}</div>

          </div>
        </div>
      </td>

      <td>
        {domain.domain}
      </td>
      <td>
        {domain.hosting}
      </td>
      <td>{domain.note}</td>
      <td>{domain.registrationDate}</td>
      <td>{domain.endDate}</td>

      <th>
        <button onClick={() => { setOpenModalEdit(true); setDomainEdit(domain); console.log(domain) }} className="btn btn-ghost btn-xs">
          <FaEdit className='h-6 w-6' />
        </button>

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <div className="flex items-center justify-center p-12">

            <div className="mx-auto w-full max-w-[550px]">
              <form className="" onSubmit={handleSubmitEditDomain}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Domain
                      </label>

                      {/* <input
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="text"
                        id="domain"
                        value={domainToEdit.domain}
                        placeholder="Domain" {...register("domain", { required: true, maxLength: 80 })}
                      /> */}

                       <input
                        type="text"
                        name="domain"
                        id="domain"
                        value={domainToEdit.domain}
                        onChange={(e) => setDomainEdit(e.target.value)}
                        placeholder="Domain"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> 


                      {/* <input
                        type="text"
                        name="domain"
                        id="domain"
                        value={domainToEdit.domain}
                        onChange={(e) => setDomainEdit(e.target.value)}
                        placeholder="Domain"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> */}
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="lName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Hosting
                      </label>
                      <input
                        type="text"
                        name="hosting"
                        id="hosting"
                        value={domainToEdit.hosting}
                        onChange={(e) => setDomainEdit(e.target.value)}
                        placeholder="Hosting"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Not
                  </label>
                  <input
                    type="text"
                    name="note"
                    id="note"
                    value={domainToEdit.note}
                    onChange={(e) => setDomainEdit(e.target.value)}
                    placeholder="Note"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="-mx-2 flex flex-wrap">
                
                  <div className="w-full px-3 ">
                    <div className="mb-5">
                      <label
                        htmlFor="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Başlangıç Tarihi
                      </label>
                      {/* <input
                        type="date"
                        name="registrationDate"
                        id="registrationDate"
                        value={Date(domainToEdit.registrationDate)}
                        onChange={(e) => {
                          console.log("e", e.target.value);
                          //setDomainEdit(domain.registrationDate=new Date(e).toISOString().split('.')[0]);
                          setDomainEdit(
                            domainToEdit.registrationDate = e.target.value
                          );
                          console.log("domain", domainToEdit)
                        }}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> */}

                      <Datetime initialValue={domainToEdit.registrationDate} onChange={(e) => setDomainEdit(e.target.value)}  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      {/* initialValue={domainToEdit.registrationDate} onChange={(e) => setDomainEdit(e.target.value)} */}
                      {/* <DatePicker
                        selected={domainToEdit.registrationDate}
                        value={domainToEdit.registrationDate}
                        onChange={(e) => {
                          console.log("e",new Date(e).toISOString().split('.')[0]); 
                          setDomainEdit(domain.registrationDate=new Date(e).toISOString().split('.')[0]);
                          console.log("domain", domainToEdit) 
                        }}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> */}

                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        for="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Bitiş Tarihi
                      </label>


                      {/* <DatePicker
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={domainToEdit.endDate || ''}
                        onChange={(e) => setDomainEdit(e.target.value)}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-bold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      /> */}
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Güncelle
                  </button>
                </div>
              </form>
            </div>
          </div>

        </Modal>



        <button onClick={() => setOpenModalDeleted(true)} className="btn btn-ghost btn-xs ml-2">
          <FaTrashAlt className='h-6 w-6' />
        </button>

        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <div className='flex flex-col justify-center px-2'>
            <h3>Silmek istediğinizden emin misiniz?</h3>
            <div className='modal-action flex justify-center gap-10'>
              <button className='bg-green-800 rounded px-5 py-2 text-white' onClick={() => handleDeleteDomain(domain.id)}>Evet</button>
              <button className='bg-red-700 rounded px-5 py-2 text-white' onClick={() => setOpenModalDeleted(false)}>Hayır</button>
            </div>
          </div>
        </Modal>

      </th>
    </>
  )
}

export default Domain