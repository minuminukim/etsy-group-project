import './UserDetails.css';

const UserDetails = ({ username, profilePhoto, bio }) => {
  return (
    <div className="user-details">
      <div className="user-details-left">
        <img
          src={profilePhoto}
          alt={username}
          className="user-details-avatar"
        />
      </div>
      <div className="user-details-right">
        <h1 className="user-details-username">{username}</h1>
        <p className="user-details-bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserDetails;
