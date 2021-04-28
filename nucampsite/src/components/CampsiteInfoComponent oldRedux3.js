import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component {
    
  constructor(props) {
      super(props);

      this.state = {
          modal: false,
          rating: "1",
          author: "",
          text: ""
          }
      this.toggle = this.toggle.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      alert(`Current state is: rating is ${this.state.rating},'author is '${this.state.author},' your text is '${this.state.text}`)
  }
  
toggle() {
  this.setState({modal: !this.state.modal})
}

handleInputChange(event) {
  const target = event.target
  const name = target.name
  const value = target.value
  this.setState({[name]: value}) 
}

toggleModal() {
  this.setState({
      isModalOpen: !this.state.isModalOpen
  });

}

handleSubmit(values) {
  this.toggleModal();
  this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
}

  render(){
    return (
        <div className="col-md-10">
                <Button onClick={this.toggle} type="submit" outline><i className="fa fa-pencil fa-lg mr-2"></i>Submit Comment</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
            <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control"
                                        onChange ={this.handleInputChange}
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                       </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Author</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        onChange ={this.handleInputChange}
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" md={2}>Comment</Label>
                              
                                    <Control.textarea model=".text" id="text" name="text"
                                        divs="12"
                                        className="form-control"
                                        onChange ={this.handleInputChange}
                                    />
                            </div>
                            <div className="form-group">
                                    <Button type="submit" color="primary" onClick = {this.handleSubmit}>
                                        Submit Comment
                                    </Button>
                            </div>
                        </LocalForm>
                        </ModalBody>
                        </Modal>
                    </div>
    );
  }
}


  function RenderCampsite({campsite}) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RenderComments({comments, addComment, campsiteId}) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => [
            <p>{comment.text}</p>,
            <p>
             {"-- "}{comment.author}{", "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>,
          ])}
          <CommentForm campsiteId={campsiteId} addComment={addComment} />
        </div>
      );
    }
    return <div />;
  }

  function CampsiteInfo(props) {
    if (props.campsite) {
      return (
        <div className="container">
          <div className="div">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
          </div>
          <div className="div">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments 
              comments={props.comments}
              addComment={props.addComment}
              campsiteId={props.campsite.id}
          />
          </div>
        </div>
      );
    }
    return <div />;
  }


export default CampsiteInfo;
