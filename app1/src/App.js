import React from 'react';
import './App.css';

// const RemoteButton = React.lazy(() => import('app2/Button'));
const RemotePresenceSync = React.lazy(() => import('app2/PresenceSync'));
const RemotePlatformCI = React.lazy(() => import('app3/PlatformCI'));

const App = () => (
  <div className='root-container'>
    <h1>Holodeck Dashboard - App 1</h1>
    {/* <React.Suspense fallback="Loading..."> */}
    {/* <RemoteButton /> */}
    {/* </React.Suspense> */}
    <div className='flex-container'>
      <div className='card border-secondary flex-child'>
      <div className='card-header'>
          App 2
        </div>
        <div className='card-body'>
          <React.Suspense fallback="Loading...">
            <RemotePresenceSync />
          </React.Suspense>
        </div>
      </div>

      <div className='card border-secondary flex-child'>
        <div className='card-header'>
          App 3
        </div>
        <div className='card-body'>
          <React.Suspense fallback="Loading...">
            <RemotePlatformCI showDetail showAppId onPlatformCIClick={() => {console.log("Clicked..")}}/>
          </React.Suspense>
        </div>
      </div>
    </div>

  </div>
);

export default App;
