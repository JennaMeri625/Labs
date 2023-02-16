
function main() {

            // #1
    const addBig = document.getElementById('grow-me');
            // console.log(addBig);
    addBig.classList.add("big");

            // #2
    const removeBig = document.getElementById("shrink-me");
            // console.log(removeBig);
    removeBig.classList.remove("big");
   
            // #3
    const lis = document.querySelectorAll('li');
        for (i = 0; i < lis.length; i++){
        console.log(lis[i].innerHTML);
         };

//     const lis = document.querySelectorAll('li');
//     for (let li of lis) {
//         console.log(li);

            //  #4
    const linkUpdate = document.querySelector('.link');
            // console.log(linkUpdate);
    linkUpdate.setAttribute("href", 'https://www.example.com');
    linkUpdate.innerText = "somewhere";

            // #5
    const hideMe = document.getElementById('hide-me');
            // console.log(hideMe);
    hideMe.style.display = 'none';

            //  #6
    const showMe = document.getElementById('show-me');
            // console.log(showMe);
    showMe.style.display = 'block';

             //  #7
    const inputName =  document.getElementById('name').value;
    const h1 = document.querySelector('h1');
    inputName.value = "";
    h1.innerText = `Welcome ${inputName}!`;
    
}



