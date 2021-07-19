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

export const getAnimationFooter = () => {
  return {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .5,
      }
    },
    show: {
      opacity: 1,
      display: 'flex',
      transition: {
        delay: .5,
        duration: .5,
      }
    }
  }
}

export const getAnimationMenu = () => {
  return {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .2,
      }
    },
    show: {
      opacity: 1,
      display: 'flex',
      transition: {
        duration: .2,
      }
    }
  }
}


export const getAnimationMenuNav = () => {
  return {
    hidden: {
      left: '50%',
    },
    exit: {
      left: '50%',
      transition: {
        duration: .5,
      }
    },
    show: {
      left: 0,
      transition: {
        duration: .5,
      }
    }
  }
}