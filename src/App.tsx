import "./index.css";
import { Loader } from "./components/loader";
import { Projects } from "./components/projects";

export const App: React.FC = () => {
  return (
    <div className="App">
        <Loader />
        <Projects />
    </div>
  )
}

export default App
