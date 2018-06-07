import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.scss';

export function NotFound({location: { pathname }}) {
    return (
      <div className="NotFound">
          <h2>Oops!</h2>
          <p>
              <strong>{pathname}</strong> is something that does not exist.<br/>
          </p>
          <p>
              Click <a href="/">here</a> to go back.
          </p>
      </div>
    );
}

NotFound.defaultProps = {
    location: {}
};

NotFound.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};

export default NotFound;