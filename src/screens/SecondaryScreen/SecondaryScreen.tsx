import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationService} from '../../services';

export class SecondaryScreen extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Secondary Screen</Text>
        <Button
          title="Go back to home"
          onPress={() => {
            NavigationService.goBack();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondaryScreen;
