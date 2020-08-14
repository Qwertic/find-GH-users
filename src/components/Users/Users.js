import React from 'react';
import UsersItem from '../UserItem/UserItem';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={usersStyle}>
                {users.map(user => (
                    <UsersItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}
Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '.5rem'
}
export default Users;
