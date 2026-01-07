import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Our Platform</h1>
      <p>This application follows a 3-Tier Architecture</p>

      <RegisterForm />
    </div>
  );
}

export default App;
