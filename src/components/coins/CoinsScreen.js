import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
class CoinsScreen extends Component {
  handlePress = () => {
    console.log('go to Detailsss', this.props);
    this.props.navigation.navigate('CoinDetails');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>COINSSSS Screen</Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Ir a Detail</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CoinsScreen;
