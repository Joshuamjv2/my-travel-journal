import '../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image" alt={props.title}></img>
            <div className="card--content">
                <p className="location">
                    <span className='icon'><FontAwesomeIcon icon="map-pin"/></span>{props.location} <span><a className="maps-link" href={props.googleMapsUrl}>View On Google Maps</a></span>
                </p>
                <h2 className='title'>{props.title}</h2>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}