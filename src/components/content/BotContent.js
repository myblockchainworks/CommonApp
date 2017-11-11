import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  welcome
} from '../../utils/BotMessageConstants';

import Styles from './Styles';

class BotContent extends React.Component {

  render() {
    return (
      <View style = {[Styles.contentView, {flex : this.props.contentFlex}]}>

        <FlatList
          data={welcome}
          renderItem={({item}) =>
            <View style= {Styles.messageView}>
              <Text style = {Styles.message}>{item.key}</Text>
            </View>
          }
        />

      </View>
    )
  }
}

export default BotContent;
