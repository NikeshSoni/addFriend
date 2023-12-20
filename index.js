// alert("hii")

const valueData = {
    addFriend:'Friends',
    // removeFriend:'Remove Friend',
    know:"Stanger"
}



const stanger = document.querySelector('.stanger');

const nameval = stanger.innerHTML = valueData.know;



const add = document.querySelector('#add');

add.innerHTML = "Add"

// const remove = document.querySelector('#remove');

var count = 0;

add.addEventListener("click" , function () {

    if (count === 0) {
        stanger.innerHTML = valueData.addFriend;
        stanger.style.color = "green";
        // stanger.style.backgroundColor = "green";

        add.innerHTML = "Add Friend" 

        console.log(count);
         count = 1
    } else {
        stanger.innerHTML = valueData.know;
        stanger.style.color = "tomato";
        add.style.backgroundColor = "#dadada";
        add.style.color = "#111";

        add.innerHTML = "Remove" 

         count = 0


    }

    


})



// remove.addEventListener("click" , function () {
//     stanger.innerHTML = valueData.removeFriend;
//     stanger.style.color = "tomato";
// })