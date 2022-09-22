import React from 'react';
import { IconContainer, IconLink, IconBlog } from './FooterIconsStyle';
import { BsTwitter} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs'

const FooterIcons = () => {
    return (
        <IconContainer>
            <IconBlog>
                <IconLink href='https://www.facebook.com/' target= '_blank'><BsTwitter/></IconLink>
            </IconBlog>
            <IconBlog>
                <IconLink href='https://twitter.com/?lang=en' target='_blank'><FaFacebookF /></IconLink>
            </IconBlog>
            <IconBlog>
                <IconLink href='https://www.google.com/' target= '_blank'><BsGoogle /></IconLink>
            </IconBlog>
        </IconContainer>
    )
}

export default FooterIcons