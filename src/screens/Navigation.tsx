import React from 'react';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import * as NavigationService from '../services/NavigationService';
import {HomeScreen, SecondaryScreen, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const Linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [],
  config: {
    screens: {
      Splash: 'splash',
      Home: '',
      Secondary: 'secondary',
    },
  },
};

export const DefaultScreenOptions: NativeStackNavigationOptions = {
  title: 'ProjectName',
  headerTitle: 'ProjectName',
  headerBackTitle: 'Back',
};

export type RootStackParamList = {};

interface Props {
  onNavigationReady?: () => void;
}

export class Navigation extends React.Component<Props> {
  public render() {
    return (
      <NavigationContainer
        ref={navigatorRef => {
          if (navigatorRef != null) {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }
        }}
        onReady={() => {
          if (this.props.onNavigationReady != null) {
            this.props.onNavigationReady();
          }
        }}
        linking={Linking}>
        <Stack.Navigator screenOptions={DefaultScreenOptions}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Secondary" component={SecondaryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
