import React from 'react';
import moment from 'moment'

// Firebase funktioilla saavutettu!
// props = pilvestä saatu tieto. Props ottaa Mainista dataa.
//  eli kaikki uudet postit ja rekisteröinnit.
// Firebase build function index.js antaa enemmän dataa.


// mitä notifications && meinaa? Sitä, että se tarkistaa,
// onko koko notificationssia olemassa. Jos ei ole.
// Koodimme ei vaivaudu tekemään mappia laisinkaan.
// item.id = firestore notification id.
const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map(item => {
                            return <li key={item.id}>
                                <span>{item.user} </span>
                                <span>{item.content}</span>
                                <div className="grey-text note-date"> {moment(item.time.toDate()).fromNow()}</div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;