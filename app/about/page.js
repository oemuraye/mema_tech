import Section1 from '@/components/Aboutpage/Section1';
import Section2 from '@/components/Aboutpage/Section2';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Heading/Header';

const About = () => {
  return (
    <section className="about-page">
        <Header />
        <main>
            <Section1 />
            <Section2 />
        </main>
        <Footer />
    </section>
  )
}

export default About;