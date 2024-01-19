import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";
import "./inputForm.css";

const InputForm = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6986dde0ccf0b9f290d18dd4ea8dc513`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <Row className="flex-column">
        <Col className="mt-5 text-center">
          <p className="display-6">Welcome!</p>
          <div className="search">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={searchLocation}
              placeholder="Enter Location"
              type="text"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={2} className="bg-today ms-5 mt-5">
          <div>
            <div className="fw-bold mt-3 display-6 ms-4">
              <p>{data.name}</p>
            </div>
            <div className="ms-4">
              {data.main ? <h1>{data.main.temp.toFixed()}° C</h1> : null}
            </div>
            <div className="ms-4">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div>
              <div className=" ms-4">
                {data.main ? (
                  <p className="fw-bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="ms-4">
                {data.main ? (
                  <p className="fw-bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="ms-4">
                {data.wind ? (
                  <p className="fw-bold">{data.wind.speed.toFixed()} km/h</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </Col>
        <Col xs={6}>

        </Col>
      </Row>
    </>
  );
};

export default InputForm;
