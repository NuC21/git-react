import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMess}) {
    console.log(isLoading, item, errMess)
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.25) translateY(75%)'
            }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}


function Home(props) {
    return (
        
        <div className="container">
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>We Love Roborovski Hamsters</h3>
                    <p>Highlighting to the WORLD why Roborovski's are the best pets</p>
                    <video width="500" height="500" controls autoplay loop >
                        <source src="/assets/images/hamonwheel.mp4"  type="video/mp4"/>
                        Your browser does not support the video tag. So you can't see Hammies Running.
                    </video>
                </div>
            </div>
               
           
        </div>
    );
}

export default Home;   