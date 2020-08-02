import React from 'react';
import PropTypes from "prop-types";

const profession = props =>{
    const styleObject = {"fontFamily":"\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif","fontSize":"23px","letterSpacing":"-1.8px","wordSpacing":"6px","color":"#000000","fontWeight":"400","textDecoration":"none solid rgb(68, 68, 68)","fontStyle":"normal","fontVariant":"normal","textTransform":"none"}
    console.log('profession:', props)
    return(
        <div>
            <p style={styleObject}>he is a{props.profession}</p>
            <button onClick={() => props.alertmyinput(`i said don't click on ${props.name}`)}>
                don't click
            </button>
            {props.prof}
        </div>
    )
}
profession.defaultProps = {
    prof:''
   };

profession.propTypes = {
    stringProp: PropTypes.string,
   };

export default profession;
