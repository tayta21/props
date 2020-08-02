import React from 'react';
import PropTypes from "prop-types";

const bio = props => {
    const styleObject = { "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif", "fontSize": "23px", "letterSpacing": "-1.8px", "wordSpacing": "6px", "color": "#000000", "fontWeight": "400", "textDecoration": "none solid rgb(68, 68, 68)", "fontStyle": "normal", "fontVariant": "normal", "textTransform": "none" }

    return (
        <div>
            <p style={styleObject}>{props.bio} is one of the two eponymous protagonists
      from the Adult Swim animated television series Rick and Morty.</p>
        </div>
    )
}
bio.defaultProps = {
    bio: ""
};

bio.propTypes = {
    stringProp: PropTypes.string,
};

export default bio;
