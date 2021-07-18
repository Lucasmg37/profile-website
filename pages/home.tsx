import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Count from '../components/Count'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutMe from '../components/Pages/AboutMe'
import Introduction from '../components/Pages/Introduction'
import Paginator from '../components/Paginator'
import Page from '../layout/Page'
import { Container } from '../styles/pages/Home'
import { AnimatePresence } from 'framer-motion';
import { getAnimationPage } from '../utils/animations'
import Portfolio from '../components/Pages/Portfolio'
import Contact from '../components/Pages/Contact'

export default function Home() {

  const totalPages = 4;
  const [atualPage, setAtualPage] = useState(1);

  const handlePage = (page: number) => {
    setAtualPage(page);
  }

  return (
    <Container>
      <Head>
        <title>Lucas Junior | FrontEnd Developer</title>
        <meta name="description" content="FronEnd Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          <Paginator page={atualPage} />
          <Page>
            <AnimatePresence>
              {atualPage === 1 && (
                <Introduction variants={getAnimationPage(atualPage > 1)} />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {atualPage === 2 && (
                <AboutMe variants={getAnimationPage(atualPage > 2)} />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {atualPage === 3 && (
                <Portfolio variants={getAnimationPage(atualPage > 3)} />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {atualPage === 4 && (
                <Contact
                  goToHome={() => handlePage(1)}
                  goToPrevious={() => handlePage(3)}
                  variants={getAnimationPage(atualPage > 4)}
                />
              )}
            </AnimatePresence>

          </Page>
          <Count page={atualPage} totalPage={totalPages} />
        </div>
        <Footer
          onDown={() => handlePage(atualPage + 1)}
          onUp={() => handlePage(atualPage - 1)}
          showDown={atualPage !== totalPages}
          showUp={atualPage > 1}
          isLast={atualPage === totalPages}
        />
      </main>
    </Container>
  )
}
