import { ALLRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";
import "./index.css";
function App() {
  return (
    <div className="App dark:bg-[#1E293B]">
      <Header />
      <ALLRoutes />
      <Footer />
    </div>
  );
}

export default App;
