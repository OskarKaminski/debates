import React from 'react'
import { observer } from 'mobx-react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Navigation } from './App.styles'
import HomePage from './pages/HomePage/HomePage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import NarrationPage from './pages/NarrationPage/NarrationPage'
import OtherPage from './pages/OtherPage/OtherPage'
import ClaimPage from './pages/ClaimPage/ClaimPage'
import AddQuestionPage from './pages/AddQuestionPage/AddQuestionPage'
import './stubs'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 100;
    
    input, textarea {
      font-weight: 100 !important;
    }
  }
`

@observer
export default class App extends React.Component {
    componentDidMount() {
        // Stubs


    }

    render() {
        return (
            <div>
                <Router>
                    <GlobalStyle/>
                    <Navigation position="static">
                        <NavLink to="/" className={({ isActive }) => isActive ? " selected" : ""}>Questions</NavLink>
                        <NavLink to="/claims" className={({ isActive }) => isActive ? " selected" : ""}>Claims</NavLink>
                        <NavLink to="/other-page" className={({ isActive }) => isActive ? " selected" : ""}>Concepts</NavLink>
                    </Navigation>
                    <Routes>
                        <Route path="/" element={<QuestionsPage />}/>
                        <Route path="/claims" element={<HomePage />}/>
                        <Route path="/other-page" element={<OtherPage />} />
                        <Route path="/add-your-question" element={<AddQuestionPage />} />
                        <Route path="/claim/:id" element={<ClaimPage />} />
                        <Route path="/narration/:id" element={<NarrationPage />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
