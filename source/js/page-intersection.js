const initIntersectionAnimation = () => {
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.is-animated').forEach((el) => {
    intersectionObserver.observe(el);
  });
};

export { initIntersectionAnimation };
