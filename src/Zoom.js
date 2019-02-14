'use strict';

import React from 'react';

import PropTypes from 'prop-types';

let Zoom = props => {
  let zoom = props.zoom;
  let IF = !(typeof zoom === 'string' && zoom.includes('%'));
  if (IF && !isNaN(parseFloat(props.zoom))) {
    zoom = Math.floor(parseInt(zoom)) + '%';
  }
  let style = {
    zoom: zoom || '100%',
    width: '100%',
    height: '100%'
  };
  style = Object.assign(this.props.style || {}, style);
  return (
    <div className='zoom-component' style={style}>
      {props.children || null}
    </div>
  );
};

Zoom.displayName = 'ZoomComponent';

Zoom.defaultProps = {
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Zoom;
