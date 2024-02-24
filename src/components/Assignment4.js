import a4image from '../images/dragon1.jpg';
import '../css/VideoProps.css';

function Assignment4() {
  function handleClick() {
    console.log('Hello, World! This is Click Me.')
  }
  return (
    <div>
      <img src={a4image} className="h-70 w-80" alt="Dragon" />
        <button onClick={handleClick}>
          ClickMe
        </button>
      <div className='h-60 w-80 overflow-auto bg-green-500'>
        <p>
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
          Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!Inshan and Rohini are awesome!
        </p>
      </div>
    </div>
  )
}

export default Assignment4;
 