import React from 'react';
import { Table, Icon, Divider } from 'antd';
import  'whatwg-fetch'
// import axios from 'axios';

const columns = [{
    title: '商品名',
    dataIndex:'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '商品类型',
    dataIndex:'type',
    key: 'type',
}, {
    title: '商品售出',
    dataIndex:'payout',
    key: 'payout',
}, {
    title: '商品库存',
    dataIndex:'number',
    key: 'number',
}, {
    title: '操作',
    dataIndex:'action',
    key: 'action',
    render: () =>(<span><a href="#">修改</a> | <a href="#">删除</a></span>)
}];
const data = [{
    key: '1',
    name: '毛巾',
    type: '生活用品',
    payout: 10,
    number:1200
}, {
    key: '2',
    name: '洗发水',
    type: '生活用品',
    payout: 10,
    number:1200
}, {
    key: '3',
    name: '相宜本草',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '4',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '5',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '6',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '7',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '8',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
},{
    key: '9',
    name: '一叶子',
    type: '护肤产品',
    payout: 100,
    number:900
}];
class  Goods extends React.Component{
    componentDidMount() {
        fetch('https://api.ljoverseas.com/index/indextags')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
            console.log('parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
        // axios.get('https://api.ljoverseas.com/index/indextags')
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render(){
        return (
            <Table columns={columns} dataSource={data}/>
        );
    }
}
export default Goods;