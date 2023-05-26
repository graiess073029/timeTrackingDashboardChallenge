import './Profile.css'


function Profile({setDate,profileData}) {
    return ( 
        <aside className="profile">
            <div className="top">
                <img src={profileData.iconProfile} alt='' />
                <div className="report">
                    <p>Report for</p>
                    <h1>{profileData.name} <br /> {profileData.lastName} </h1>
                </div>
            </div>
            <ul className="setDate">
                <li onClick={ event => setDate(event.target.innerText.toLowerCase())} >Daily</li>
                <li onClick={ event => setDate(event.target.innerText.toLowerCase())} >Weekly</li>
                <li onClick={ event => setDate(event.target.innerText.toLowerCase())} >Monthly</li>
            </ul>
        </aside>
    );
}

export default Profile;

// {data.map( e => <Category title={e.title} timeFrame={e.timeframes} date={date}/>)}