import {
  StyleSheet,
  Platform
} from 'react-native';

const Styles = StyleSheet.create({
  contentView : {
    ...Platform.select({
      ios: {zIndex: -1},
      android: {elevation: 10}
    }),
    backgroundColor: '#f4f4f4',
    paddingTop: 20
  },
  messageView : {
    backgroundColor : 'white',
    padding : 10,
    marginHorizontal : 30,
    marginVertical : 5,
    borderRadius : 10,
    minHeight : 90,
  },
  message : {
    fontSize : 15,
  }
});

export default Styles;
