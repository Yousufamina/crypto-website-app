import React , {Component} from 'react';

class MainContent extends Component {
    render() {
        return (
            <div>
                <section className="showcase">
                    <div className="container-fluid p-0">
                        {this.props.contents.map((ele,ind)=> {
                            if(ind % 2 === 0) {
                                    return(
                                        <div className="row g-0">
                                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                                <img className="imgSrc" src={ele.image} alt="app screen shot" />
                                            </div>
                                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                                <h2>{ele.heading}</h2>
                                                <p className="lead mb-0">
                                                    {ele.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                            } else {
                                return(
                                    <div className="row g-0">
                                        <div className="col-lg-6 text-white showcase-img">
                                            <img className="imgSrc" src={ele.image} alt="app screen shot"/>
                                        </div>
                                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                            <h2>{ele.heading}</h2>
                                            <p className="lead mb-0">
                                                {ele.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default MainContent;