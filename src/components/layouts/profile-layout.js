import { Component } from 'react';
import ProfileContainer from '../containers/profile-container';
import WelcomeStripeContainer from '../containers/welcome-stripe-container';

export default class Profile extends Component {
  render() {
    return (
      <>
        {localStorage.getItem("email") != null && <WelcomeStripeContainer pageName="profile" />}
        <ProfileContainer />
      </>
    );
  }
};