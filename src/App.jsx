import { Provider } from "react-redux";
import Redux from "./LEARN REDUX/Redux";
import { store } from "./LEARN REDUX/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Redux />
      </Provider>
    </div>
  );
};

export default App;
