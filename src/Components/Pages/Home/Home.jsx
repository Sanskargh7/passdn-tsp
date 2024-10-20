
import Nav from '../../Nav.jsx'


import MainSection from './MainSection.jsx'
import IndustriesSection from './IndustriesSection.jsx'
import BenefitsSection from './BenefitsSection.jsx'
import OurViewSection from './OurViewSection.jsx'
import bgCircle from '../../../assets/Home/bgcircle.png'
import Footer from '../../Footer.jsx'
import GetInTouchSection from './GetInTouchSection.jsx'
import EraSection from '../../EraSection.jsx'
import MainSection2 from './MainSection2.jsx'
function Home() {

    return (
        <div>
            <Nav></Nav>

            <MainSection2 />
            <img src={bgCircle} alt="bg" className=' max-w-full hidden xl:block xl:absolute z-0 right-1 pt-[40%]' />
            <IndustriesSection></IndustriesSection>

            <BenefitsSection></BenefitsSection>

            <OurViewSection></OurViewSection>
            <GetInTouchSection></GetInTouchSection>
            <EraSection></EraSection>
            <Footer></Footer>

        </div>
    )
}

export default Home
