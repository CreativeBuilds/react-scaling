'use strict';

import React from 'react';
import Zoom from './Zoom';

class Scale extends React.Component {
  constructor(props) {
    super(props);
    let zoom;
    let mobile = false;
    let tablet = false;
    let desktop = false;
    let width = window.innerWidth;
    this.findZoom = () => {
      if (width >= 1025) desktop = true;
      if (width <= 1024 && width >= 481) tablet = true;
      if (width <= 480) mobile = true;
      if (desktop && this.props.desktopZoomTo) {
        return this.props.desktopZoomTo
          ? Math.floor((window.innerWidth / this.props.desktopZoomTo) * 100)
          : 100;
      }
      if (tablet && this.props.tabletZoomTo) {
        return this.props.tabletZoomTo
          ? Math.floor((window.innerWidth / this.props.tabletZoomTo) * 100)
          : 100;
      }
      if (mobile && this.props.mobileZoomTo) {
        return this.props.mobileZoomTo
          ? Math.floor((window.innerWidth / this.props.mobileZoomTo) * 100)
          : 100;
      }
      return this.props.scaleTo
        ? Math.floor((window.innerWidth / props.scaleTo) * 100)
        : 100;
    };
    zoom = this.findZoom();
    this.state = {
      width: 0,
      zoom
    };
  }

  rescale = () => {
    this.setState(currentState => {
      let newState = { ...currentState };
      newState.width = window.innerWidth;
      newState.height = window.innerHeight;
      newState.zoom = this.findZoom();
      return newState;
    });
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.rescale);
  };
  componentDidMount = () => {
    window.addEventListener('resize', this.rescale);
  };
  render() {
    let style = this.props.style || {};
    style.zoom = this.state.zoom + '%';
    return (
      <div
        className={`scale-component ${this.props.className || ''}`}
        style={style}
        id={this.props.id || null}
      >
        {this.props.children}
      </div>
    );
  }
}

Scale.displayName = 'ScaleComponent';

// Uncomment properties you need
// ScaleComponent.propTypes = {};
// ScaleComponent.defaultProps = {};

export default Scale;
