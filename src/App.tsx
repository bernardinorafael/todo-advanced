import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { TaskProvider } from "./context/TaskContext"
import { GlobalStyle } from "./css/global-style"
import { theme } from "./css/themes/theme"
import Home from "./pages/Home"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
