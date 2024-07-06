document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (isElementInViewport(timeline)) {
    } else {
      timeline.classList.remove("animate");
    }
  };

  const throttle = (callback, limit) => {
    let waiting = false;
    return () => {
      if (!waiting) {
        callback();
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  };

  window.addEventListener("scroll", throttle(handleScroll, 100));
  handleScroll(); // Check if any items are in view on initial load
});
