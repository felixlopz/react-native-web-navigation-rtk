import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationService} from '../../services';
import {RootState} from '../../store';
import {RootStackParamList} from '../Navigation';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text``;

const StyledButton = styled.Button``;

interface StateFromProps {
  text: string;
}
interface DispatchFromProps {}
interface OwnProps {}
interface State {}
type Props = StateFromProps &
  DispatchFromProps &
  OwnProps &
  NativeStackScreenProps<RootStackParamList>;

export class HomeScreenInternal extends React.Component<Props, State> {
  public render() {
    return (
      <StyledView>
        <StyledText>{this.props.text}</StyledText>
        <StyledButton
          title="Go to secondary screen"
          onPress={() => {
            NavigationService.navigate('Secondary');
          }}
        />
      </StyledView>
    );
  }
}

function mapStateToProps(state: RootState): StateFromProps {
  return {
    text: state.homeScreen.text,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {};
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenInternal);

export default HomeScreen;
