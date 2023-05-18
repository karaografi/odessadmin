import React, { useState, useEffect, useRef } from 'react'
import DomainLists from '../components/domainComponent/DomainLists'
// import { getAll } from '../services/domain';
import AddDomain from '../components/domainComponent/AddDomain';
import GetData from '../hooks/getData';
// import loading from "../../loading.json";
// import Lottie from 'lottie-react';

const DomainScreen = () => {
  //const [loading, setLoading] = useState(true);
  //const [domains, setDomains] = useState([]);
  const { data, error, loading } = GetData('https://testapi.odessayazilim.com/api/DomainHostings?Page=0&PageSize=20');


  if (loading) {
    
    return <div>Loading ..</div>
  }

  if (error !== null) {
    return <div>Error ...</div>
  }

  if(data){
    // console.warn(data)
  return (
    <div>
      <AddDomain />
      <DomainLists data={data} />
    </div>
  )}
}

export default DomainScreen