import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    placeholder: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="#bdc3c7"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 44,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 4
  }
});
