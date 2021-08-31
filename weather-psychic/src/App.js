import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./App.css";

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    lat: "1.2921",
    lon: "36.8219",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  return (
    <div className="App">
      <ReactWeather
        showForecast
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Nairobi"
        unitsLabel={{ temparature: "C", windSpeed: "Km/h" }}
      />
    </div>
  );
}

export default App;
