import './App.css';
import data from "./components/DataComponent"

// const imageData = ()=>{
//   let data = [
//     {
//       id:1,
//       img:elephant
//     },
//     {
//       id:2,
//       img:elephant
//     },
//     {
//       id:3,
//       img:elephant
//     },
//     {
//       id:4,
//       img:elephant
//     }
//   ]
//   return data;
// }

function App() {
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className='container'>
      {
        data.map(image => (
          <div className='image' key={image.id}>
            <img src={image.img} alt={`Image ${image.id}`} />
          </div>
        ))
      }
      </div>
      <h6>You are watching code returning from App.jsx</h6>
    </div>
  );
}

export default App;
