//import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { CommissionPage } from './Pages/CommissionPage'
import { PortfolioPage } from './Pages/PortfolioPage'
import { Layout } from './Layout'


function App() {

  return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/commissioninfo" element={<CommissionPage/>}/>
                <Route path="/illustrations" element={<PortfolioPage/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App
