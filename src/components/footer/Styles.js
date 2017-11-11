import {
  StyleSheet,
  Platform
} from 'react-native';

const Styles = StyleSheet.create({
  contentView : {
    //flex : 1.2,
    //padding: 7
  },
  inputContentView : {
    backgroundColor : '#e26a5c',
    //borderRadius: 10,
    flex: 1,
    justifyContent: 'flex-end',

  },
  inputView : {
    height: 40,
    width: '73%',
    marginLeft: '8%',
    padding: 5,
    marginBottom: 13,
    backgroundColor : '#f39891',
    shadowColor : '#dc5247',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  actionView : {
    width: 40,
    height: 42,
    position:'absolute',
    right:0,
    top: -22,
    marginRight:20,

  },
  logo : {
    width: 38,
    height: 36,
    resizeMode: 'contain',
    margin:5,
  }
});

export default Styles;
