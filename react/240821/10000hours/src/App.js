import Layout from "./components/Layout/Layout";
import "./reset.css";
import "./App.css";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout setOpen={setOpen} />
      <Modal setOpen={setOpen} open={open} />
    </>
  );
}
export default App;
