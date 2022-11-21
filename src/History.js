import { Component } from "react";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list || [],
    };
  }
  componentWillReceiveProps(current) {
    this.setState({
      list: current.list || [],
    });
  }
  handleRemove = (target) => {
    let { list } = this.state;
    list = list.filter((it, index) => index != target);
    this.setState({
      list,
    });
    if (typeof this.props.onUpdate == "function") {
      this.props.onUpdate(list);
    }
  };
  render() {
    const { list } = this.state;
    if (list.length === 0) {
      return null;
    }
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li key={`history` + index}>
              {item}
              <button onClick={() => this.handleRemove(index)}>remove</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
