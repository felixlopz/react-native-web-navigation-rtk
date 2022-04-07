import React from 'react';
import styled from 'styled-components/native';
import {NavigationService} from '../../services';

const StyledView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text``;

export class SplashScreen extends React.Component {
  public componentDidMount() {
    setTimeout(() => {
      NavigationService.setRoutes([{name: 'Home'}]);
    }, 2000);
  }

  public render() {
    return (
      <StyledView>
        <StyledText>splash screen</StyledText>
      </StyledView>
    );
  }
}
