import { Route, Switch } from "react-router";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import ListProgramsLanguages from "../pages/ListProgramsLanguages/ListProgramsLanguages";
import { useEffect, useState } from "react";

const Routes = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@IKnowThis::token"));
    if (token) {
      setAuthorized(true);
    }
  }, [authorized]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authorized={authorized} />
      </Route>
      <Route exact path="/Registration">
        <Registration authorized={authorized} />
      </Route>
      <Route exact path="/Login">
        <Login authorized={authorized} setAuthorized={setAuthorized} />
      </Route>
      <Route exact path="/ListProgramsLanguages">
        <ListProgramsLanguages
          authorized={authorized}
          setAuthorized={setAuthorized}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
