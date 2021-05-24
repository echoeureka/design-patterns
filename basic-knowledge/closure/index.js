let nodes = document.querySelectorAll("div");
// let vs var
//点击统一输出全是5
// for (var i = 0; i < nodes.length; i++) {
//   const node = nodes[i];
//   node.onclick = () => {
//     console.log(i);
//   };
// }
// 点击分别输出 0 1 2 3 4
// for (let i = 0; i < nodes.length; i++) {
//   const node = nodes[i];
//   node.onclick = () => {
//     console.log(i);
//   };
// }
// 可以用闭包改写解决var的问题
for (var i = 0; i < nodes.length; i++) {
  ((i) => {
    nodes[i].onclick = () => {
      console.log(i);
    };
  })(i);
}
// let func = () => {
//   let a = 1;
//   console.log(a);
// };

// let func_closure = (() => {
//   let a = 1;
//   return () => {
//     a++;
//     console.log(a);
//   };
// })();

// func();
// func_closure();
// func_closure();
