import { Provider } from "react-redux";
import Redux from "./LEARN REDUX/Redux";
import { store } from "./LEARN REDUX/store";
import Form from "./Typescript/Form";

const App = () => {
  return (
    <div>
      {/* <Provider store={store}>
        <Redux />
      </Provider> */}
      <Form />
    </div>
  );
};

export default App;
