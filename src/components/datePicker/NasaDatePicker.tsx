import React, { FC } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePicker {
  startDate: Date;
  selected: Date;
  onChange: (date: Date) => void;
}

const NasaDatePicker: FC<IDatePicker> = ({ startDate, selected, onChange }) => {
  return (
    <DatePicker
      startDate={startDate}
      selected={selected}
      onChange={onChange}
      maxDate={moment().toDate()}
    />
  );
};

export default NasaDatePicker;
