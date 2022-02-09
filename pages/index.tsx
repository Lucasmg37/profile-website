import Head from 'next/head';
import { useState } from 'react';
import Count from '../components/Count';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutMe from '../components/Pages/AboutMe';
import Introduction from '../components/Pages/Introduction';
import Paginator from '../components/Paginator';
import Page from '../layout/Page';
import { Container, Content } from '../styles/pages/Home';
import { AnimatePresence } from 'framer-motion';
import { getAnimationPage } from '../utils/animations';
import Portfolio from '../components/Pages/Portfolio';
import Contact from '../components/Pages/Contact';
import Menu from '../components/Menu';
import Background from '../components/Background';
import Scroll from '../components/Scroll';
import { ScrollPropsResponse } from '../components/Scroll/types';
import { useEffect } from 'react';

export default function Home() {
  const totalPages = 4;
  const [atualPage, setAtualPage] = useState(1);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [positionScroll, setPositionScroll] = useState(0);
  const [isScrollHide, setScrollHide] = useState(false);

  const emmitersScroll = [33, 66, 100];

  const handlePage = (page: number) => {
    setAtualPage(page);
    if (page !== 1) {
      setScrollHide(true);
    } else {
      setScrollHide(false);
    }
  };

  useEffect(() => {
    setPositionScroll(0);
  }, [atualPage]);

  const handleScroll = (data: ScrollPropsResponse) => {
    let page = 1;
    setPositionScroll(data.atual);

    emmitersScroll.forEach((emmiter, index) => {
      if (data.emit.some((item) => item === emmiter)) {
        page = index + 2;
      }
    });

    if (page === 2) {
      setScrollHide(true);
    }

    setAtualPage(page);
  };

  return (
    <Container>
      <Head>
        <title>Lucas Junior | FrontEnd Developer</title>
        <meta name="description" content="FronEnd Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background isAboutMe={atualPage === 2} />
      {!isScrollHide && (
        <Scroll forcePosition={atualPage === 3 ? 66 : 0} onScroll={handleScroll} breaksToEmit={emmitersScroll} />
      )}
      <main>
        <AnimatePresence>
          {isMenuOpen && (
            <Menu active={atualPage} onChangePage={(page) => handlePage(page)} onClose={() => setMenuOpen(false)} />
          )}
        </AnimatePresence>
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <Content>
          <Paginator page={atualPage} />
          <Page>
            <AnimatePresence>
              {atualPage === 1 && <Introduction scale={positionScroll} variants={getAnimationPage(atualPage > 1)} />}
            </AnimatePresence>
            <AnimatePresence>
              {atualPage === 2 && <AboutMe variants={getAnimationPage(atualPage > 2)} />}
            </AnimatePresence>
            <AnimatePresence>
              {atualPage === 3 && <Portfolio variants={getAnimationPage(atualPage > 3)} />}
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
        </Content>
        <Footer
          onDown={() => handlePage(atualPage + 1)}
          onUp={() => handlePage(atualPage - 1)}
          showDown={atualPage !== totalPages}
          showUp={atualPage > 1}
          isLast={atualPage === totalPages}
        />
      </main>
    </Container>
  );
}
