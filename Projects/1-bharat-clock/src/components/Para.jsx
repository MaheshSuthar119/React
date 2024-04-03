import '../App.css'
function Para(){
    let time = new Date();
    return (
        <div>
            <p>This is the clock that shows the time in Bharat at all time</p>
            <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Para;