import React from 'react'

const BIrthDay = (apiData) => {
    console.log(apiData);
    let data = apiData.data
  return (
    <div className='birthday'>
        <h4>Birthdays on selected date</h4>
        <div className="container">
        {
        data?.map((ele)=>{
            return <p>{ele}</p>
        })
        }
        </div>
    </div>
  )
}

export default BIrthDay