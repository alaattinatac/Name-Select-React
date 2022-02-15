import React from "react";
import { names } from "./names";

export class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    const newName = e.target.value;
    this.props.changeName(newName)
  };

  render() {
    return (
      <div>
        <h1> Pickup a name: </h1>
        <select onChange={this.handleChange} id="great-names">
          {names.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
