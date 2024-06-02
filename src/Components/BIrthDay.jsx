import React from 'react'

const BIrthDay = ({data}) => {
    // console.log(data);
    let apiData = {data};
    let fav = {data};
    let favo = {data};
    // console.log(favo);
    // console.log(fav.data);
    // console.log(apiData);
    // let dataB = apiData.data;
    // console.log(apiData.data.apiData);
    let myData = apiData.data.apiData;
    let {setFavourite} = fav.data;
    let {favourite} = favo.data;
    console.log(favourite);
    // console.log(setFavourite);

    const handlChange=(ele)=>{
        console.log(ele);
        setFavourite([...favourite,ele]);
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