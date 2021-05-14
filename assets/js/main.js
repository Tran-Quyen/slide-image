var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

class SlideImage {
  constructor(viewerId) {
    this.id = viewerId;
    this.initial();
  }

  initial() {
    this.viewerDiv = $(`#${this.id}`);
    this.main = $(`#${this.id} .main`);
    this.img = $(`#${this.id} .main img`);
    this.linkList = $$(`#${this.id} ul li a`);
    this.imgList = $$(`#${this.id} ul li a img`);
  }

  handleHoverEvent() {
    this.linkList.forEach((link) => {
      var imageUrl = link.getAttribute('href');
      link.onmouseover = (e) => {
        e.preventDefault();
        this.main.href = imageUrl;
        this.img.src = imageUrl;

        var imgItem = link.querySelector('img');
        this.imgList.forEach((item) => item.classList.remove('active'));
        imgItem.classList.add('active');
      };
    });
  }
}

var imageView = new SlideImage('viewer_1');
imageView.handleHoverEvent();
