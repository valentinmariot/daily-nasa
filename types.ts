export type NasaData = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export interface IContext {
  selectDate: (date: Date) => void;
  date: Date;
  data?: NasaData;
}
