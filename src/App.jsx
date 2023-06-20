import {

  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'

import { Home } from './pages/Home'
import { SeriePage } from './pages/SeriePage'
import { Header } from './components/Header'



function App() {

  // https://api.tvmaze.com/shows

  return (
    <BrowserRouter>
      <main>

        <Routes>

          <Route index pat="/" element={<Home />} />
          <Route path="/serie/:code" element={<SeriePage />} />


        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
