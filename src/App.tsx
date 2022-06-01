import React from "react";
import logo from "./logo.svg";

import Checkbox from "./ui/checkbox";
import Label from "./ui/label";
import Input from "./ui/input";
import Button from "./ui/button";

import "./App.scss";

function App() {
  const [state, setState] = React.useState(false);
  const [value, updateValue] = React.useState("");
  return (
    <div className="app">
        <Input
            value={value}
            onChange={({ target }) => updateValue(target.value)}
            id="type"
        />
        <Button type="submit" onClick={() => undefined} disabled={false}>Create</Button>
        <div>
            <Checkbox checked={state} onChange={() => setState(!state)} id="3" />
            <Label id="3">Labeltext</Label>
        </div>
    </div>
  );
}

export default App;
