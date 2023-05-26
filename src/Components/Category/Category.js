import './Category.css'


function Category({title,timeFrame,date}) {
    return (  
        <div className="category" id={title.toLowerCase().replace(' ',"-")}>
            <header className="bgTop" style={{backgroundImage : `url(assets/images/icon-${title.toLowerCase().replace(' ',"-")}.svg)`}}>
            </header>
            <div className="info">
                <header className="name">
                    <h1>{title}</h1>
                    <img src='assets/images/icon-ellipsis.svg' alt='' />
                </header>
                <main className="timeFrame">
                    <h1>{date === 'monthly' ? timeFrame.monthly.current : date === "weekly" ? timeFrame.weekly.current : timeFrame.daily.current }hrs</h1>
                    <p>Last {date === 'monthly' ? "Month" : date === "weekly" ? "Week" : "Day"} - {date === 'monthly' ? timeFrame.monthly.previous : date === "weekly" ? timeFrame.weekly.previous : timeFrame.daily.previous} hrs</p>
                </main>
            </div>
        </div>
    );
}

export default Category;