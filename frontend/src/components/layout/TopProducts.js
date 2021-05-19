import React from 'react';
import img1 from '../../assets/images/bbb1.jpg';
import img2 from '../../assets/images/ddd1.jpg';
import img3 from '../../assets/images/q4jpg.jpg';
import img4 from '../../assets/images/qq3.jpg';
import img5 from '../../assets/images/ttt2.jpg';
import img6 from '../../assets/images/h2.jpg';
import img7 from '../../assets/images/z1.jpg';

const TopProducts = () => {
        return (
            <div className={'topProducts'}>
                <h1>
                    <span>PRIORITY</span>
                    <div className="message">
                        <div className="word1">PRICES</div>
                        <div className="word2">PRODUCTS</div>
                        <div className="word3">DISCOUNT</div>
                    </div>
                </h1>
                <section className={'five'}>
                    <article>
                        <div>
                            <ul>
                                <li><img src={img1} alt={'a'} /></li>
                                <li><img src={img2} alt={'b'} /></li>
                                <li><img src={img3}  alt={'c'}/></li>
                                <li><img src={img4}  alt={'d'} /></li>
                                <li><img src={img5} alt={'e'} /></li>
                                <li><img src={img6} alt={'f'} /></li>
                                <li><img src={img7} alt={'g'} /></li>
                            </ul>
                        </div>
                    </article>
                </section>
            </div>
        );
}

export default TopProducts;