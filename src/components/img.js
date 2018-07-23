import '../css/img.css';
import React, { Component } from 'react';
import { Carousel } from 'element-react';
import 'element-theme-default';

class Img extends Component {
    constructor(){
        super();
        this.state = {
            img:[
                <img src="//i1.mifile.cn/a4/xmad_15103267811873_TWopd.jpg" alt=""/>,
                <img src="//i1.mifile.cn/a4/xmad_15121016681651_RDxru.jpg" alt=""/>,
                <img src="//i1.mifile.cn/a4/xmad_15120210333112_ADGgm.jpg" alt=""/>,
                <img src="//i1.mifile.cn/a4/xmad_15120102437012_Qdjbf.jpg" alt=""/>,
                <img src="//i1.mifile.cn/a4/xmad_15120909846154_EvXGo.jpg" alt=""/>
            ]
        }
    }
    render(){
        return(
            <div className="img">
                <ul>
                    <li><a>手机 电话卡<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>笔记本<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>电视 盒子<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>路由器 智能硬件<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>移动电源 电池 插线板<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>耳机 音箱<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>保护套 贴膜<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>线材 支架 储存卡<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>箱包 服饰 鞋 眼镜<i className="el-icon-arrow-right"></i></a></li>
                    <li><a>米兔 生活周边<i className="el-icon-arrow-right"></i></a></li>
                </ul>
                <div className="block">
                {/* <img src="//i1.mifile.cn/a4/xmad_15103267811873_TWopd.jpg" alt=""/> */}
                    <Carousel arrow="never" height="460px">
                        {
                        this.state.img.map((item, index) => {
                            return (
                            <Carousel.Item key={index}>
                                <h3>{item}</h3>
                            </Carousel.Item>
                            )
                        })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Img;