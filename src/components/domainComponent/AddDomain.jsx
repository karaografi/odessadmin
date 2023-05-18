import React, { useState } from 'react'
import Modal from '../Modal'
import { useNavigate } from 'react-router'
import { addDomain } from '../../services/domainServices';
import axios from '../../api/axios';

const AddDomain = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [newDomainValue, setNewDomainValue] = useState({
    domain: "",
    hosting: "",
    note: "",
    registrationDate: "",
    endDate: "",
  });

  const handleSubmitNewDomain = async (e) => {
    e.preventDefault();
    await axios.post('https://testapi.odessayazilim.com/api/DomainHostings', newDomainValue)
      .then(response => {
        console.log(response.data);
        window.location.reload(true);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // await addDomain({
  //   newDomainValue,
  // })

  const handleChange = (event) => {
    setNewDomainValue({
      ...newDomainValue,
      [event.target.name]: event.target.value
    });
  };



  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='flex items-center px-3 py-2 text-gray-700 active'>Domain Ekle</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="flex items-center justify-center p-12">

          <div className="mx-auto w-full max-w-[550px]">
            <form className="" onSubmit={handleSubmitNewDomain}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="Domain"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Domain
                    </label>
                    <input
                      type="text"
                      name="domain"
                      id="domain"
                      value={newDomainValue.domain}
                      onChange={handleChange}
                      placeholder="Domain"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="Hosting"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Hosting
                    </label>
                    <input
                      type="text"
                      name="hosting"
                      id="hosting"
                      value={newDomainValue.hosting}
                      onChange={handleChange}
                      placeholder="Hosting"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="note"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Not
                </label>
                <input
                  type="text"
                  name="note"
                  id="note"
                  value={newDomainValue.note}
                  onChange={handleChange}
                  placeholder="Note"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Başlangıç Tarihi
                    </label>
                    <input
                      type="date"
                      name="registrationDate"
                      id="registrationDate"
                      value={newDomainValue.registrationDate}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Bitiş Tarihi
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      value={newDomainValue.endDate}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
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
            </form>
          </div>
        </div>

      </Modal>
    </div>
  )
}

export default AddDomain