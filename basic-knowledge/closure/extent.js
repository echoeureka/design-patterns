let extent = (() => {
  let value = 0;
  return {
    call() {
      value++;
      console.log(value);
    },
  };
})();

extent.call();
extent.call();
extent.call();

let extent_obj = {
  value: 0,
  call() {
    this.value++;
    console.log(this.value);
  },
};

extent_obj.call();
extent_obj.call();
extent_obj.call();

let Extent = function () {
  this.value = 0;
};

Extent.prototype.call = function () {
  this.value++;
  console.log(this.value);
};

// class Extent {
//   constructor() {
//     this.value = 0;
//   }
//   call() {
//     this.value++;
//     console.log(this.value);
//   }
// }

let extent_class = new Extent();
extent_class.call();
extent_class.call();
extent_class.call();
