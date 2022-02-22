import React from "react";

const footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-six tab-full pull-right social">
                    <ul className="footer-social">
                        <li>
                            <a href="https://www.linkedin.com/in/rafael-herrera-amedey/">
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="twitter.com">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rafael-ha">
                                <i className="fa fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="instagram.com">
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