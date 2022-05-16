const shareBtn=document.getElementById('sharebtn')

shareBtn.addEventListener('click',event =>{
    //check for web share api support
    if(navigator.share){
        //browser supports native share api
        navigator.share({
            title: 'OrielX Birthday Wisher',
            text: 'Welcome to OrielX birthday wisher. Share this wish your friends to surprise them. ',
            url: 'https://google.com/'
        }).then(()=>{
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else{
        //fallback
        alert("The current browser doesn't support the share function.please,manually share the link")
    }
});