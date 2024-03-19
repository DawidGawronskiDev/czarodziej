import MainPage from "./pages/Main";
import WizardCountdown from "./pages/WizardCountdown";

const App = () => {
  return localStorage.date ? <WizardCountdown /> : <MainPage />;
};

export default App;
