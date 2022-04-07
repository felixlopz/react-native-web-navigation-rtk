import {
  NavigationContainerRef,
  StackActions,
  CommonActions,
  Route,
} from '@react-navigation/native';

let _navigator: NavigationContainerRef<ReactNavigation.RootParamList>;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList>,
) {
  _navigator = navigatorRef;
}

export function navigate(routeName: string, params?: object) {
  _navigator.dispatch(StackActions.push(routeName, params));
}

export function goBack(count?: number) {
  _navigator.dispatch(StackActions.pop(count));
}

export function setRoutes(
  routes: Array<Omit<Route<string, object | undefined>, 'key'>>,
) {
  _navigator.dispatch(state => {
    return CommonActions.reset({
      ...state,
      routes: routes,
      index: routes.length - 1,
    });
  });
}

export const NavigationService = {
  setTopLevelNavigator,
  navigate,
  goBack,
  setRoutes,
};
