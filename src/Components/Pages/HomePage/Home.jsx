import React from 'react'
import Academy from './Academy/Academy'
import Brand from './Brand/Brand'
import Slide from './HomeSlider/Slide'
import Students from './Students/Students'
import Umbrella from './UmbrellaX/Umbrella'
import Contact from './Contact/Contact'
import StudentsCase from './StudentsCase/StudentsCase'
import InfoBlog from './InfoBlog/InfoBlog'
import XID from './XID/XID'
import UmbrellaTeam from './UmbrellaTeam/UmbrellaTeam'
import Amazing from './Amazing/Amazing'
import Digital from './Digital/Digital'
import InformationBlog from './InformationBlog/InformationBlog'
import UmbrellaLaboratories from './UmbrellaLaboratories/UmbrellaLaboratories'

const Home = () => {
  return (
   <>
    <Slide/>
    <Brand/>
    <Academy/>
    <Umbrella/>
    <Students/>
    <Contact/>
    <StudentsCase/>
    <InformationBlog/>
    <UmbrellaLaboratories/>
    <InfoBlog/>
    <XID/>
    <UmbrellaTeam/>
    <Amazing/>
    <Digital/>
   </>
  )
}

export default Home