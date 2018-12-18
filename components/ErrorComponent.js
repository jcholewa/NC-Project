import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { colorSettings, tertiaryColor } from '../styles/Colors.styles';
import MenuWrapper from './MenuWrapper';

class ErrorComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Button
        iconLeft
        transparent
        onPress={() => {
          navigation.getParam('buttonChange')();
        }}
        width={50}
      >
        <Icon type="FontAwesome" name="bars" />
      </Button>
    ),
    title: 'Error',
    headerStyle: {
      backgroundColor: colorSettings.headerColor,
    },
    headerTintColor: colorSettings.headerTintColor,
  });

  state = {
    button: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ buttonChange: this.buttonChange });
  }

  buttonChange = () => {
    this.setState((state) => {
      const buttonClick = !state.button;
      return { button: buttonClick };
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          backgroundColor: tertiaryColor,
          flex: 1,
          justifyContent: 'center',
          paddingTop: 100,
        }}
      >
        <MenuWrapper navigation={navigation} currentPage="inbox" buttonState={this.state.button}>
          <>
            <Text
              style={{
                color: 'white',
                margin: 8,
                alignSelf: 'center',
                fontSize: 19,
              }}
            >
              Oooops, something went wrong.
            </Text>
            <Text
              style={{
                color: 'white',
                margin: 8,
                alignSelf: 'center',
                fontSize: 19,
              }}
            >
              Use the menu button to navigate to safety!
            </Text>
          </>
        </MenuWrapper>
      </View>
    );
  }
}

export default ErrorComponent;
