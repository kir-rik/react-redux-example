import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export default class App extends React.PureComponent {
  state = {
    userName: '',
  };

  handleChange = (value) => this.setState({ userName: value });

  render() {
    const { userName } = this.state;

    return (
      <main>
        <Header userName={userName} />
        <Main handleChange={this.handleChange} />
        <Footer />
      </main>
    );
  }
}
