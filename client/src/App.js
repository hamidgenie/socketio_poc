import { Provider } from "react-redux";
import store from "./redux/store";
import AppScreen from "./components/AppScreen/AppScreen";

function App() {
  return (
    <Provider store={store}>
      <AppScreen></AppScreen>
    </Provider>
  );
}

export default App;
