import { FC, useEffect, useState, useContext } from 'react';
import { NasaContext } from '../contexts/ApiContext';
import { NasaData } from '../types';

interface IProps {
    children: React.ReactNode;
};

const NasaDataProvider: FC<IProps> = ({ children }) => {
    const NasaKey = import.meta.env.VITE_NASA_KEY;

    const [data, setData] = useState<NasaData | null>(null);
  
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key="+NasaKey)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <NasaContext.Provider value={data}>
        {children}
      </NasaContext.Provider>
    );
  };

const useNasa = () => useContext(NasaContext);

export { useNasa, NasaDataProvider };
