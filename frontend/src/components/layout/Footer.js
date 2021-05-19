import React, { useEffect, useState } from 'react';
import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import {clearErrors, forgotPassword} from "../../store/actions/userActions";




const Footer = () => {
    const [email, setEmail] = useState('')
    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('email', email);
        dispatch(forgotPassword(formData))
    }
    function toggleDarkLight() {
        const  body = document.querySelector("body");
        const currentClass = body.className;
        body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
    }
    return (
        <>
                <footer className="footer">
                    <div className="main-content">
                        <div className="left box">
                            <h2>About Us</h2>
                            <div className="content">
                                <p>We've created a sample About Us template designed to work well for virtually any
                                    online store, blog, or website. Just fill in the brackets with your company's
                                    information and you'll have a professional About Us page written in minutes. If you
                                    want to put a personal touch on your page (which we highly recommend), check out the
                                    About Us examples below the template.</p>
                                <div className="social">
                                    <a href="http://facebook.com" target="link"><span
                                        className="fab fa-facebook-f"/></a>
                                    <a href="http://twitter.com" target="link"><span className="fab fa-twitter"/></a>
                                    <a href="http://instagram.com" target="link"><span
                                        className="fab fa-instagram"/></a>
                                    <a href="http://youtube.com" target="link"><span className="fab fa-youtube"/></a>
                                    <button type="button" name="dark_light" onClick={() => toggleDarkLight()}
                                            title="Toggle dark/light mode">🌛
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="center box">
                            <h2>Address</h2>
                            <div className="content">
                                <div className="place">
                                    <span className="fas fa-map-marker-alt"/>
                                    <span className="text"> Armenia, Gyumri</span>
                                </div>
                                <div className="phone">
                                    <span className="fas fa-phone-alt"/>
                                    <span className="text"> +37498-94-22-55</span>
                                </div>
                                <div className="email">
                                    <span className="fas fa-envelope"/>
                                    <span className="text"> ruben.araqelyan.1993@mail.ru</span>
                                    <br/>
                                    <span className="fas fa-envelope two"/>
                                    <span className="text"> martin.asatryan.20@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="right box">
                            <h2>Contact Us</h2>
                            <div className="content">
                                <form action="#" onSubmit={submitHandler} id="contacts">
                                    <div className="email">
                                        <div className="text">Email *</div>
                                        <input type="email" required
                                               className="val"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="msg">
                                        <div className="text">Message *</div>
                                        <textarea cols="40" rows="4" required/>
                                    </div>
                                    <div className="btn">
                                        <button type={"submit"}
                                                className={'btn1 btn2'}
                                                disabled={loading ? true : false}>
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer;