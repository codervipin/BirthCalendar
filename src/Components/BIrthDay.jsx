import React from 'react'

const BIrthDay = ({data}) => {
    // console.log(data);
    let apiData = {data};
    let fav = {data};
    // console.log(fav.data);
    // console.log(apiData);
    // let dataB = apiData.data;
    // console.log(apiData.data.apiData);
    let myData = apiData.data.apiData;
    let {setFavourite} = fav.data;
    // console.log(setFavourite);

    const handlChange=(ele)=>{
        setFavourite(ele);
    }

    
    
  return (
    <div className='birthday'>
        <h4>Birthdays on selected date</h4>
        <div className="container">
        {
        myData?.map((ele,idx)=>{
            return <p key={idx + 1}>{ele}  <button onClick={()=>handlChange(ele)}>Add To Favourite</button></p>
        })
        }
        </div>
    </div>
  )
}

export default BIrthDay