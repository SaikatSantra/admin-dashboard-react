import React from 'react';
import Body from '../component/body.js';
import Header from '../component/header/header.js';

class admin extends React.Component {
   render() {
      return (
         <>
         <div className="App">
        <Header/>
        <Body/>
        </div>
         </>
      );
   }
}
export default admin;