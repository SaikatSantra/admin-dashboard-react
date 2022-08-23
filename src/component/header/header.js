/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React from 'react';
import sideTogler from '../../assets/images/sidepanel-toggler.svg';
import notificationsdropdowntoggle from '../../assets/images/notifications-dropdown-toggle.svg'
import appiconholder from '../../assets/images/app-icon-holder.svg'
import iconholdermono from '../../assets/images/icon-holder-mono.svg'
import evenodd from '../../assets/images/evenodd.svg'
import applogo from '../../assets/images/app-logo.svg'
import bifiles from '../../assets/images/bi-files.svg'
import user from '../../assets/images/user.png'
import bihousedoor from '../../assets/images/bi-house-door.svg'
import submenuarrow from '../../assets/images/submenu-arrow.svg'
import bigear  from '../../assets/images/bi-gear.svg'

class Header extends React.Component {
    constructor() {
        super();
        
        this.activateLasers = (event)=>{
            const sidePanel = document.getElementById('app-sidepanel');
                if (sidePanel.classList.contains('sidepanel-visible')) {
                    console.log('visible');
                    sidePanel.classList.remove('sidepanel-visible');
                    sidePanel.classList.add('sidepanel-hidden');
                } else {
                    console.log('hidden');
                    sidePanel.classList.remove('sidepanel-hidden');
                    sidePanel.classList.add('sidepanel-visible');
                }
            console.log(event.target);
        };

        this.sidepanelclose = ()=>{
            const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
            sidePanelToggler.click();
        };
        this.searchmobiletrigger = () => {
            const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
const searchBox = document.querySelector('.app-search-box');
            searchBox.classList.toggle('is-visible');
	
            let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
            
            if(searchMobileTriggerIcon.classList.contains('fa-search')) {
                searchMobileTriggerIcon.classList.remove('fa-search');
                searchMobileTriggerIcon.classList.add('fa-times');
            } else {
                searchMobileTriggerIcon.classList.remove('fa-times');
                searchMobileTriggerIcon.classList.add('fa-search');
            }
        };


      }
    render() {
        return (
            <>
                <header className="app-header fixed-top">
                    <div className="app-header-inner">
                        <div className="container-fluid py-2">
                            <div className="app-header-content">
                                <div className="row justify-content-between align-items-center">





                                    <div className="col-auto">
                                        <a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" href="#" onClick={this.activateLasers}>
                                            <img src={sideTogler} className="sideTogler" alt="sideTogler" />
                                        </a>
                                    </div>


                                    <div className="search-mobile-trigger d-sm-none col" onClick={this.searchmobiletrigger}>
                                        <i className="search-mobile-trigger-icon fas fa-search"></i>
                                    </div>



                                    <div className="app-search-box col">
                                        <form className="app-search-form">
                                            <input type="text" placeholder="Search..." name="search" className="form-control search-input" />
                                            <button type="submit" className="btn search-btn btn-primary" value="Search">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>



                                    <div className="app-utilities col-auto">
                                        <div className="app-utility-item app-notifications-dropdown dropdown">
                                            <a className="dropdown-toggle no-toggle-arrow" id="notifications-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" title="Notifications">
                                                <img src={notificationsdropdowntoggle} className="sideTogler" alt="sideTogler" />
                                                <span className="icon-badge">3</span>
                                            </a>

                                            <div className="dropdown-menu p-0" aria-labelledby="notifications-dropdown-toggle">
                                                <div className="dropdown-menu-header p-3">
                                                    <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                                                </div>
                                                <div className="dropdown-menu-content">
                                                    <div className="item p-3">
                                                        <div className="row gx-2 justify-content-between align-items-center">
                                                            <div className="col-auto">
                                                                <img className="profile-image" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <div className="info">
                                                                    <div className="desc">Amy shared a file with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                                                    <div className="meta"> 2 hrs ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="link-mask" href="notifications.html"></a>
                                                    </div>
                                                    <div className="item p-3">
                                                        <div className="row gx-2 justify-content-between align-items-center">
                                                            <div className="col-auto">
                                                                <div className="app-icon-holder">
                                                                    <img src={appiconholder} className="sideTogler" alt="sideTogler" />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="info">
                                                                    <div className="desc">You have a new invoice. Proin venenatis interdum est.</div>
                                                                    <div className="meta"> 1 day ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="link-mask" href="notifications.html"></a>
                                                    </div>
                                                    <div className="item p-3">
                                                        <div className="row gx-2 justify-content-between align-items-center">
                                                            <div className="col-auto">
                                                                <div className="app-icon-holder icon-holder-mono">
                                                                    <img src={iconholdermono} className="sideTogler" alt="sideTogler" />

                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="info">
                                                                    <div className="desc">Your report is ready. Proin venenatis interdum est.</div>
                                                                    <div className="meta"> 3 days ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="link-mask" href="#"></a>
                                                    </div>
                                                    <div className="item p-3">
                                                        <div className="row gx-2 justify-content-between align-items-center">
                                                            <div className="col-auto">
                                                                <img className="profile-image" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <div className="info">
                                                                    <div className="desc">James sent you a new message.</div>
                                                                    <div className="meta"> 7 days ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a className="link-mask" href="#"></a>
                                                    </div>
                                                </div>

                                                <div className="dropdown-menu-footer p-2 text-center">
                                                    <a href="#">View all</a>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="app-utility-item">
                                            <a href="settings.html" title="Settings">
                                                <img src={evenodd} />
                                            </a>
                                        </div>


                                        <div className="app-utility-item app-user-dropdown dropdown">
                                            <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                                <img src={user} alt="user profile" /></a>
                                            <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                                <li><a className="dropdown-item" href="account.html">Account</a></li>
                                                <li><a className="dropdown-item" href="settings.html">Settings</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="login.html">Log Out</a></li>
                                            </ul>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    {/* left bar */}

                    <div id="app-sidepanel" className="app-sidepanel">
                        <div id="sidepanel-drop" className="sidepanel-drop"  onClick={this.sidepanelclose}></div>
                        <div className="sidepanel-inner d-flex flex-column">
                            <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none" onClick={this.sidepanelclose}>&times;</a>
                            <div className="app-branding">
                                <a className="app-logo" href="index.html">
                                    <img className="logo-icon me-2" src={applogo} alt="logo" />
                                    <span className="logo-text">Dashboard</span></a>

                            </div>

                            <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                                <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="index.html">
                                            <span className="nav-icon">
                                               <img src={bihousedoor}/>
                                            </span>
                                            <span className="nav-link-text">Overview</span>
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">

                                        <a className="nav-link" href="docs.html">
                                            <span className="nav-icon">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-folder" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                                                    <path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z" />
                                                </svg>
                                            </span>
                                            <span className="nav-link-text">Docs</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">

                                        <a className="nav-link" href="orders.html">
                                            <span className="nav-icon">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                    <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                                                    <circle cx="3.5" cy="5.5" r=".5" />
                                                    <circle cx="3.5" cy="8" r=".5" />
                                                    <circle cx="3.5" cy="10.5" r=".5" />
                                                </svg>
                                            </span>
                                            <span className="nav-link-text">Orders</span>
                                        </a>
                                    </li> */}
                                    <li className="nav-item has-submenu">
                                        <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                                            <span className="nav-icon">
                                                <img src={bifiles}/>
                                                
                                            </span>
                                            <span className="nav-link-text">Pages</span>
                                            <span className="submenu-arrow">
                                               <img src={submenuarrow}/>
                                            </span>
                                        </a>
                                        <div id="submenu-1" className="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                                            <ul className="submenu-list list-unstyled">
                                                <li className="submenu-item"><a className="submenu-link" href="notifications.html">Notifications</a></li>
                                                <li className="submenu-item"><a className="submenu-link" href="account.html">Account</a></li>
                                                <li className="submenu-item"><a className="submenu-link" href="settings.html">Settings</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="nav-item has-submenu">
                                        <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                                            <span className="nav-icon">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-columns-gap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                                                </svg>
                                            </span>
                                            <span className="nav-link-text">External</span>
                                            <span className="submenu-arrow">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </a>
                                        <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                                            <ul className="submenu-list list-unstyled">
                                                <li className="submenu-item"><a className="submenu-link" href="login.html">Login</a></li>
                                                <li className="submenu-item"><a className="submenu-link" href="signup.html">Signup</a></li>
                                                <li className="submenu-item"><a className="submenu-link" href="reset-password.html">Reset password</a></li>
                                                <li className="submenu-item"><a className="submenu-link" href="404.html">404 page</a></li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li className="nav-item">
                                        <a className="nav-link" href="charts.html">
                                            <span className="nav-icon">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                                </svg>
                                            </span>
                                            <span className="nav-link-text">Charts</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="help.html">
                                            <span className="nav-icon">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                                </svg>
                                            </span>
                                            <span className="nav-link-text">Help</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </nav>
                            <div className="app-sidepanel-footer">
                                <nav className="app-nav app-nav-footer">
                                    <ul className="app-menu footer-menu list-unstyled">
                                        <li className="nav-item">
                                            <a className="nav-link" href="settings.html">
                                                <span className="nav-icon">
                                                    <img src={bigear}/>
                                                   
                                                </span>
                                                <span className="nav-link-text">Settings</span>
                                            </a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                                <span className="nav-icon">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                </span>
                                                <span className="nav-link-text">Download</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                                <span className="nav-icon">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                                        <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                </span>
                                                <span className="nav-link-text">License</span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default Header;