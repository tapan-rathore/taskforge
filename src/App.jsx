import AppRouter from "./routes/AppRouter"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App