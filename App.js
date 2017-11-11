import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'

import CommonBot from './src/screens/CommonBot';

const mapStateToProps = (state) => ({
  actionSheetOpen : state.actionSheetOpen,
  headerFlex : state.headerFlex,
  contentFlex : state.contentFlex,
  footerFlex : state.footerFlex
})

class App extends Component<{}> {
  render() {
    return (
      <CommonBot {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(App)
