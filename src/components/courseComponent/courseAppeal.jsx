import React from 'react'
import GetData from '../../hooks/getData';

const CourseAppeal = () => {
  const { data, error, loading } = GetData('https://testapi.odessayazilim.com/api/CourseAppealForm?Page=0&PageSize=10');

  if (loading) {

    return <div>Loading ..</div>
  }

  if (error !== null) {
    return <div>Error ...</div>
  }

  if (data) {
    //  console.log(data)
    return (
      <div className='flex-auto'>
        <h1 className='font-bold text-center mb-8'>Kurs Başvuruları</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Adı</th>
                <th>Soyadı</th>
                <th>E-mail</th>
                <th>Telefon</th>
                <th>Yaş</th>
                <th>Eğitim Durumu</th>
                <th>Açıklama</th>
              </tr>
            </thead>
            <tbody>

              {
                data.items.map(courseappeal => (
                  <tr key={courseappeal.id}>
                    <td>

                      <div className="font-bold">{courseappeal.id}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.firstName}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.lastName}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.eMail}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.phone}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.age}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.educationStatus}</div>
                    </td>
                    <td>

                      <div className="font-bold">{courseappeal.description}</div>
                    </td>
                  </tr>
                ))
              }


            </tbody>

          </table>
        </div>
      </div>
    )
  }
}

export default CourseAppeal