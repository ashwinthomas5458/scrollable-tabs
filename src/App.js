import { TabComponent } from "./components/tabComponent";
import './app.css';

function App() {
  return (
    <div className="appBase">
      <div className="appContainer">
        <h1 className="marginBottom">Interview Task</h1>
        <h2 className="marginBottom">Scollable Tabs</h2>
        <TabComponent/>
      </div>
    </div>
  );
}

export default App;