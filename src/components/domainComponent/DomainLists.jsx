import React, { useEffect, useState } from 'react'
import Domain from './Domain';
import { getAll } from '../../services/domainServices';


const DomainLists = ({ data }) => {
  // console.log("ıtems", data)
  return (
    <div className='mt-6'>
      <table className="table w-full border-collapse">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>No</th>
            <th>Domain Adı</th>
            <th>Hosting Adı</th>
            <th>Not</th> 
            <th>Oluşturulma Tarihi</th>
            <th>Bitiş Tarihi</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>

          {data.items.map(x => (
            <tr key={x.id}>
              <Domain domain={x} />
            </tr>
          ))}
        </tbody>



      </table>

      <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>

    </div>
  )
}

export default DomainLists