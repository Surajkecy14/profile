import Navbar from './Navbar';
import About from './About';
import Education from './Education';
import WhyMe from './WhyMe';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <About />
        <Education />
        <WhyMe />
      </div>
    </div>
  );
}

export default App;
