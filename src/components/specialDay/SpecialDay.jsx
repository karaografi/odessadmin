import React, { useState, useEffect } from 'react';
import GetData from '../../hooks/getData';

const SpecialDaysCountdown = () => {
     const specialDays = ['2023-05-19', '2023-07-15', '2023-09-10']; // Özel günlerin tarihlerini içeren dizi

    const { data, error, loading } = GetData('https://testapi.odessayazilim.com/api/PublicHolidays?ticks=0&days=0&hours=0&milliseconds=0&minutes=0&seconds=0');
      
    // console.log("data : ",data.resmitatiller[0].gun);
    
    // const specialDays = data.resmitatiller;

    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        const today = new Date();
        const specialDayDates = specialDays.map(day => new Date(day));
        const nearestSpecialDay = specialDayDates.find(day => day > today);

        if (nearestSpecialDay) {
            const timeDifference = nearestSpecialDay.getTime() - today.getTime();
            setCountdown(timeDifference);
        }
    }, []);

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
            <h2>Önümüzdeki Özel Güne</h2>
            <p>{formatCountdown(countdown)}</p>
            <h2>Var</h2>

        </div>
    );
};

export default SpecialDaysCountdown;