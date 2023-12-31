window.onscroll = function () {
  scrollProgress();
};

function scrollProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress").style.width = scrolled + "%";
}
