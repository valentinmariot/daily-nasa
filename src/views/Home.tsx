import { FC, useState } from 'react';

const Home: FC = () => {
    const[data, setData] = useState<any>();
    const NasaKey = import.meta.env.VITE_NASA_KEY;
    // console.log('NasaKey', NasaKey);

    fetch("https://api.nasa.gov/planetary/apod?api_key="+NasaKey)
        .then(res => res.json())
        .then(data => 
            // console.log('data :', data)
            setData(data)
        );

        
  return (
    <div>
        <img src={data.hdurl} alt="NASA APOD" />
    </div>
  );
};

export default Home;
