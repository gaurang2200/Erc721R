import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="relative -z-50 bg-black min-h-screen h-full w-full font-['Poppins']">
      <Header />
      <HomePage />
    </div>
  )
}

export default App;
