import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Species from './SpeciesComponent';
import HamsterInfo from './HamsterInfoComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchHamsters, fetchComments, fetchPromotions, fetchSpecies, postFeedback } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        hamsters: state.hamsters,
        species: state.species
  ///      comments: state.comments,
  ///      partners: state.partners,
  ///      promotions: state.promotions 
    
    }
}

const mapDispatchToProps = {
 ///   postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    fetchHamsters: () => (fetchHamsters()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchSpecies: () => (fetchSpecies()),
 ///   fetchComments: () => (fetchComments()),
 ///   fetchPromotions: () => (fetchPromotions()),
 ///   fetchPartners: () => (fetchPartners()),
     postFeedback: feedback => (postFeedback(feedback))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchHamsters();
    ///    this.props.fetchComments();
   ///     this.props.fetchPromotions();
        
        this.props.fetchSpecies();
    }

    
    render ( ) {
        const HomePage = () => {
            return (
                <Home
                hamster={this.props.hamsters.hamsters.filter(hamster => hamster.featured)[0]}
                hamstersLoading={this.props.hamsters.isLoading}
                hamstersErrMess={this.props.hamsters.errMess}
         ///       promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          ///      promotionLoading={this.props.promotions.isLoading}
          ///      promotionErrMess={this.props.promotions.errMess}
                specie={this.props.species.species.filter(specie => specie.featured)[0]}
                specieLoading={this.props.species.isLoading}
                specieErrMess={this.props.species.errMess}
                />
            );
        }

        const HamsterWithId = ({match}) => {
            return (
                <HamsterInfo
                hamster={this.props.hamsters.hamsters.filter(hamster => hamster.id === +match.params.hamsterId)[0]}
                    isLoading={this.props.hamsters.isLoading}
                    errMess={this.props.hamsters.errMess}
                /> 
            );
        }; 

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/species' render={() => <Species hamsters={this.props.hamsters} />} />
                            <Route path='/species/:hamsterId' component={HamsterWithId} />
                            <Route exact path='/contactus' render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} /> } />                            
                            <Route exact path='/aboutrobos' render={() => <About species={this.props.species} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));