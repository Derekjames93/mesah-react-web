import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux'
import configureStore from "./redux/store/store";

const store = configureStore()


ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
        <App />

    </Provider>

    </React.StrictMode>
    </BrowserRouter>,
document.getElementById("root")
);

