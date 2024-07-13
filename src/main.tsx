import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import {ThemeProvider} from '@aws-amplify/ui-react';
import {Provider} from 'react-redux';
import {store} from "./redux/store";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ThemeProvider>
          <Provider store={store}>
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
);
