function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>

      <div className="profile-card">
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;