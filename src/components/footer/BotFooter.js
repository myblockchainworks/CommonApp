import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
  Easing
} from 'react-native';

import Styles from './Styles';

import { actionCreators } from '../../redux/ActionSheetRedux'

class BotFooter extends React.Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(this.props.footerFlex);
  }

  openAnimate () {
    const {dispatch} = this.props;
    dispatch(actionCreators.expend());
    this.animatedValue.setValue(1.2)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 4.2,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => {})
  }

  closeAnimate () {
    const {dispatch} = this.props;
    dispatch(actionCreators.close());
    this.animatedValue.setValue(4.2)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1.2,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => {})
  }

  getActionIcon(){
      return this.props.actionIcon;
  }

  render() {
    let icon = this.props.actionSheetOpen ? require("../../images/close.png") : require("../../images/add.png");
    return (
      <Animated.View style = {[Styles.contentView, {flex : this.props.footerFlex}]}>
        <View style = {Styles.inputContentView}>
          <TextInput style = {Styles.inputView} placeholder={' Type a message '} underlineColorAndroid={'transparent'}
              placeholderTextColor={'white'}
              />
          <TouchableOpacity onPress={() => {
              if (this.props.actionSheetOpen)
                this.closeAnimate();
              else
                this.openAnimate();
            }} style = {Styles.actionView}>
            <Image style = {Styles.logo} source={icon} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

export default BotFooter;


// onFocus={() => {
//   this.openAnimate();
// }} onEndEditing={() => {
//   this.closeAnimate();
// }}
