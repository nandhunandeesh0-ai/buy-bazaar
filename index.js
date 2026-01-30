let arr  = [
  {
    img_src:
     "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/cd6aca4f61e8ea95.png?q=100",
    title: "HOME",
    href:"",
  },

 {
  img_src: "https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg",
  title: "GROCERY",
  href: "project1.html"
  
},


  {
    img_src:
     "https://blog.medkart.in/wp-content/uploads/2023/08/difference-between-generic-and-branded-medicines.jpg",
    title: "MEDICINES",
  },
  {
    img_src:
     "https://img.pikbest.com/png-images/20241028/-22colorful-cartoon-gas-station-icons-22_11018035.png!w700wp",
    title: "FUEL",
    href: "",
  },
  {
    img_src:
     "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/29/35/bd/2935bdc4-1f49-d113-dde4-9d5843a5b397/mza_6403523971024850344.jpg/1200x1200bf.webp",
    title: "CYBER WORK",
    href: "",
  },
  {
    img_src:
     "https://www.apprenticeship.ng/wp-content/uploads/2021/06/Travel-and-tourism-Business-plan-1024x1024.jpg",
    title: "TRAVELS",
    href: "",
  },
  {
    img_src:
     "https://5.imimg.com/data5/SELLER/Default/2023/9/343406339/IJ/QH/PZ/144187840/logistics-courier-services.png",
    title: "COURIER",
    href: "",
  },

  ];
//  let arr = [1,2,3,4,5];
//  href:
//  for(let i=0; i<arr.length;i++){
//  console.log(arr[i]);
//  }

arr.map((element)=>{
  let image = document.createElement('img');
  image.src = element.img_src;

  let title  = document.createElement("p");
  title.innerHTML = element.title;

  let box = document.createElement('div');

  box.append(image, title);

  box.style.cursor = "pointer";

box.addEventListener("click", () => {
  if (element.href && element.href !== "") {
    window.location.href = element.href;
  }
});

  document.getElementById("categories").append(box);

})
