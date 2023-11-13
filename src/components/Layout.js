import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div>
      <Navbar />
        
        <main>
          { children }
        </main>

      <Footer />
    </div>
  )
}

export default Layout;