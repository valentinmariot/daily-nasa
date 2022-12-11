import React, { FC } from "react";
import { useNasa } from "@/utils/providers/ApiProvider";
import NasaDatePicker from "@/components/datePicker/NasaDatePicker";

const Home: FC = () => {
  const { data, selectDate, date } = useNasa();

  const onDateChange = (e: e) => {
    selectDate(date);
    // console.log(date);
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.explanation}</p>
      <p>{data?.date}</p>
      <p>{data?.copyright}</p>
      <NasaDatePicker onChange={onDateChange} selected={date} startDate={new Date()} />
      <img src={data?.url} alt={data?.title} />
    </div>
  );
};

export default Home;
