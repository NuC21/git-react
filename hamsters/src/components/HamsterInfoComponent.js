import React from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


  function RenderHamster({hamster}) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={hamster.image} alt={hamster.name} />
          <CardBody>
            <CardText>{hamster.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }



  function HamsterInfo(props) {
    if (props.hamsters) {
      return (
        <div className="container">
          <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/species">Species</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.hamster.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.hamster.name}</h2>
                        <hr />
                    </div>
          </div>
          <div className="row">
          <RenderHamster hamster={props.hamster} />
          </div>
        </div>
      );
    }
    return <div />;
  }


export default HamsterInfo;
