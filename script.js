const poem = [
  {
    title: "আত্মার আর্তনাদ",
    content: 
`আমার এই নশ্বর দেহের একমাত্র অধিপতি শুধু 
আপনি- একান্তই আপনি। 
তাই আপনার আনুগত্য করা আমার জন্য ফরজ। 
কিন্তু কিছুতেই তা পারছি নাহ, কোথায় যেনো এক
আধারে ডুবে যাচ্ছি, 
যেনো শেষ হতে চায় না। 
একফোঁটা আলোকে স্পর্শ করার জন্য অদম্য চেষ্টা
করে যাচ্ছি। 
কোনো কিছুতেই ছুতে পারছি নাহ সেই আলোর 
ফোটনকে, মনে হচ্ছে কেউ আকরে ধরে রেখেছে 
পেছন থেকে আমাকে বা ফোটন নিজেই আমার
থেকে পালানোর চেষ্টা করছে। 
এই টানাপোড়েনের মাঝে একটা ভয় আমাকে কুঁড়ে 
কুঁড়ে খাচ্ছে—
তবে কি আমি সেই দ্বারে এসে পৌঁছেছি—
যেখান থেকে মানুষ হেদায়েত হারিয়ে ফেলে!
যেখানে আত্মা শুকিয়ে যায়,
আলোকে আর চিনতে পারে না!`
  },
  {
    
  },
];

const title = document.getElementById("title");
const main_txt = document.getElementById("main_txt");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let current_index = 0;

function displayPoem(index) {
  title.innerText = poem[index].title;
  main_txt.innerText = poem[index].content;

  
  previous.disabled = index === 0;
  next.disabled = index === poem.length - 1;
 
}

previous.addEventListener("click", () => {
  if (current_index > 0) {
    current_index--;
    displayPoem(current_index);
  }
});

next.addEventListener("click", () => {
  if (current_index < poem.length - 1) {
    current_index++;
    displayPoem(current_index);
  }
});


displayPoem(current_index);
