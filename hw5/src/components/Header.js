import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={require('../Asset/btn_back.png')}/>
      <Text style={styles.textStyle}>{props.headerText}</Text>
      <Image style={styles.imageStyle} source={require('../Asset/btn_like.png')}/>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(100,65,165)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingRight: 8.5,
    paddingLeft: 8.5,
    height: 64,
  },
  imageStyle: {
    height: 33,
    width: 33
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
  }
};

// Make the component available to other parts of the app
export default Header;
