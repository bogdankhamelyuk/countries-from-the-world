import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MapComponent from "./map.component";

export default function CountryPage() {
  const navigate = useNavigate();
  const information = useLocation().state.record;
  useEffect(() => {
    console.log(information);
  });
  return (
    <div className="page-container">
      <div className="vert-container">
        <div className="horiz-container" style={{ flexDirection: "row" }}>
          <h1>{information.name.official}</h1>
          <img src={information.flags.svg} alt="Flag" style={{ height: "60px" }} />
        </div>
        <p>
          Also known as "{information.name.common}" is a country located in {information.continents}. Its official
          languages are:
          {information.languages &&
            Object.entries(information.languages).map(([code, language], index, array) => (
              <span key={code}>
                {" "}
                {language}
                {index < array.length - 1 && ", "} {/* Add comma if it's not the last language */}
              </span>
            ))}
          . {information.independent ? " It is an independent country." : " it is not an independent country."} The
          capital city of {information.name.common} - is {information.capital}. The used official currency is:{" "}
          {information.currencies &&
            Object.entries(information.currencies).map(([code, currency], index, array) => (
              <span key={code}>
                {currency.name} ({code}){/* Add comma if it's not the last currency */}
              </span>
            ))}
          . The population is {information.population} people.
        </p>
        <MapComponent city={information.capital} />

        <Button style={{ marginTop: "30%" }} onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
