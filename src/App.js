import Header from "./components/Header";
import HotelView from "./components/hotel-view/HotelView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;
