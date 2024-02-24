import dragon from "../images/dragon.jpg";
import '../App.css';
import '../css/VideoProps.css'

function VideoProps({ id, title, channel, views, time }) {
    return (
        <div>
            {/* <div className="container"> */}
                <img src={dragon} className="h-70 w-80" alt="The Real Deal" />
                {/* <div className="text-center"> */}
                <div style={{ backgroundColor: 'red' }}>
                    {title}
                    {views}
                </div>
                <div className="title ">{title}</div>
                <div className="channel ">{channel}</div>
                <div className="text-sm font-bold underline ">
                    {views} views <span>.</span>{time}
        </div>
        </div>
    )
}

export default VideoProps;
