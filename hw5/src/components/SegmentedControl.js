import React from 'react';
import { Text, View, Image } from 'react-native';

const SegmentedControl = (props) => {
  const { containerStyle,viewStyle, imageStyle, textStyle, activeStyle, indicatorStyle } =styles;
  return(
    <View style={containerStyle}>
      <View style={viewStyle}>
        <Text style={textStyle, activeStyle}>LIVE</Text>
        <View style={indicatorStyle}>
        </View>
      </View>
      <View style={viewStyle}>
        <Text style={textStyle}>RECENT</Text>
      </View>
    </View>

  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  viewStyle: {
    backgroundColor: '#fff',
    flex: 1/2,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 33,
    width: 33
  },
  textStyle: {
    fontSize: 13,
    color: 'rgb(187,187,187)',
  },
  activeStyle: {
    color: 'rgb(100,65,165)',
  },
  indicatorStyle: {
    backgroundColor: 'rgb(100,65,165)',
    height: 5,
    width: 187.5,
    position: 'absolute',
    bottom: 0
  },
};

// Make the component available to other parts of the app
export default SegmentedControl;