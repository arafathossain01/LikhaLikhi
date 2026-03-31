const poem = [
  {
    title: "আত্মার আর্তনাদ",
    content: 
    `    আমার এই নশ্বর দেহের একমাত্র অধিপতি শুধু 
    আপনি- একান্তই আপনি। 
    তাই আপনার আনুগত্য করা আমার জন্য পরম ব্রত'। 
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
    title:"কুয়াশা",
    content: 
    `    ডিসেম্বরের কুয়াশায় পাচ্ছি তোমার আভাস
    সন্ধ্যার মৃদু বাতাসে দেখছি তোমার আকাশ,
    হাতে হাত রেখে চলবো গন্তব্যহীন এই পথ
    তোমার প্রতি রইলো আমার এই শপথ,
    তোমার হাসি হার মানায় মাধবীলতা প্রমুখ
    ডায়রির পাতায় তুমি আমাতে পঞ্চমুখ,
    নিকষ কালো চুলে তোমায় লাগে কুন্তলীন
    তোমাকে ছোঁয়ার আশায় ছুটে চলা আমি ক্লান্তহিন;
    অপলক দৃষ্টিতে দেখে যাচ্ছিলাম তোমায়
    হারিয়ে গেলে কেন এই সন্ধ্যার কুয়াশায়?`
  },
  {
    title: "তুমি",
    content:
    `    আমি চাই তুমি হাতে পড়া বেলি ফুল হও
    আমি চাই তুমি কানে গোঁজা কাঠগোলাপ হও
    আমি চাই তুমি রাতের সুবাসিত শিউলি হও
    আমি চাই তুমি অমূল্য কাদুলপুল হও
    আমি চাই তুমি ভালোবাসার রাঙা কৃষ্ণচূড়া হও
    আমি চাই তুমি ভোরের শিশির ভেজা কদমফুল হও
    আমি চাই তুমি ডায়রির শুকনো গোলাপ হও। `
  }
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
