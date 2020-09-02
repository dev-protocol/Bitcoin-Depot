// @flow

import * as React from 'react'
import { WebView } from 'react-native-webview'

import { SceneWrapper } from '../common/SceneWrapper.js'

const WEB_URI = 'https://www.bitcoindepot.com/'

type Props = {}

export class NewSiteScene extends React.Component<Props> {
  render() {
    return (
      <SceneWrapper background="body" hasTabs={false}>
        <WebView source={{ uri: WEB_URI }} />
      </SceneWrapper>
    )
  }
}
