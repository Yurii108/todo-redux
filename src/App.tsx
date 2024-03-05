import { Provider } from "react-redux";

import "./App.css";
import store from "./redux/store";

import { LayoutPage } from "./layout";

function App() {
  return (
    <Provider store={store}>
      <LayoutPage />
    </Provider>
  );
}

export default App;
