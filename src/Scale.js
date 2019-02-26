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
      width = window.innerWidth;
      mobile = false;
      tablet = false;
      desktop = false;
      if (width >= 1025) desktop = true;
      if (width <= 1024 && width >= 481) tablet = true;
      if (width <= 480) mobile = true;
      if (desktop && !isNaN(this.props.desktopScaleTo)) {
        return this.props.desktopScaleTo
          ? Math.floor((window.innerWidth / this.props.desktopScaleTo) * 100)
          : 100;
      }
      if (tablet && !isNaN(this.props.tabletScaleTo)) {
        return this.props.tabletScaleTo
          ? Math.floor((window.innerWidth / this.props.tabletScaleTo) * 100)
          : 100;
      }
      if (mobile && !isNaN(this.props.mobileScaleTo)) {
        return this.props.mobileScaleTo
          ? Math.floor((window.innerWidth / this.props.mobileScaleTo) * 100)
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
    style.zoom = (this.state ? this.state.zoom : 100) + '%';
    console.log('MY ZOOM', style.zoom);
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
