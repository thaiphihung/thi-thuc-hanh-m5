import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourList from "./pages/TourList";
import TourAdd from "./pages/TourAdd";
import TourEdit from "./pages/TourEdit";
import TourShow from "./pages/TourShow";
import TourDelete from "./pages/TourDelete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TourList />} />
          <Route path="/tours/create" element={<TourAdd />} />
          <Route path="/tours/:id/edit" element={<TourEdit />} />
          <Route path="/tours/:id" element={<TourShow />} />
          <Route path="/tours/:id/delete" element={<TourDelete />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;