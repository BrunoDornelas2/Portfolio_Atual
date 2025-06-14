import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/index'
import ScrollToTop from './componentes/scrollToTop'

function App(){
    return(
    <div>
       <main>
            <Router basename="/Portfolio_Atual/">
              <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </Router>
        </main>
    </div>
    )
}

export default App;