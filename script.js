
let handleSuccess = function (response) {
    // handle success
    console.log("SUCCESS!");
    console.log(response);
    for(let i = 0 ; i < response.data.length; i++) {
      
        let message = response.data[i];
        if(message.isUnread==true && response.data[i]!=response.data[6]){
        document.querySelector("ul").innerHTML += `
        <li class="message" id="unread">
        <img src="${message.profilePic}" />
            <div class="content">
            <div id="op">
            <h3>${message.name} </h3>
            <p id="msg">${message.numbUnread} </p></div>
            
            <p id="contact">${message.number}</p>
            <p>${message.firstLine}</p>
            <p>${message.time}</p>
           </div>
        </li>`
    }else{
        document.querySelector("ul").innerHTML += `
        <li class="message" >
        <img src="${message.profilePic}" />
        <div class="content">
            <h3>${message.name}</h3>

            <p id="contact">${message.number}</p>
            <p>${message.firstLine}</p>
            <p>${message.time}</p>
          </div>
        </li>`
        

    }

    }
}
let handleError = function (error) {
    // handle error
  
}
let finishUp = function () {
    // always executed
    
}

axios.get('https://tk-whatsapp.herokuapp.com/messages')
  .then(handleSuccess)
  .catch(handleError)
  .finally(finishUp); 