import { Component, createRef } from 'react';
import NavigationBarView from '../views/navigation-view';
import * as navigationApi from '../../api/navigation-api';
import * as api from '../../api/session-api';
import { connect } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.searchFieldRef = createRef();
  }

  handleSearch(e) {
    /* ToDo: Script search function */
    const searchText = this.searchFieldRef.current.value;
    console.log(searchText);
    navigationApi.searchForTerm(searchText);
  }

  handleLogout(e) {
    e.preventDefault();
    api.logout();
  }

  render() {
    return (
      <NavigationBarView onLogout={this.handleLogout} loggedOut={this.props.loggedOut}>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={this.searchFieldRef} onKeyPress={(e) => { if (e.key == 'Enter') { e.preventDefault(); } }} />
          <Button variant="outline-success" onClick={this.handleSearch} className="mt-2 mt-sm-0">Search</Button>
        </Form>
      </NavigationBarView>
    );
  }
};

function mapStateToProps(store) {
  return {
    loggedOut: (!store.navigationState.loggedIn)
  };
}

export default connect(mapStateToProps)(NavigationContainer);