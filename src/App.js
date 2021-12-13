import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CompListProvider } from "./Components/Companies/Snapshots/CompDetailsContext";
import { CompInfoProvider } from "./Components/Companies/SearchCompanies/CompInfoDetailsContext";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Container from "./Components/Companies/Snapshots/Container";
import Options from "./Components/Options";
import EmpContainer from "./Components/Employees/EmpContainer";
import CompDetailsContainer from "./Components/Companies/SearchCompanies/CompDetailsContainer";
import AddEmpBalance from "./Components/Employees/AddBalance/AddEmpBalance";
import AddAccounts from "./Components/AddAccounts/AddAccounts";

import Success from "./Components/Employees/AddBalance/Success";
import List from "./Components/Companies/FullList/List";
import ListResults from "./Components/Companies/FullList/ListResults";
import Cont from "./Components/TestThree/Cont";

import { CompLiProvider } from "./Components/TestThree/CompLiContext";

function App() {
  return (
      <CompLiProvider>
        <CompInfoProvider>
          <CompListProvider>
            <Router>
              <Switch>
                <Route exact path="/test" component={Cont} />

                <Route
                  exact
                  path="/resultslist/:companyId"
                  component={ListResults}
                />
                <Route exact path="/list" component={List} />
                <Route
                  exact
                  path="/success/:companyId/:employeeId"
                  component={Success}
                />
                <Route
                  exact
                  path="/addbalance/:employee/:balance/:companyId/:employeeId"
                  component={AddEmpBalance}
                />
                <Route
                  exact
                  path="/search-comp-details"
                  component={CompDetailsContainer}
                />
                <Route
                  exact
                  path="/search-by-emp-name"
                  component={EmpContainer}
                />
                <Route
                  exact
                  path="/emp-search-by-comp-name"
                  component={EmpContainer}
                />

                <Route exact path="/options-comp" component={Options} />
                <Route exact path="/options-emp" component={Options} />

                <Route exact path="/mobile" component={Container} />
                <Route exact path="/res-search" component={Container} />

                <Route exact path="/add-accounts" component={AddAccounts} />

                <Route path="/main" component={Main} />
                <Route exact path="/" component={Login} />
              </Switch>
            </Router>
          </CompListProvider>
        </CompInfoProvider>
      </CompLiProvider>
  );
}

export default App;
