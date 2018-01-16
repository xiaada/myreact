import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsMap from './EchartsMap';
import './index.less'

export default class EchartHot extends React.Component {
    render() {
        return (
            <div className="content-map">
                <EchartsMap />
            </div>
        )
    }
}