import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
   <>
    <div className="mb-2 bg-red-800    text-white  font-semibold w-screen    ">
    
    <Navbar/>
     
    </div>
     <Mainroutes/></>
    
  )
}

export default App;