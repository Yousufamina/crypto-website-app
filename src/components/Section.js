import React , {Component} from 'react';

class Section extends Component {
    render() {
        return (
            <div>
                <section className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <i className="bi-window m-auto text-primary"></i></div>
                                    <h3>Trusted and regulated</h3>
                                    <p className="lead mb-0">We ensure the exchange is a licenced company and complies to regulations!</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex"><i
                                        className="bi-layers m-auto text-primary"></i></div>
                                    <h3>Wallet security</h3>
                                    <p className="lead mb-0">Common security measures include cold wallet storage, multi-signature withdrawal process and two factor authentication.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex"><i
                                        className="bi-terminal m-auto text-primary"></i></div>
                                    <h3>Beginner-friendly</h3>
                                    <p className="lead mb-0">We assess the user-friendliness of the desktop and mobile application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Section;