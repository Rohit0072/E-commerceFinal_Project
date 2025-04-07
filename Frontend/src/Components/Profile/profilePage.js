import { useAuth } from "../../context/AuthContext";
import "./user-profile.css";
import { Plus } from "lucide-react";

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="user-profile__container">
      <div className="user-profile__card">
        <div className="user-profile__header">
          <button className="user-profile__add-button" aria-label="Add">
            <Plus className="user-profile__icon" />
          </button>
        </div>

        <div className="user-profile__content">
          <div className="user-profile__field-group">
            <label className="user-profile__label">Username</label>
            <h1 className="user-profile__username">{user?.name || "Unknown"}</h1>
          </div>

          <div className="user-profile__field-group">
            <label className="user-profile__label">Email</label>
            <div className="user-profile__email-container">
              <span className="user-profile__email-placeholder">{user?.email || "empty"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="user-profile__footer">
        <button onClick={logout} className="user-profile__logout-button">Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
