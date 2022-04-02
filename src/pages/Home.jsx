import Header from '../components/header'
import Main from '../components/main'
import Feature from '../components/feature'
import Footer from '../components/footer'

export default function Home () {
    return (
        <div className="bg-light">
          <Header/>
          <Main/>
          <Feature/>
          <Footer/>
        </div>
    )
}