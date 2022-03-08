import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"

import "../styles/reset.css"
import "../styles/globals.css"
import "../styles/utilities.css"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
