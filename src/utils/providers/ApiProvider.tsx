import { FC, useEffect, useState, useContext } from 'react';
import { NasaContext } from '@/utils/contexts/ApiContext';
import { NasaData } from '@/types';
import { formatDate } from '@/utils/helpers';

interface IProps {
  children: React.ReactNode;
};

const NasaDataProvider: FC<IProps> = ({ children }) => {
 
  const nasaKey = import.meta.env.VITE_NASA_KEY;
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [data, setData] = useState<NasaData>();
  const [formattedDate, setFormattedDate] = useState<string>(formatDate(selectedDate));

  const selectDate = (date: Date) => {
      // [TODO]: check if date is in the future
      setSelectedDate(date);
      setFormattedDate(formatDate(date));
  };

  useEffect(() => {
      fetch(`https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${nasaKey}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
  }, [selectedDate]);

  // Provide the selected date and the data to the context
  return (
    <NasaContext.Provider value={{ selectDate, data, date: selectedDate }}>
      {children}
    </NasaContext.Provider>
  );
};

// Custom hook to consume the context
const useNasa = () => useContext(NasaContext);

export { useNasa, NasaDataProvider };
