import React, {Fragment, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import {Carousel} from "react-bootstrap";
import 'rc-slider/assets/index.css';
import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import {getProducts} from '../store/actions/productActions';
import {Link} from "react-router-dom";
import TopProducts from "./layout/TopProducts";
import picture from '../assets/images/uniqe4.jpg'
import picture1 from '../assets/images/uniqe2.jpg'
import picture2 from '../assets/images/uniqe5.jpg'
import Menu from "./layout/Menu";
import ArrowAnimation from "./layout/ArrowAnimation";





const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({match}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const [price2, setPrice2] = useState([1,1000])
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

    const categories = [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        "Books",
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home',
        'Flowers',
        'Drinks',
        'Toys'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, products, error, productsCount, resPerPage, filteredProductsCount} = useSelector(state => state.products)
    const keyword = match.params.keyword
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts(keyword, currentPage, price, category, rating));

    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }

    const mouseUpHandler = () => {
        setPrice(price2)
    }


    return (
        <>
            {loading ? <Loader/> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'}/>
                    <Menu />
                    <Carousel fade>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block uniqe"
                                src={picture}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block uniqe"
                                src={picture1}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block uniqe"
                                src={picture2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <TopProducts />
                    <section id="products" className="container mt-5">
                        <div className="row" id="filter">
                            {!keyword ? (
                                <Fragment>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <div onMouseUp={mouseUpHandler}>
                                            <Range
                                                marks={{
                                                    1: `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={price2}
                                                onChange={price => setPrice2(price)}
                                            />
                                            </div>
                                            <hr className="my-5"/>
                                            <div className="mt-5">
                                                <h4 className="mb-3" id="categories">
                                                    Categories
                                                </h4>
                                                <ul className="pl-0">
                                                    {categories.map((category) => (
                                                        <li
                                                            className="category"
                                                            key={category}
                                                            onClick={() => setCategory(category)}
                                                        >
                                                            {category}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <hr className="my-3"/>
                                            <ArrowAnimation />
                                            <div className="grow">
                                                <h4 className="mb-3" id="ratings1">
                                                    Ratings
                                                </h4>
                                                <ul className="pl-0">
                                                    {[5, 4, 3, 2, 1].map(star => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={star}
                                                            onClick={() => setRating(star)}
                                                        >
                                                            <div className="rating-outer" id="ratings">
                                                                <div className="rating-inner"
                                                                     style={{
                                                                         width: `${star * 20}%`
                                                                     }}
                                                                >
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={'select'}>
                                                <h4>Select Products</h4>
                                                <select className="form-control" id="category_field" value={category}
                                                        onChange={(e)=>setCategory(e.target.value)}>
                                                    {categories.map(category => (
                                                        <option key={category} value={category}>{category}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <img src="https://media.giphy.com/media/l378bM4CjnOEllJ6M/giphy.gif" alt="a" className={'gif'} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                            {products.map(product => (
                                                <Product key={product._id} product={product} col={4}/>
                                            ))}
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                                products.map(product => (
                                    <Product key={product._id} product={product} col={3}/>
                                ))
                            )}
                        </div>
                    </section>
                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'=>'}
                                prevPageText={'<='}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </Fragment>
                )}
        </>
    )
}

export default Home
