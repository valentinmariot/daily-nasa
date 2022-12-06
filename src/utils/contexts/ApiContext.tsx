import { createContext } from 'react';
import { NasaData } from '../types';

const NasaContext = createContext<NasaData | null>(null);

export { NasaContext };
