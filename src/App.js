// 1. Import Area
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Aside from './component/Aside';
import Section from './component/Section';
import Footer from './component/Footer';


// 1. Defination Area
function App() {
  return (
    <>
    <Header />
    <main>
      <Aside />
      <Section />
    </main>
    <Footer />
    </>
  );
}

// 3. Export Area 
export default App;
