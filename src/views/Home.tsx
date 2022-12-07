import NasaDatePicker from '../components/datePicker/NasaDatePicker';
import { FC } from 'react';
import { useNasa } from '../utils/providers/ApiProvider';

const Home: FC = () => {
  const {data, selectDate, date } = useNasa();

  const onDateChange = (date: Date) => {
    selectDate(date);
    // console.log(date);
  }

  return (
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.explanation}</p>
        <p>{data?.date}</p>
        <p>{data?.copyright}</p>
        <NasaDatePicker
          startDate={new Date()}
          selected={date}
          onChange={onDateChange}
        />
        <img src={data?.url} alt={data?.title} />
      </div>
  );
};

export default Home;
