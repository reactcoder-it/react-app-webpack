import React from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "mdbreact";

class DataWatcher extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      toggle: false
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    fetch("/data")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          data
        });
      });
  }

  onClick() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <Container>
        <ul>
          {this.state.data
            ? this.state.data.map(item => {
                return (
                  <li key={item.id}>
                    <Button
                      onClick={this.onClick}
                      color={this.state.toggle ? "success" : "info"}
                    >
                      {item.name}
                    </Button>
                  </li>
                );
              })
            : ""}
        </ul>
      </Container>
    );
  }
}

const App = () => (
  <div>
    <h1>Hello, world!</h1>
    <DataWatcher />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));
