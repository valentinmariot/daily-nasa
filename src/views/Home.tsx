import { FC } from "react";
import { useNasa } from "@/utils/providers/ApiProvider";
import NasaDatePicker from "@/components/datePicker/NasaDatePicker";
import "./Home.scss";

const Home: FC = () => {
  const { data, selectDate, date } = useNasa();

  const onDateChange = (date: Date) => {
    selectDate(date);
  };

  return (
    <div className="home">
      <div className="home_picker">
        <p>Pick a date:</p>
        <NasaDatePicker
          onChange={onDateChange}
          selected={date}
          startDate={new Date()}
        />
      </div>
      <div className="home_title">
        <h1 className="home_title_content">
          {data?.title}
        </h1>
      </div>
      <div className="home_explanation">
        <p className="home_explanation_content">
          {data?.explanation}
        </p>
      </div>
      <div className="home_media">
        {data?.media_type === "video" ? (
          <iframe
            className="home_media_video"
            src={data?.url}
            title={data?.title}
            allowFullScreen>
          </iframe>
        ) : (
          <img className="home_media_img"
            src={data?.url}
            alt={data?.title}
          />
        )}
      </div>
      {data?.copyright && (
        <div className="home_copyright">
          <p className="home_copyright_content">©{data?.copyright}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
