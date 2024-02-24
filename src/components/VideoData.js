function VideoData({ id, title, channel, views, time, children }) {
    return (
        <div>
            {/* <div className="container"> */}
            {/* <div className="pic"> */}
                <img src={`https://picsum.photos/id/${id}/160/90`} className="h-60 w-80" alt="Dragon" />
                {/* <div className="text-center"> */}
                <div>{title}</div>
                <div>{channel}</div>
                <div>
                    {views}views <span>|</span> {time}
                </div>
                <di>
                    {children}
                </di>
            {/* </div> */}
            {/* </div > */}
        </div>
    )
}

export default VideoData;