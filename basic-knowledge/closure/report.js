let report = (src) => {
  let img = new Image();
  img.src = src;
};

report(`https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png`);

let report_closure = (() => {
  let imgs = [];
  return (src) => {
    let img = new Image();
    imgs.push(img);
    img.src = src;
  };
})();

report_closure(
  `https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png`
);
