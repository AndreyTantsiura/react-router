import React from "react";
import User from "../img/user.png";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Contact = ({ firstName, lastName, gender, phone }) => {
  const match = useRouteMatch();
  return (
    <div className="contact_info">
      <Link to={`${match.url}/${firstName + "_" + lastName}`}>
        <div className="contact_card">
          <div className="contact_heder">
            <img src={User} alt="" />
            <div className="contact_name">
              <span>{firstName}</span>
              <span> {lastName}</span>
            </div>
            <div className="gender">
              {gender === "male" ? (
                <div>&#9794;</div>
              ) : gender === "female" ? (
                <div>&#9792;</div>
              ) : null}
            </div>
          </div>
          <div className="number_phone">{phone}</div>
        </div>
      </Link>
      <Switch>
        <Route exact path={`${match.path}/${firstName + "_" + lastName}`}>
          <div className="contact_info_chosed">
            <img src={User} alt="" />
            <div>First name: {firstName}</div>
            <div>Last name: {lastName}</div>
            <div>Number phone: {phone}</div>
            <div>gender: {gender}</div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Contact;
