import { FC } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./NasaDatePicker.scss";
interface IDatePicker {
  startDate: Date;
  selected: Date;
  onChange: (date: Date) => void;
}

const NasaDatePicker: FC<IDatePicker> = ({ startDate, selected, onChange }) => {
  return (
    <div className="date_picker">
      <DatePicker
        startDate={startDate}
        selected={selected}
        onChange={onChange}
        maxDate={moment().toDate()}
      />
    </div>
  );
};

export default NasaDatePicker;
