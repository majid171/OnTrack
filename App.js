import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Loading from './Screens/Loading';
import Login from './Screens/Login';
import Item from './Components/ProjectItem';
import ProjectItem from './Components/ProjectItem';
import Dashboard from './Screens/Dashboard'
import * as firebase from 'firebase';
import {DB} from './Helpers/config';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Test from './Screens/Test';
import ProjectPage from './Screens/ProjectPage';


const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
  ProjectPage: ProjectPage
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  
  state = {
    loaded: false
  };

  componentWillMount(){
    firebase.initializeApp(DB);
    this.loadAssets();
  }

  loadAssets = async () => {
    await Font.loadAsync({
      billabong: require('./assets/fonts/Billabong.ttf'),
      roboto: require('./assets/fonts/Roboto-Light.ttf'),
      roboto_medium: require('./assets/fonts/Roboto-Medium.ttf')
    });
    await this.setState({ loaded: true });
  };

  render() {
    if(this.state.loaded == true){
      return(
        <AppNavigator/>
        //<Test></Test>
      );
    }
    else{
      return(
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    
  }
}