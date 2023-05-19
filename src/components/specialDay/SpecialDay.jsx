import React, { useState, useEffect } from 'react';
import GetData from '../../hooks/getData';
import axios from 'axios';

const SpecialDaysCountdown = () => {
    const [specialDay, setSpecialDay] = useState(null);
    const [countdown, setCountdown] = useState(null);
  
    useEffect(() => {
      const fetchSpecialDay = async () => {
        try {
          const response = await axios.get('https://testapi.odessayazilim.com/api/PublicHolidays?ticks=0&days=0&hours=0&milliseconds=0&minutes=0&seconds=0');
          setSpecialDay(response.data.resmitatiller);
        //   console.log(response.data.resmitatiller)
        } catch (error) {
          console.error('Error fetching special day:', error);
        }
      };

      fetchSpecialDay();
    }, []);
  
    useEffect(() => {
      if (specialDay) {
        const today = new Date();
        const specialDayDate = new Date(specialDay[0].tarih);
        // console.log("specialDay :",specialDay[0].tarih);
  
        if (specialDayDate > today) {
          const timeDifference = specialDayDate.getTime() - today.getTime();
          setCountdown(timeDifference);
        }
      }
    }, [specialDay]);
  
    useEffect(() => {
      let intervalId;
  
      if (countdown) {
        intervalId = setInterval(() => {
          setCountdown(prevCountdown => prevCountdown - 1000);
        }, 1000);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [countdown]);

    const formatCountdown = (countdown) => {
        if (countdown === null) return '';

        const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

        return (
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": `${days}` }}></span>
                    </span>
                    Gün
                </div>

                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": `${hours}` }}></span>
                    </span>
                    Saat
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": `${minutes}` }}></span>
                    </span>
                    Dakika
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": `${seconds}` }}></span>
                    </span>
                    Saniye
                </div>

                {/* ` ${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye` */}
            </div>
        );
    };

    return (
        <div>


<div className="flex justify-center items-center card w-full border shadow-md mb-8">
  <div className="card-body flex flex-row md:flex-col sm:flex-col">
    <h1 className="card-title mr-8 mb-5 sm:mr-0">{
                specialDay ? (
                    <h1 className='font-black text-lg'>{specialDay[0].gun}</h1>
                    
                ): (
                    <p>Loading</p>
                )

            }</h1>
    <p>{formatCountdown(countdown)}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

            {/* {
                specialDay ? (
                    <h2>{specialDay[0].gun}</h2>
                    
                ): (
                    <p>Loading</p>
                )

            } */}
            
        </div>
    );
};

export default SpecialDaysCountdown;