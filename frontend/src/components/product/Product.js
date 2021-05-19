import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';




const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 :'600px',
        height                :'300px',
        backgroundColor       :'lightgreen',
        overflow              : 'hidden'
    }
};

Modal.setAppElement('#root')


const Product = ({ product, col }) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                    alt="a"
                    onClick={openModal}
                />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <i className={'fas fa-times-circle hundred'} onClick={closeModal}/>
                    <h4 className="middle">About This Product</h4>
                    <p>{product.description}</p>
                    <Link to="/cart"  className={'arm'}>Cart</Link>
                    <Link to="/me" className={'arm'} >Profile</Link>
                </Modal>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}/>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                    </div>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
