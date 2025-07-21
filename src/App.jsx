import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"

function App() {
  console.log('App component rendering...');
  
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>Durham Health Map - Loading...</h1>
        <p>If you see this, the app is working!</p>
      </div>
      <Pages />
      <Toaster />
    </>
  )
}

export default App 