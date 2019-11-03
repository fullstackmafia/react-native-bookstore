import React from "react";
import { ActivityIndicator } from "react-native";

import { Book, BookItem } from "../components/Books";

class BookScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    fetch('https://anapioficeandfire.com/api/books')
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          list: res
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <Book
        data={this.state.list}
        keyExtractor={item => item.url}
        renderItem={({ item, index }) => (
          <BookItem
            title={item.name}
            isOdd={index % 2}
            onPress={() => this.props.navigation.navigate("Features", { item })}
          />
        )}
      />
    );
  }
}

export default BookScreen;
