import { Navigation } from "./components/Navigation";
import { AppRoutes } from "./Routes";
import "./styles.scss";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <AppRoutes />
    </div>
  );
}
