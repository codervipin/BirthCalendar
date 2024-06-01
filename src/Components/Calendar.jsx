import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import axios from "axios";
import { format } from "date-fns";

const calendar = () => {
  const [value, setValue] = useState(new Date());
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

    const month = format(value, "MM");
    const day = format(value, "dd");

    console.log(month, day);
    
    fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          className="date"
          value={value}
          openTo="day"
          onChange={handleChange}
        />
      </LocalizationProvider>
      <p>Selected Date = {value.getDate()}</p>
    </>
  );
};

export default calendar;
