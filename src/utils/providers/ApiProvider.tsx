import { FC, useEffect, useState, useContext } from "react";
import { NasaContext } from "@/utils/contexts/ApiContext";
import { NasaData } from "@/types";
import { formatDate } from "@/utils/helpers";

interface IProps {
  children: React.ReactNode;
}

const NasaDataProvider: FC<IProps> = ({ children }) => {
  const nasaKey = import.meta.env.VITE_NASA_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [data, setData] = useState<NasaData>();
  const [formattedDate, setFormattedDate] = useState<string>(
    formatDate(selectedDate)
  );

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    setFormattedDate(formatDate(date));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${nasaKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [selectedDate]);

  // Provide the selected date and the data to the context
  return (
    <NasaContext.Provider value={{ selectDate, data, date: selectedDate }}>
      {isLoading ? <div>Loading... 🛰️</div> : children}
    </NasaContext.Provider>
  );
};

// Custom hook to consume the context
const useNasa = () => useContext(NasaContext);

export { useNasa, NasaDataProvider };
