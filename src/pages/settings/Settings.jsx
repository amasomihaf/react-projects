import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete  Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="./image/profile.jpg" alt="profile" />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <label>Username</label>
            <input type="text" placeholder="Hassan" />
            <label>Email</label>
            <input type="email" placeholder="hassan@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
