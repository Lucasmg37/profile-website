export const getAnimationPage = (isInverse: boolean) => {

  const up = isInverse ? '-100vh' : '100vh';
  const down = !isInverse ? '-100vh' : '100vh';

  return {
    hidden: {
      opacity: 0,
      transform: 'translateY(' + up + ')',
      display: 'none',
    },
    exit: {
      opacity: 0,
      transform: 'translateY(' + down + ')',
      transition: {
        duration: .5,
      }
    },
    show: {
      opacity: 1,
      transform: 'translateY(0px)',
      display: 'flex',
      transition: {
        delay: .5,
        duration: 1,
      }
    }
  }
}