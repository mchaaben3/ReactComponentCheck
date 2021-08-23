import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
const Icons = () => {
    return (
        <div className="footer">
        
          <a href="#"><AiFillFacebook  size={30} /></a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"> <AiOutlineTwitter size={30} /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><AiFillLinkedin size={30}/></a>
          
        </div>
    )
};
export default Icons;