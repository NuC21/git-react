import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/species'>Species</Link></li>
                            <li><Link to='/aboutrobos'>About Robos</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/groups/287192058933524"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=Xq8rgSNNslQ"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="mailto:peaceiswithin@gmail.com"><i className="fa fa-envelope-o" /> hamsters@so.cute</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;