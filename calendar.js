function updateClock(){
    const now = new Date();
    const timeElement = document.getElementById('time');
        timeElement.textContent = now.toLocaleTimeString();
}

function updateDate(){
    const now =new Date();
    const option = {weekDay:'long',year :'numeric', month:'long',day:'numeric'};
    const dateElemet = document.getElementById('date');
    dateElemet.textContent = now.toLocaleDateString(undefined,option);
}

updateClock(); 
updateDate();
setInterval(updateClock,1000)