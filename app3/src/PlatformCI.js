import React from 'react';

const PlatformCI = ({showDetail, showAppId, onPlatformCIClick}) => {
    return (
        <>
            <h2>Platform CI Frontend App {showAppId ? "- App 3" : ''}</h2>
            { showDetail ? <div onClick={onPlatformCIClick}>This is frontend app that shows Platform CI Configurations and Run status</div> : ''}
        </>
    );
}

export default PlatformCI;
