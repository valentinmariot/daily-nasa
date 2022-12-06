import { FC } from 'react';
import { useNasa } from '../utils/providers/ApiProvider';

const Home: FC = () => {
  const data = useNasa();

  return (
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.explanation}</p>
        <p>{data?.date}</p>
        <p>{data?.copyright}</p>
        <img src={data?.url} alt={data?.title} />
      </div>
  );
};

export default Home;
