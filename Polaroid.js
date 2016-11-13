import React, { Component } from 'react';



export default class Polaroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
    this.toggleHover=this.toggleHover.bind(this);
  }

  toggleHover () {
    this.setState({
      hovered: !this.state.hovered,
    })
  }

  render() {
    let { text,imageShadow, imageMargin, imageWidth, imageHeight,imgClass, imgSrc,
      frameDisplay, frameMargin, frameHeight, frameWidth, frameShadow, frameColor,
      zoom, hoverFrameShadow, rotate
    } = this.props;
    let imageProperties = {
      boxShadow: imageShadow || '0 0 1px black',
      margin: imageMargin || '1em auto 0',
      width: imageWidth || '18em',
      height: imageHeight || '18em',
    }

    let containerProperties = {
      transform: `rotate(${rotate || '0'}deg)`,
      textAlign: 'center',
      display: frameDisplay || 'inline-block',
      margin: frameMargin || '1.5em',
      verticalAlign: 'bottom',
      height: frameHeight || '25em',
      width: frameWidth || '20em',
      boxShadow: frameShadow || '0 0 15px black, 0 0 5px black',
      backgroundColor: frameColor || 'white',
    }

    if (this.state.hovered) {
      containerProperties.transform = zoom || 'scale(1.3)';
      containerProperties.boxShadow = hoverFrameShadow ||  ' 0 0 45px black';
    }

    return (
      <div style={containerProperties} className='polaroidFrame' >
        <img className={imgClass} style={imageProperties} src={imgSrc || 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/20157_103262589700319_6142195_n.jpg?oh=6089448d44d9e6da2d1fbca18cb63457&oe=588C007F'} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}  />
        <h4 className='polaroid-text'>{text}</h4>
      </div>
    )
  }
}

Polaroid.propTypes = {
  imgSrc: React.PropTypes.string,
  zoom: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  imageShadow: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  frameShadow: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  hoverFrameShadow: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  imageMargin: React.PropTypes.string,
  imageWidth: React.PropTypes.string,
  imageHeight: React.PropTypes.string,
  frameDisplay: React.PropTypes.string,
  frameMargin: React.PropTypes.string,
  frameWidth: React.PropTypes.string,
  frameHeight: React.PropTypes.string,
  frameColor: React.PropTypes.string,
  imgClass: React.PropTypes.string,
  text: React.PropTypes.string,
  rotate: React.PropTypes.string,
}
