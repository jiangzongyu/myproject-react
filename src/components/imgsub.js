import '../css/imgsub.css';
import React, { Component } from 'react';

class ImgSub extends Component{
    render(){
        return(
            <div className="container">
                <ul className="home-channel-list">
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                    <li><a><i className="el-icon-picture"></i>操作</a></li>
                </ul>
                <ul className="home-promo-list">
                    <li><img src="//i1.mifile.cn/a4/xmad_15120457812039_zRvct.jpg" alt=""/></li>
                    <li><img src="//i1.mifile.cn/a4/xmad_15118567982799_tyVRB.jpg" alt=""/></li>
                    <li><img src="//i1.mifile.cn/a4/xmad_15120441868462_gnUsB.jpg" alt=""/></li>
                </ul>
                
                
                

            </div>
        )
    }
}

export default ImgSub;