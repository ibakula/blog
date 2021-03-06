import { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleContainer from '../containers/article-container';
import WelcomeStripeContainer from '../containers/welcome-stripe-container';
import RecommendedSectionContainer from '../containers/recommended-section-container';
import CommentSectionContainer from '../containers/comment-section-container';
import { withRouter } from 'react-router';

class ArticleLayout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <>
        {localStorage.getItem("email") != null && <WelcomeStripeContainer pageName="article" />}
        <ArticleContainer articleId={this.props.match.params.articleId} />
        <RecommendedSectionContainer articleId={this.props.match.params.articleId} />
        <CommentSectionContainer articleId={this.props.match.params.articleId} />
      </>
    );
  }
};

export default withRouter(ArticleLayout);