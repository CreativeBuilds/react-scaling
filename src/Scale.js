'use strict';

import React from 'react';
import Zoom from './Zoom';

class Scale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      zoom: this.props.scaleTo
        ? Math.floor((window.innerWidth / props.scaleTo) * 100)
        : 100
    };
  }

  rescale = () => {
    this.setState(currentState => {
      let newState = { ...currentState };
      newState.width = window.innerWidth;
      newState.height = window.innerHeight;
      if (this.props.scaleTo) {
        newState.zoom = Math.floor(
          (window.innerWidth / this.props.scaleTo) * 100
        );
      }
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
    let style = {};
    style.zoom = this.state.zoom + '%';
    return (
      <div className='scale-component' style={style}>
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
