
import './App.css'
function Two({image,title}){
    return(
     
      <div className='second'>
      <img src={image} style={{borderRadius:"50%"}}></img>
      <h1>{title}</h1>
      </div>


    )
  
  }
  
  export default Two