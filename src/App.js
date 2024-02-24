import './App.css';
import { useState } from 'react';
// import { Video, Thumb } from './components/Video';
import Events from './components/Events';
import VideoProps from './components/VideoProps';
import VideoData from './components/VideoData';
// import videos from './data/vdata';
import PlayButton from './components/PlayButton';
import Counter from './components/Counter';
// import Assignment4 from './components/Assignment4';
import videoDB from './data/vdata'

function App() {
  const [videos, setVideos] = useState(videoDB)

  let obj = {
    title: 'Water Dragon',
    views: '100K',
    time: 'five years ago',
    channel: 'Jagadish B'
  };
  return (
    <>
      {/* <div className="App"> */}
      {/* Hello World! */}
      {/* <Video />
        <Thumb /> */}

      {/* <div className='flex flex-wrap'> */}
      <div className="flex flex-wrap flex-row justify-center items-end gap-5 text-center">
        <VideoProps {...obj} />  {/* Copies the values of all of its fields!! */}
        <VideoProps title="Earth Dragon" views="10K" time="a year ago" channel="Inshan B" />
        <VideoProps title="Metal Dragon" views="30K" time="a month ago" channel="Rohini R" />

        <button onClick={() => {
          setVideos([...videos, {
            id: videos.length + 1,
            title: 'Water Dragon',
            channel: 'Hell',
            views: '50M',
            time: 'After Birth of Christ'
          }])
        }}>Add Video</button>

        {
          videos.map((video) => (
            <VideoData
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
            >

              <PlayButton
                onPlay={() => console.log('Playing..', video.title)}
                onPause={() => console.log('Paused..', video.title)}
              >
                {video.title}
              </PlayButton>

            </VideoData>
          ))
        }

        <Events />

        <div style={{ clear: 'both' }}>
        </div>

        <Counter></Counter>

      </div>

      {/* </div> */}

    </>
  );
}

export default App;
