import { createContext } from "react";
import { IContext } from "@/types";

const defaultValues: IContext = {
  data: undefined,
  date: new Date(),
  selectDate: () => "",
};

const NasaContext = createContext<IContext>(defaultValues);

export { NasaContext };
