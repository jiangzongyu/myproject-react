import '../css/main.css';
import React, { Component } from 'react';

class Main extends Component{
    render(){
        return(
            <div className="home-main">
                <h2 className="home-main-title">家电
                    <ul className="tab-list">
                        <li>热门</li>
                        <li>电视影音</li>
                        <li>电脑</li>
                        <li>家居</li>
                    </ul>
                </h2>
                <div className="brick-promo-list">
                    <ul className="brick-promo-img">
                        <li>
                            <img src="//i1.mifile.cn/a4/1695c18e-8a6b-4bc9-9796-d5abad413184" alt=""/>
                        </li>
                    </ul>
                    <ul className="brick-list">
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/pms_1500287084.72131750!220x220.jpg"/>
                            <h3 className="title">小米电视4A 32英寸</h3>
                            <p className="desc">64位四核处理器 / 1GB+4GB大内存</p>
                            <p className="price-s">
                                <span className="price">999元</span>
                                <del className="num">1999元</del>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/pms_1503909218.70932288!220x220.png"/>
                            <h3 className="title">小米电视4A 49英寸 标准版</h3>
                            <p className="desc">2GB+8GB 大储存 / 全高清HDR</p>
                            <p className="price-s">
                                <span className="price">2399元</span>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/pms_1505106710.28498495!220x220.jpg"/>
                            <h3 className="title">小米笔记本Pro 15.6英寸 </h3>
                            <p className="desc">全金属强化机身 / FHD全贴合屏幕</p>
                            <p className="price-s">
                                <span className="price">5599元</span>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/pms_1499138177.54329452!220x220.jpg"/>
                            <h3 className="title">小米笔记本Air 13.3" i7处理器</h3>
                            <p className="desc">Intel酷睿i7处理器，8GB内存+256GB</p>
                            <p className="price-s">
                                <span className="price">5699元</span>
                                <del className="num">5999元</del>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg"/>
                            <h3 className="title">米家压力IH电饭煲</h3>
                            <p className="desc">智能烹饪，灰铸铁粉体涂层内胆</p>
                            <p className="price-s">
                                <span className="price">999元</span>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i1.mifile.cn/a1/pms_1498624482.88089389!220x220.jpg"/>
                            <h3 className="title">米家激光投影电视</h3>
                            <p className="desc">150 英寸超大投影尺寸</p>
                            <p className="price-s">
                                <span className="price">9999元</span>
                            </p>
                        </li>
                        <li className="brick-item">
                            <img src="//i8.mifile.cn/v1/a1/f3bbe2aa-4b7c-a3dd-2ecc-b12f9418632b.jpg" width="150" height="150" alt="智米除菌加湿器"/>
                            <h3 className="title">智米除菌加湿器</h3>
                            <p className="desc">UVGI 紫外线除菌，便捷上注水设计</p>
                            <p className="price-s">
                                <span className="price">799元</span>
                            </p>
                        </li>
                        <li className="brick-item brick-item-s">
                            <div className="figure-img">
                                <img src="//i1.mifile.cn/a1/pms_1468806372.46368911!220x220.jpg" width="80px" height="80px" alt="小白摄像机"/>
                                <h3 className="title price-m">小白摄像机</h3>
                                <p className="price-m">
                                    <span className="price">399元</span>
                                </p>
                            </div>
                        </li>
                        <li className="brick-item brick-item-s">
                            <i className="el-icon-more"></i>
                            <h3 className="title price-m">浏览更多</h3>
                            <p className="price-m">
                                <span className="title">热门</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main;