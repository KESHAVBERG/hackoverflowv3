function ProgressBar({scroll}){
  return (
    <div class="progress" style={{height : "0rem"}}>
      <div className="progress-bar" role="progressbar" style={{
        position: "fixed",
        top: 0,
        height: "3px",
        zIndex: 100,
        backgroundColor: "#ed0aea",
        width: `${scroll}%`}}
        aria-valuenow="25" 
        aria-valuemin="0" 
        aria-valuemax="100"
      ></div>
  </div>
  )
}

export default ProgressBar
