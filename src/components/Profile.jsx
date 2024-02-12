import React, { useEffect, useState } from 'react' 
import ProfileData from './ProfileData';

const profile = () => {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
    .then((res) => res.json())
    .then((data) => {
      setCardData({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        gender: data.results[0].gender,
        phone: data.results[0].phone,
        image: data.results[0].picture.large
      });
    })
  },[]);

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-cyan-400'>
      <ProfileData 
      firstName={cardData.firstName}
      lastName={cardData.lastName} 
      gender={cardData.gender} 
      phone={cardData.phone} 
      image={cardData.image} />
      </div>
    </>
  )
}

export default profile