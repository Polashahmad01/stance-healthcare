// (function() {
//   pixelcarve.app = (function() {
//     function app() {}

//     app.prototype.initialize = function() {};

//     app.prototype.scrollToBottom = function() {
//       return 
//     };

//     return app;

//   })();

// }).call(this);

const btnScrollToBottom = document.querySelector('.arrow');

btnScrollToBottom.addEventListener('click', () => window.scrollTo({
  top: 1500,
  behavior: 'smooth',
}));


