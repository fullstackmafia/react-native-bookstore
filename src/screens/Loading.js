import React from "react";

class Loading extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("BookApp");
  }

  render() {
    return null;
  }
}

export default Loading;
