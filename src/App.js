import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";

import { googleAnalyticsActions } from "./utils/googleAnalytics";

function App() {
  React.useEffect(() => {
    googleAnalyticsActions.initGoogleAnalytics("UA-222300293-1");
  }, []);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              switch (route.layout) {
                case "main":
                  return (
                    <Route exact path={route.path}>
                      <Main>
                        <route.component />
                      </Main>
                    </Route>
                  );
                case "auth":
                  return (
                    <Route exact path={route.path}>
                      <Auth>
                        <route.component />
                      </Auth>
                    </Route>
                  );
              }
            })}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
