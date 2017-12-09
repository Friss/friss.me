import React from 'react';

import me from '../imgs/me.jpg';
import theorycraft from '../imgs/theorycraft.png';
import ritgram from '../imgs/ritgram.png';
import twitch from '../imgs/twitch.png';
import synmail from '../imgs/synmail.png';

import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';

const BostonGoogleMaps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{lat: 42.36, lng: -71.059}} />
  ))
);

const IndexPage = () => (
  <div>
    <section className="section is-small">
      <div className="container">
        <p className="subtitle is-2 has-text-centered">
          Name's Friss. Zachary Friss.
        </p>
        <div className="columns is-align-items-center">
          <div className="column is-one-third">
            <figure>
              <img className="image me" src={me} />
            </figure>
          </div>
          <div className="column">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin ornare magna eros, eu pellentesque tortor vestibulum
                ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin ornare magna eros, eu pellentesque tortor vestibulum
                ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon">
                    <i className="fa fa-envelope-o" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i className="fa fa-twitter" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-medium projects">
      <div className="container">
        <p className="title is-1 has-text-centered">Projects</p>
        <p className="subtitle is-5 has-text-centered">
          Building things is a little (okay big) passion of mine.
        </p>
        <div className="columns has-text-centered projects-row">
          <div className="column">
            <div className="columns">
              <div className="column is-one-third">
                <figure>
                  <img className="image" src={theorycraft} />
                </figure>
              </div>
              <div className="column has-text-left">
                <div className="project-title">
                  <h1 className="subtitle is-3 is-inline-block">
                    TheoryCraft.gg
                  </h1>
                  <i className="fa fa-chevron-right fa-2x" />
                </div>
                <p>
                  Analyze and review your Counter Strike: Global Offensive
                  demo’s to improve your game.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-one-third">
                <figure>
                  <img className="image" src={ritgram} />
                </figure>
              </div>
              <div className="column has-text-left">
                <div className="project-title">
                  <h1 className="subtitle is-3 is-inline-block">
                    NyneStorm.com
                  </h1>
                  <i className="fa fa-chevron-right fa-2x" />
                </div>
                <p>
                  Track your stats for Islands of Nyne and compare yourself
                  against others.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns has-text-centered projects-row">
          <div className="column">
            <div className="columns">
              <div className="column is-one-third">
                <figure>
                  <img className="image" src={twitch} />
                </figure>
              </div>
              <div className="column has-text-left">
                <div className="project-title">
                  <h1 className="subtitle is-3 is-inline-block">
                    Twitch Notifier
                  </h1>
                  <i className="fa fa-chevron-right fa-2x" />
                </div>
                <p>
                  Get notified when your favorite Twitch streamers come online.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-one-third">
                <figure>
                  <img className="image" src={synmail} />
                </figure>
              </div>
              <div className="column has-text-left">
                <div className="project-title">
                  <h1 className="subtitle is-3 is-inline-block">SyN Mail</h1>
                  <i className="fa fa-chevron-right fa-2x" />
                </div>
                <p>
                  Take your email to the next level with this modern and sleek
                  email client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-info is-fullheight blog-background-image">
      <div className="blog-overlay" />

      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            Out in the Open - A Tale of Insecure Public Profiles
          </h1>
          <div className="columns">
            <div className="column is-half">
              <p className="subtitle is-5">
                This year for Christmas I got my fiance a medical ID bracelet.
                Rather than being engraved with her information, it has an
                online profile that a first responder or doctor can view in
                three ways, scanning a QR code, entering the band ID and pin
                online or calling the service and providing the ID and pin.
              </p>
              <a
                className="button is-primary is-outlined"
                href="https://justdev.in"
                target="_blank"
              >
                Read my blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-small">
      <div className="container">
        <p className="subtitle is-2 has-text-centered">Contact me</p>
        <div className="columns is-align-items-center">
          <div className="column is-half">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your name" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Your message..." />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link">Cancel</button>
              </div>
            </div>
          </div>
          <div className="column">
            <BostonGoogleMaps
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{height: `100%`}} />}
              containerElement={<div style={{height: `400px`}} />}
              mapElement={<div style={{height: `100%`}} />}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;
