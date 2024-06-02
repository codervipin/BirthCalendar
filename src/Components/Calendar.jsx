import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import axios from "axios";
import { format } from "date-fns";
import BIrthDay from "./BIrthDay";

const calendar = () => {
  const [value, setValue] = useState(new Date());
  const [apiData,setApiData] = useState([]);
  const month = format(value, "MM");
  const day  = format(value, "dd");

  const [favourite,setFavourite] = useState([]);
  //   console.log(value.getDate());
  // console.log(value.getMonth() + 1);

  // const birthDayData = (month,day) =>{
  //     let {data} = axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/06/01`)
  //     console.log(data);
  // }

  // useEffect(()=>{
  //     birthDayData(month,day);
  // },[value])
  
  const handleChange = (date) => {
    setValue(date);

   
  };

  const loadData =(month,day)=>{
     
    fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`
    )
      .then((response) => response.json())
      .then(data => {
        // console.log(data);
        const titles = []
        data.births.forEach(birth => {
          birth.pages.forEach(page => {
            // console.log(page.normalizedtitle);
            // console.log(page.title);
            titles.push(page.title)
            
          })
        })
        // console.log(titles);
        setApiData(titles)
      })
  }

      // console.log(apiData);

      // console.log(favourite);
      useEffect(()=>{
          loadData(month,day);
      },[value]);

      console.log(monthMap[month]);
  return (
    
    <div className="wrapper">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          className="date"
          value={value}
          openTo="day"
          onChange={handleChange}
          />
          {/* <p>Selected Date = {value.getDate()}</p> */}
      </LocalizationProvider>
        <BIrthDay data={{apiData,favourite,setFavourite}}/>
        <div className="favouriteBirth">
          <h4>Favourites</h4>
          <div className="container">
            {favourite?.map((ele,idx)=>{
              return <p key={idx+1}>{ele} </p>
            })}

          </div>
        </div>
      </div>
    
  );
};

export default calendar;
