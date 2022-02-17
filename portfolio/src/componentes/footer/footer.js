import react from "react";
const footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-six tab-full pull-right social">
                    <ul className="footer-social">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-behance" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-dribbble" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-six tab-full">
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <i className="fa fa-long-arrow-up" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default footer;