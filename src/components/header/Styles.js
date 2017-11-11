import {
    StyleSheet,
    Platform
} from 'react-native';

const Styles = StyleSheet.create({
  contentView : {
    ...Platform.select({
      ios: {zIndex: 50},
      android: {elevation: 50}
    }),
    paddingTop: 20,
    flex : 1.5,
    backgroundColor: 'white',
    justifyContent : 'center',
    alignItems : 'center',
    shadowColor : 'gray',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },

  title : {
    //fontFamily: 'black',
    color: '#03324e',
    fontSize : 17,
    fontWeight : 'bold',
  },

  logo : {
    zIndex: 10,
    position:'absolute',
    right:0,
    bottom: -20,
    marginRight:20,
    ...Platform.select({
      ios: {zIndex: 9999},
      android: {elevation: 100}
    }),
  },

  logoImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  }

});

export default Styles;
