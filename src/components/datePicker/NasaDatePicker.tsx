import { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    />
  );
};

export default NasaDatePicker;
