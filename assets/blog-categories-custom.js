let getCategory =  document.querySelectorAll(".category-item > a");
let arr_Cat = [...getCategory];
arr_Cat.map((item) => {
  let cutstring = item.innerHTML;
  cutstring = cutstring.replace('/blogs/', '');
  cutstring = cutstring.replace('-', ' ')
  item.innerHTML = cutstring;
}
);