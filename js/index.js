const loadPhone= async()=>{
    const response= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const apiData= await response.json();
    const phones=apiData.data;
    console.log(phones)
}
loadPhone();