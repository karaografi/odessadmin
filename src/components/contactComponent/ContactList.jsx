import React from 'react'
import Contact from './Contact'

const ContactList = ({data}) => {
  return (
    <div>
      <div>
            <div className='flex-auto'>
                <h1 className='font-bold text-center mb-8'>İletişim Başvuruları</h1>
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
                                <th>Açıklama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            
                            {
                              data.items.map(x => (
                                 <tr key={x.id}>
                                   <Contact contact={x} />
                                 </tr>
                              ))
                            }


                        </tbody>

                    </table>
                </div>
            </div>


      <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>

    </div>
    </div>
  )
}

export default ContactList