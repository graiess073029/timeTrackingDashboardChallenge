import './App.css';
import { useState } from 'react';
import Profile from '../Profile/Profile'
import Category from "../Category/Category"

function App() {
  let [date,setDate] = useState('weekly')
  const data = require('../../data.json')
  const profileData = require("../../data.json")[0]
  return (
    <div className="root_inner">
      <Profile setDate={setDate} profileData={profileData} />
      <main className="timeTracker">
          {
            data.slice(1).map( e => <Category key={data.indexOf(e)} date={date} title={e.title} timeFrame={e.timeframes} />)
          }
      </main>
    </div>
  );
}

export default App;
