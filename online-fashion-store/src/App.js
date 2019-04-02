import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Subscription from "./Subscription";
import Footer from "./Footer";

class App extends Component {
    homeBannerArea() {
        return <section className="home_banner_area">
            <div className="overlay"></div>
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content row">
                        <div className="offset-lg-2 col-lg-8">
                            <h3>Fashion for
                                <br/>Upcoming Winter</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <a className="white_bg_btn" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    hotDealsArea() {
        return <section className="hot_deals_area section_gap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hot_deal_box">
                            <img className="img-fluid" src="img/product/hot_deals/deal1.jpg" alt=""/>
                            <div className="content">
                                <h2>Hot Deals of this Month</h2>
                                <p>shop now</p>
                            </div>
                            <a className="hot_deal_link" href="#"></a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hot_deal_box">
                            <img className="img-fluid" src="img/product/hot_deals/deal1.jpg" alt=""/>
                            <div className="content">
                                <h2>Hot Deals of this Month</h2>
                                <p>shop now</p>
                            </div>
                            <a className="hot_deal_link" href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    clientsLogoArea() {
        return <section className="clients_logo_area">
            <div className="container-fluid">
                <div className="clients_slider owl-carousel">
                    <div className="item">
                        <img src="img/clients-logo/c-logo-1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="img/clients-logo/c-logo-2.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="img/clients-logo/c-logo-3.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="img/clients-logo/c-logo-4.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="img/clients-logo/c-logo-5.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    }

    featureProductsArea() {
        return <section className="feature_product_area section_gap">
            <div className="main_box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="main_title">
                            <h2>Featured Products</h2>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col1">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-1.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col2">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-2.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col3">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-3.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col4">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-4.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col5">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-5.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>

                        <div className="col col6">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-5.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>

                        <div className="col col7">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-4.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>

                        <div className="col col8">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-5.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col9">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-1.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                        <div className="col col10">
                            <div className="f_p_item">
                                <div className="f_p_img">
                                    <img className="img-fluid" src="img/product/feature-product/f-p-4.jpg" alt=""/>
                                    <div className="p_icon">
                                        <a href="#">
                                            <i className="lnr lnr-heart"></i>
                                        </a>
                                        <a href="#">
                                            <i className="lnr lnr-cart"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4>Long Sleeve TShirt</h4>
                                </a>
                                <h5>$150.00</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <nav className="cat_page mx-auto" aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">01</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">02</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">03</a>
                                </li>
                                <li className="page-item blank">
                                    <a className="page-link" href="#">...</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">09</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    }

    render() {
        return <div>
            <Header/>
            {this.homeBannerArea()}
            {this.hotDealsArea()}
            {this.clientsLogoArea()}
            {this.featureProductsArea()}
            <Subscription/>
            <Footer/>
        </div>
    }
}

export default App;
