window.addEventListener('DOMContentLoaded', () => {
  const alphabetAnimation = document.querySelector('.js-flowingText');
  const alphabetItem = document.querySelectorAll('.js-alphabetItem');

  // 初回の色はランダムで決定する
  const randomColor = () => {
    const textColorObj = {
      yellow: '#ffea00',
      green: '#aacc00',
      pink: '#ff99ac',
      blue: '#00a8e8',
      purple: '#a594f9',
    };
    // keyの配列を取得
    const textColorKeys = Object.keys(textColorObj);

    // 配列の中からランダムでkeyを取得
    const colorName = textColorKeys[Math.floor(Math.random() * textColorKeys.length)];
    const getColorCode = textColorObj[colorName];
    return getColorCode;
  };

  const showAlphabet = (starDelay = 0) => {
    gsap
      .timeline({
        delay: starDelay,
        ease: 'easeOutQuart',
        onStart: () => {
          alphabetAnimation.classList.add('js-flowingLoop');
        },
        onComplete: () => {
          hideAlphabet();
        },
      })
      .set(alphabetItem, { y: '50%', opacity: 0, color: randomColor() }) //初期値設定
      .to(alphabetItem, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
      })
      .to(
        alphabetItem,
        {
          color: '#ccc',
          duration: 0.8,
          delay: 0.3,
          stagger: 0.15,
        },
        0
      );
  };

  const hideAlphabet = () => {
    gsap.to(alphabetItem, {
      y: '50%',
      opacity: 0,
      duration: 0.6,
      ease: 'easeOutQuart',
      delay: 1, // 5秒後間流れる
      stagger: 0.1,
      onComplete: () => {
        alphabetAnimation.classList.remove('js-flowingLoop');
        showAlphabet(1);
      },
    });
  };

  showAlphabet();
});
