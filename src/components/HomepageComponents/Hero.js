import React from 'react'
import { Carousel } from 'react-bootstrap';
import {makeStyles} from '@material-ui/core';
import {COLORS} from '../../styles/color.styles';
import background from '../../assets/image/photo2.jpg'
import background2 from '../../assets/image/eco-friendly.jpg'
import mountain from '../../assets/image/photo3.jpg'

const Hero = () => {
  const classes = useStyles()

  return (
    <Carousel controls={false} fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img src={background} className={classes.HeroImages}/>
        <Carousel.Caption>
          <h3 className={classes.Heroh1}>REDUCE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} pause={false}>
        <img src={background2} className={classes.HeroImages}/>
        <Carousel.Caption>
          <h3 className={classes.Heroh1}>REUSE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} pause={false}>
        <img src={mountain} className={classes.HeroImages}/>
        <Carousel.Caption>
          <h3 className={classes.Heroh1}>RECYCLE</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

const useStyles = makeStyles((theme)=>({
  Heroh1:{
      fontSize: 'clamp(3rem,8vw,6rem)',
      marginBottom: '1.5rem',
      letterSpacing: '3px',
      padding: '0 1rem',
      fontWeight:'bolder',
      color: COLORS.YELLOW2,
      textShadow: '2px 2px #000'
  },
  HeroImages:{
    alignItems:'center',
    OObjectFit: 'cover',
    objectFit: 'cover',
    width: '100%',
    height: '80vh'

  }
}))

export default Hero
