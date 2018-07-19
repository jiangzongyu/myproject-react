import '../css/milletstar.css';
import React, { Component } from 'react';

class MilletStar extends Component {
    render(){
        return(
            <div >
                <h2 className="title-nav">小米明星单品</h2>
                <ul className="good-list">
                    <li>
                        <img src="//i1.mifile.cn/a4/xmad_15117763019255_STRfj.png" />
                        <h3 className="good-list-title">小米MIX 2</h3>
                        <p className="desc">全面屏2.0，5.99"大屏</p>
                        <p className="price desc">3299元起</p>
                    </li>
                    <li>
                        <img src="//i1.mifile.cn/a4/xmad_15117899982255_yNLAY.png" />
                        <h3 className="good-list-title">小米note 3</h3>
                        <p className="desc">1600万美颜自拍，2倍变焦双摄</p>
                        <p className="price desc">1999元起</p>
                    </li>
                    <li>
                        <img src="//i1.mifile.cn/a4/xmad_15117902953103_eaCbi.png" />
                        <h3 className="good-list-title">红米5A</h3>
                        <p className="desc">8天超长待机，137g轻巧机身</p>
                        <p className="price desc">599元</p>    
                    </li>
                    <li>
                        <img src="//i1.mifile.cn/a1/pms_1503909150.67293503!220x220.png" />
                        <h3 className="good-list-title">小米电视4A 43英寸 标准版</h3>
                        <p className="desc">全高清HDR 四核高性能处理器</p>
                        <p className="price desc">1999元</p>
                    </li>
                    <li>
                        <img src="//i1.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d" />
                        <h3 className="good-list-title">小米笔记本</h3>
                        <p className="desc">更轻更薄，像杂志一样随身携带</p>
                        <p className="price desc">3599元起</p>    
                    </li>
                    
                </ul>
                
            </div>
        )
    }
}

export default MilletStar;