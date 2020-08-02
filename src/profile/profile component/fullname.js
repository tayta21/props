import React from 'react';
import PropTypes from "prop-types";

const fullname = props =>{
    const styleObject = {"fontFamily":"\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif","fontSize":"23px","letterSpacing":"-1.8px","wordSpacing":"6px","color":"#000000","fontWeight":"400","textDecoration":"none solid rgb(68, 68, 68)","fontStyle":"normal","fontVariant":"normal","textTransform":"none"}

    return(
        <div>
            <p style={styleObject}>this is {props.name}</p>
            <div>
             {props.children}
            </div>
        </div>
    )
}
fullname.defaultProps = {
    fullname:""
   };

fullname.propTypes = {
    stringProp: PropTypes.string,
   };

export default fullname;
