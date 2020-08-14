import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {avatar_url, login, html_link} }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="user_avatar" style={{ width: '60px' }} className="round-img"></img>
            <h3>{login}</h3>
            <div>
                <a href={html_link} className="btn btn-dark btn-sm my-1" target="_blank" rel="noopener noreferrer" >More</a>
            </div>
        </div>
    )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem;