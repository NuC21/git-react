import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';




function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Robos</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Robos</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>We Love Roborovski Hamsters</h3>
                    <p>Highlighting to the WORLD why Roborovski's are the best pets</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At A Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Lifespan:</dt>
                                <dd className="col-6">2-3 Years</dd>
                                <dt className="col-6">Mass:</dt>
                                <dd className="col-6">0.71 – 0.88 oz (Adult)</dd>
                                <dt className="col-6">Length:</dt>
                                <dd className="col-6">1.8-2 inches (Adult)</dd>
                                <dt className="col-6">Scientific name:</dt>
                                <dd className="col-6">Phodopus roborovskii</dd>
                            </dl>
                        </CardBody>
                    </Card>  
                </div>
                <div className="col">
                <Card className="bg-light mt-3">    
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">- Since they are desert animals, they don't consume a lot of liquids. </p>
                                <p className="mb-0">- As the smallest hamster, they run very fast and don't like to be handled as much as other Dwarfs. </p>
                                <p className="mb-0">- Small means: they are economical to feed and a dry mix works great. </p>
                                <p className="mb-0">- They can eat small insects (like mealworms), cheese, meats in small quantities. </p>
                            
                            </blockquote>
                        </CardBody>
                    </Card>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">The Roborovski hamster, also known as the desert hamster or Robo dwarf hamster, is the smallest species of hamster.</p>
                                <footer className="blockquote-footer">Derived from the the deserts of Central Asia{' '}
                                    <cite title="Source Title">"Wikipedia"</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                    
                </div>
            </div>
           
        </div>
    )
}

export default About;