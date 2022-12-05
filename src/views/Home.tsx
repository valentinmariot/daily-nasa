import { FC, useEffect, useState } from 'react';

interface IData {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

const Home: FC = () => {
    const[data, setData] = useState<IData>();
    const NasaKey = import.meta.env.VITE_NASA_KEY;

    useEffect(() => {
      fetch("https://api.nasa.gov/planetary/apod?api_key="+NasaKey)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

        
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.title}</p>
      <img src={data?.hdurl} alt="NASA APOD" />
    </div>
  );
};

export default Home;
