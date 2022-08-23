import React from 'react';
import bifileearmarkarrowdown  from '../assets/images/bi-file-earmark-arrow-down.svg'
class Body extends React.Component {
    render() {
        return ( 
<>

                <div className="app-wrapper">

                    <div className="app-content pt-3 p-md-3 p-lg-4">
                        <div className="container-xl">

                            <h1 className="app-page-title">Overview</h1>

                            <div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration" role="alert">
                                <div className="inner">
                                    <div className="app-card-body p-3 p-lg-4">
                                        <h3 className="mb-3">Welcome, developer!</h3>
                                        <div className="row gx-5 gy-3">
                                            <div className="col-12 col-lg-9">

                                                <div>Portal is a free Bootstrap 5 admin dashboard template. The design is simple, clean and modular so it's a great base for building any modern web app.</div>
                                            </div>
                                            <div className="col-12 col-lg-3">
                                                <a className="btn app-btn-primary" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                                 <img src={bifileearmarkarrowdown}/>Free Download</a>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                );
    }
}
                export default Body;