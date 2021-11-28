import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries } from "./actions";
const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);
  return (
    <div className="container mt-3">
      <div className="card mb-3">
        <div className="card-header">Ülkeler</div>
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {props.countries.map((country) => {
              return (
                <li class="list-group-item">
                  {" "}
                  <h4>{country.name}</h4>
                  <div className="row">
                    <img
                      src={country.flags.png}
                      alt=""
                      width="100%"
                      className="col-md-3"
                    />
                    <div className="col-md-9">
                      <div>{country.capital}</div>
                      <div>{country.region}</div>
                      <div>{country.subregion}</div>
                      <div>
                        {country.alpha2Code} - {country.alpha3Code}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
};

export default connect(mapStateToProps, { getCountries })(App);
