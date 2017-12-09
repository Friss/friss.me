import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bulma';
import './index.scss';

class Nav extends PureComponent {
  constructor() {
    super();

    this.state = {
      navOpen: false,
    };

    this.handleOpenNav = this.handleOpenNav.bind(this);
  }

  handleOpenNav() {
    this.setState(({navOpen}) => {
      return {navOpen: !navOpen};
    });
  }

  render() {
    const {navOpen} = this.state;

    return (
      <header className="nav is-shadowless">
        <div className="container">
          <span
            className={`nav-toggle ${navOpen ? 'is-active' : ''}`}
            onClick={this.handleOpenNav}
          >
            <span />
            <span />
            <span />
          </span>
          <div
            className={`nav-right nav-menu ${navOpen
              ? 'is-active has-text-centered'
              : ''}`}
          >
            <a className="nav-item">About</a>
            <a className="nav-item">Projects</a>
            <a className="nav-item">Contact</a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-linkedin" />
              </span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Zachary Friss"
      meta={[
        {name: 'description', content: 'Zachary Friss Boston based Developer.'},
        {name: 'keywords', content: 'zachary friss'},
      ]}
    />

    <section className="hero is-info is-fullheight background-image">
      <div className="overlay" />
      <div className="hero-head">
        <Nav />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Zachary Friss</h1>
          <h2 className="subtitle is-5">Developer. Laxer. Gamer.</h2>
          <span className="icon is-large">
            <i className="fa fa-3x fa-chevron-down scroll-down" />
          </span>
        </div>
      </div>
    </section>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
