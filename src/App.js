import './App.css';
import store from "./store";
import {Provider} from "react-redux";
import SearchBar from "./components/SearchBar";
import WeatherChart from "./components/WeatherChart";
function App() {
  return (
      <Provider store={store}>
    <div className="App">
    <SearchBar/>
      <WeatherChart/>
    </div>
      </Provider>
  );
}

export default App;
