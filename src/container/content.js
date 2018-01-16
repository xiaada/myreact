import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import Goods from '../pages/goods'
import EchartLine from '../pages/line'
import EchartHot from '../pages/heartmap'
import EchartBai from '../pages/bauduMap'

const { Content } = Layout;

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Route exact path="/" component={Goods} />
          <Route path="/index" component={Goods} />
          <Route path="/line" component={EchartLine} />
          <Route path="/map" component={EchartHot} />
          <Route path="/bmap" component={EchartBai} />
      </Content>
    );
  }
}