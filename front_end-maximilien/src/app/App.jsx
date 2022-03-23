import React, { Component } from "react";
import { Provider } from "react-redux";
import RoutesWithNavigation from "./routes/RoutesWithNavigation";
import { store } from "./shared/redux-store/store";
// import { loadUser } from "./actions/authAction";

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  render() {
    return (
      <Provider store={store}>
        <RoutesWithNavigation />
      </Provider>
    );
  }
}

export default App;
