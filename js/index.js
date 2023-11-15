const loadPhone= async(searchText)=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const apiData= await response.json();
    const phones=apiData.data;
    // console.log(phones);
    displayPhones(phones);
}
const displayPhones=phones=>{
    // console.log(phones)
    // step1:get the container element where i want to add the new element
const phoneContainer=document.getElementById('phone-container')

// clear page before search new item.
    phoneContainer.textContent='';

    phones.forEach(phone=>{
        console.log(phone)
        //step2: create child element
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card w-96 bg-gray-400 shadow-xl mt-6 ml-6`;
        // step3: set innerHtml
        phoneCard.innerHTML=`
    <figure><img class="pt-6" src=" ${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary bg-emerald-700">Buy Now</button>
        </div>
    </div>
        `;
        // step4: append child
        phoneContainer.appendChild(phoneCard)
    })

}

const handleSearch= () =>{
    const inputField=document.getElementById('input-field');
    const searchText=inputField.value ;
    console.log(searchText)
    loadPhone(searchText)
}
loadPhone();