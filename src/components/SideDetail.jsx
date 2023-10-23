import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const SideDetail = ({ detailId, setShowdetails }) => {
    const [detail, setDetail] = useState(null);

    useEffect(() => {

        //apiden igili uçuş verisini çek

        const options = {
            method: 'GET',
            url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
            params: { flight: detailId },
            headers: {
                'X-RapidAPI-Key': 'c4c3840225mshbbbaceaf727ad79p16922djsn4a6c359b6a5a',
                'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
            }
        };
        axios.request(options).then((res) => setDetail(res.data))

    }, [detailId])
    console.log(detail);
    return (
        <div className='detail'>
            <div className='detail-inner'>
              {!detail? "Loading..." : (
                 <>

                 <p className='close-icon' onClick={() => setShowdetails(false)}>
                     <span>X</span>
                 </p>
                 
                 <h2>{detail?.aircraft?.model?.text}</h2>
                 <p>Model kodu:{detail?.aircraft?.model?.code} </p>
                 <p>Kuyruk kodu: {detail?.aircraft?.registration}</p>
                 <img src={detail?.aircraft?.images?.medium[0]?.src} />
                 <p>
                     Kalkış:
                     <a href={detail?.airport?.origin?.website}>
                         {detail?.airport?.origin?.name}
                     </a>
                 </p>
                 <p>
                     Hedef:
                     <a
                         href={detail?.airport?.destination?.website}
                     >
                         {detail?.airport?.destination?.name}
                     </a>
                 </p>
 
                 <p>Durum: {detail?.status?.text}</p>
 
               </>
              )}
            </div>
        </div>

    )
}

export default SideDetail