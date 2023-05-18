import React from 'react'
import ContactList from '../components/contactComponent/ContactList'
import GetData from '../hooks/getData';
import SpecialDaysCountdown from '../components/specialDay/SpecialDay';


const Dashboard = () => {
    const { data, error, loading } = GetData('https://testapi.odessayazilim.com/api/ContactForms?Page=0&PageSize=20');

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
        <SpecialDaysCountdown />
        <ContactList data={data} />
      </div>
    )
  
  
    }

}

export default Dashboard