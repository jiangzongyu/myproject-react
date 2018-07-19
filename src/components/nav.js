import '../css/nav.css'
import React, { Component } from 'react';


class Nav extends Component {
    constructor(){
        super();
        this.state = {
            images:[
            ]
        }
    }
    componentDidMount(){
        // let imgArr = [];
        // let imagesUrl;
        // for(var i=1; i<5;i++){
        //     imagesUrl = '../images/header/' + i + '.jpg';
        //     imgArr.push(imagesUrl);
        // }
        // console.log(imgArr);
        // let images = imgArr.map(function(value,index){
        //     console.log(value)
        //    return(
        //        <img src = {require('../images/header/1.jpg')}/>,
        //        <img src = {require('../images/header/2.jpg')}/>,
        //        <img src = {require('../images/header/3.jpg')}/>,
        //        <img src = {require('../images/header/4.jpg')}/>
        //    )
        // })
        // this.setState({
        //     services:images
        // })
        // console.log(imagesheader);
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET", "http://localhost:3000/first", true)
        // xhr.withCredentials = true;
        // xhr.send();
        // xhr.onreadystatechange = () =>{
        //     console.log(xhr)
        //     if(xhr.status === 200){
        //         let gotServices = JSON.parse(xhr.responseText)
        //         console.log(gotServices);
        //         this.setState({
        //             services : gotServices
        //         })
        //     }else{
        //         alert("ajax失败了")
        //     }
        // }
    }
    render() {
        return (
            <div className="nav">
                <div className="navigation">
                    <div className="nav-topbar">
                        <a>小米商城</a>
                        <span className="sep">|</span>
                        <a>MIUI</a>
                        <span className="sep">|</span>
                        <a>loT</a>
                        <span className="sep">|</span>
                        <a>云服务</a>
                        <span className="sep">|</span>
                        <a>水滴</a>
                        <span className="sep">|</span>
                        <a>金融</a>
                        <span className="sep">|</span>
                        <a>有货</a>
                        <span className="sep">|</span>
                        <a>Select Region</a>
                    </div>
                    <div className="login">
                        <a>登录</a>
                        <span className="sep">|</span>
                        <a>注册</a>
                        <span className="sep">|</span>
                        <a>消息通知</a>
                        <span className="sep">|</span>
                        <a>购物车</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
