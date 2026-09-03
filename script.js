document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    if (isOpen) {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#FFF8F0';
      links.style.borderBottom = '2.5px solid #1B1130';
      links.style.padding = '16px 24px';
      links.style.gap = '14px';
    } else {
      links.style.display = 'none';
    }
  });
});
