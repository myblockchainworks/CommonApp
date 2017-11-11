import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View
} from 'react-native';

import Styles from './Styles';

import BotHeader from '../components/header/BotHeader';
import BotContent from '../components/content/BotContent';
import BotFooter from '../components/footer/BotFooter';

class CommonBot extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView style = {Styles.contentView} behavior={'padding'}>
        <BotHeader {...this.props} />
        <BotContent {...this.props} />
        <BotFooter {...this.props} />
      </KeyboardAvoidingView>
    )
  }
}

export default CommonBot;
