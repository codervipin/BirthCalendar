import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import axios from "axios";
import { format } from "date-fns";
import BIrthDay from "./BIrthDay";

const calendar = () => {
  const [value, setValue] = useState(new Date());
  const [apiData,setApiData] = useState([]);
  const month = format(value, "MM");;
  const day  = format(value, "dd");
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
            console.log(page.title);
            titles.push(page.title)
            
          })
        })
        // console.log(titles);
        setApiData(titles)
      })
  }

      console.log(apiData);

      useEffect(()=>{
          loadData(month,day);
      },[value]);

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
        <BIrthDay data={apiData}/>
      </div>
    
  );
};

export default calendar;
