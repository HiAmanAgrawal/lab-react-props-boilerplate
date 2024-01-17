import { Component } from "react";
import "./App.css"
import data from "./components/DataComponent"
export default class AppClass extends Component{
  


  // code here
  render(){
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='container'>
        {data.map((image) => (
          <div className="image" key={image.id}>
            <img src={image.img} alt={`Image ${image.id}`} />
          </div>
        ))}
        </div>
        <h6>You are watching code returning from AppClass.jsx</h6>
      </div>
    )
  }
}
