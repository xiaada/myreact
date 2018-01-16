import React from 'react';
import { Row, Col} from 'antd';
import BaiduMap from './BaiduMap';
import './index.less'

export default class EchartBai extends React.Component {
    render() {
        return (
            <div className="content-map">
                <BaiduMap />
            </div>
        )
    }
}