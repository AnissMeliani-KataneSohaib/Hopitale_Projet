import React,{useState} from 'react';
import style from "./dashboard.module.css"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

export const AdminDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const renderContent = () => {
    switch(selectedItem) {
      case 'Home':
        return <section className={style.main}>
        <div className={style.main_top}>
          <h1>Skills</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className={style.main_skills}>
          <div className={style.card}>
            <i className="fas fa-laptop-code"></i>
            <h3>Web developemt</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className={style.card}>
            <i className="fab fa-wordpress"></i>
            <h3>WordPress</h3>
            <p>Join Over 3 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className={style.card}>
            <i className="fas fa-palette"></i>
            <h3>graphic design</h3>
            <p>Join Over 2 million Students.</p>
            <button>Get Started</button>
          </div>
          <div className={style.card}>
            <i className="fab fa-app-store-ios"></i>
            <h3>IOS dev</h3>
            <p>Join Over 1 million Students.</p>
            <button>Get Started</button>
          </div>
        </div>
        <section className={style.main_course}>
          <h1>My courses</h1>
          <div className={style.course_box}>
            <ul>
              <li className={style.active}>In progress</li>
              <li>explore</li>
              <li>incoming</li>
              <li>finished</li>
            </ul>
            <div className={style.course}>
              <div className={style.box}>
                <h3>HTML</h3>
                <p>80% - progress</p>
                <button>continue</button>
                <i className="fab fa-html5 html"></i>
              </div>
              <div className={style.box}>
                <h3>CSS</h3>
                <p>50% - progress</p>
                <button>continue</button>
                <i className="fab fa-css3-alt css"></i>
              </div>
              <div className={style.box}>
                <h3>JavaScript</h3>
                <p>30% - progress</p>
                <button>continue</button>
                <i className="fab fa-js-square js"></i>
              </div>
            </div>
          </div>
        </section>
      </section>;
      case 'Profile':
        return <h1>This is Profile Page!</h1>;
      case 'Wallet':
        return <h1>Wallet Content Goes Here!</h1>;
      case 'Analytics':
        return <h1>Analytics Dashboard!</h1>;
      case 'Tasks':
        return <h1>Tasks Page!</h1>;
      case 'Settings':
        return <h1>Settings Page!</h1>;
      case 'Help':
        return <h1>Help Page!</h1>;
      case 'Log out':
        return <h1>Logged Out!</h1>;
      default:
        return <h1>Welcome to Home!</h1>;
    }
  };
  return (
    <>
      <div className={style.containerr}>
        <main>
          <nav>
            <ul>
              <li><a href="moderateur/login/Home" onClick={() => handleItemClick('Home')}>
                <i className="fas fa-home" style={{color:'white'}}></i>
                <span className={style.nav_item}>Home</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Profile')}>
                <i className="fas fa-user"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Profile</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Wallet')}>
                <i className="fas fa-wallet"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Wallet</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Analytics')}>
                <i className="fas fa-chart-bar"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Analytics</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Tasks')}>
                <i className="fas fa-tasks"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Tasks</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Settings')}>
                <i className="fas fa-cog"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Settings</span>
              </a></li>
              <li><a href="#" onClick={() => handleItemClick('Help')}>
                <i className="fas fa-question-circle"  style={{color:'white'}}></i>
                <span className={style.nav_item}>Help</span>
              </a></li>
              <li><a href="#" className={style.logout} onClick={() => handleItemClick('Log out')}>
                <i className="fas fa-sign-out-alt" ></i>
                <span className={style.nav_item}>Log out</span>
              </a></li>
            </ul>
          </nav>
        </main>
        <section className={style.main}>
          {renderContent()}
        </section>
      </div>
    </>
    

  );
};


