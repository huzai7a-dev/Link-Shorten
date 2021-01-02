let inputField = document.querySelector('.input');
let inputForm = document.querySelector('#inputUrl');
let link = document.querySelector('#toShort');
let shortedLink = document.querySelector("#shorted");
let shortedLinkBox = document.querySelector(".shortedLink");
let copyBtn = document.querySelector("#copy");


async function urlShorten(){
    
    let data;
    let fetchedLink;
    try{
      const resp = await fetch (
        `https://api.shrtco.de/v2/shorten?url=${inputField.value}`,
        {
          method: "post",
          body: "JSON.stringify(opts)",
        }
      );
      data = await resp.json();
      fetchedLink = data.result.short_link;
    }
    catch(error){
      console.log(error);
    }
    shortedLinkBox.style.visibility = 'visible';
    link.innerHTML = inputField.value;
    shortedLink.value = fetchedLink;

    copyBtn.addEventListener('click',()=>{
      inputField.value = '';
      shortedLink.select();
      document.execCommand("copy");
      copyBtn.innerHTML = "Copied";
    })
}
inputForm.addEventListener('submit', (e)=>{
  if (inputField.value === '') {
    alert('Input Valid link');
  }else{
    e.preventDefault();
    urlShorten();
  }
})

let navBtn = document.querySelector('.navIcon');
let navList = document.querySelector('.navList');

navBtn.addEventListener('click', ()=>{
  navList.classList.toggle('navHideShow');
});

console.log(navList);
