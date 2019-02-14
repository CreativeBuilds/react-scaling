# react-scaling
### A solution for developers who want their app to look the same on all desktops no matter the screen size is finally here!

## Example
![Zooming in out to show scaling of image](/examples/zoom.gif)

## How To Install
* Download the git package with github desktop or a git client https://github.com/CreativeBuilds/react-scaling
* Import using `import {Zoom, Scale} from 'react-scaling` or for non ES6 `const {Zoom, Scale} = require('react-scaling')`

## How To Use
```javascript
import React from 'react';
import { Scale } from 'react-scaling';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <Scale scaleTo={1280}>
          <img src={yeomanImage} alt='Yeoman Generator' />
        </Scale>
        <div className='notice'>
          This text has <code>no scaling</code> the image above is set to scale
          relative to 1280px!
        </div>
      </div>
    );
  }
}
```

## Difference between Zoom and Scale
Zoom is a lower level component required by Scale. You can use it to dynamically set the zoom amount yourself. 
`<Zoom zoom={25}><MyContent/></Zoom>`
or if you want to scale relative to the page you can use 
`<Scale scaleTo={1280}><MyContent/></Zoom>` 
this will scale your content up or down depending on the users screen size relative to 1280 pixels. So if their screen is 640px is will set the zoom to 50% in order for it to look the same as those on larger screens.
