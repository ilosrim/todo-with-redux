// App.js
import React from 'react';
import './style.css';
import '../../node_modules/rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import usr from './assets/images/card-usr.png'
import play from './assets/icons/play.svg'


function App() {

  function callback(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <Tabs tabPosition='right' defaultActiveKey="2" onChange={callback}>
        <TabPane tab={<myBox />} key="1">
          <div className="card-left">
            <div className="card-left-top">
              <img src={usr} alt="User pic" className="usr" />
              <div className='usrInfo'>
                <span className='user-name'>By Benjamin Turner</span>
                <span className='user-work'>Traveler</span>
              </div>
            </div>
            <div className="card-left-bottom">
              <div className="card-left-bottom-title">
                Destinations
              </div>
              <div className="card-left-bottom-desc">
                In Southeast England, White Cliffs and Fish
              </div>

              <div className="card-left-bottom-play">
                <div className="btn">Read more </div>
                <div className="play-sec">
                  <div className="circle">
                    <img src={play} alt="" className="play" />
                  </div>
                  <div className="track">
                    <div className="track-name">
                      The chalk cliff of Beachy Head
                    </div>
                    <div className="track-clock">
                      18:05
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="tab 2" key="2">
          Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens acsan an, ei eum solum pertinacia democritum.
        </TabPane>
        <TabPane tab={< myBox />} key="3">
          <div className="card-left">
            <div className="card-left-top">
              <img src={usr} alt="User pic" className="usr" />
              <div className='usrInfo'>
                <span className='user-name'>By Benjamin Turner</span>
                <span className='user-work'>Traveler</span>
              </div>
            </div>
            <div className="card-left-bottom">
              <div className="card-left-bottom-title">
                Destinations
              </div>
              <div className="card-left-bottom-desc">
                In Southeast England, White Cliffs and Fish
              </div>

              <div className="card-left-bottom-play">
                <div className="btn">Read more </div>
                <div className="play-sec">
                  <div className="circle">
                    <img src={play} alt="" className="play" />
                  </div>
                  <div className="track">
                    <div className="track-name">
                      The chalk cliff of Beachy Head
                    </div>
                    <div className="track-clock">
                      18:05
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div >
  );
}

function myBox() {
  return (
    <div className="card-right-box bg-gray">
      <div className="box-title">Food</div>
      <div className="box-desc">
        <span>For Chicken-Fried Steak, Too Much Is Just Enough</span>
      </div>
    </div>
  )
}

export default App;