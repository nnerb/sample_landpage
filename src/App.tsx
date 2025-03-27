import Footer from './components/footer/footer'
import Navbar from './components/header/_components/navbar'
import Header from './components/header/header'
import Works from './components/works/works'
import './index.css'

function App() {

  return (
    <main className='container'>
      <Header />
      <Navbar />
      <Works />
      <Footer />
    </main>
  )
}

export default App
