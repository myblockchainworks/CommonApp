import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import Styles from './Styles';

class BotHeader extends React.Component {
  render() {
    return (
      <View style = {[Styles.contentView, {flex : this.props.headerFlex}]}>
        <Text style = {Styles.title}> Common Bot </Text>
        <View  style = {Styles.logo}>
          <Image style = {Styles.logoImage} source={require('../../images/logo.png')} />
        </View>
      </View>
    )
  }
}

export default BotHeader;
