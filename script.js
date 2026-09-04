const VERSION="v1.0.0";
document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll(".faq button").forEach(b=>b.addEventListener("click",()=>{
  const open=b.classList.contains("open");
  document.querySelectorAll(".faq button").forEach(x=>x.classList.remove("open"));
  if(!open)b.classList.add("open");
}));

document.getElementById("langBtn").addEventListener("click",()=>{
  const btn=document.getElementById("langBtn");
  if(document.documentElement.lang==="en"){
    document.documentElement.lang="ar"; document.documentElement.dir="rtl";
    btn.textContent="English";
    document.querySelector("h1").innerHTML="ترفيه.<br><span>بدون حدود.</span>";
    document.querySelector(".lead").textContent="JAZIRI IPTV هو مشغل IPTV حديث لأجهزة Android وAndroid TV وTV Box، مصمم للتنقل السريع وتجربة واضحة ودعم الريموت.";
  }else{
    document.documentElement.lang="en"; document.documentElement.dir="ltr";
    btn.textContent="عربي";
    document.querySelector("h1").innerHTML="Entertainment.<br><span>Without limits.</span>";
    document.querySelector(".lead").textContent="JAZIRI IPTV is a modern IPTV player for Android, Android TV and TV Box — built for fast navigation, a clean interface and remote control.";
  }
});
