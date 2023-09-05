import React from 'react'

type Props = {}

const Register = (props: Props) => {
    return (
        <div>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Login/Register</h1>
                            <nav className="d-flex align-items-center">
                                <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                                <a href="login">Login/</a> <a href="register">Register</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src="img/login.jpg" />
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                    <a className="primary-btn" href="register">Create an Account</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Create new account</h3>
                                <form className="row login_form" action="https://preview.colorlib.com/theme/karma/contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Username" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control" id="name" name="name" placeholder="Email" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Password" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder=" Confirm Password" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        {/* <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label for="f-option2">Keep me logged in</label>
                                        </div> */}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Register</button>
                                        {/* <a href="#">Forgot Password?</a> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register