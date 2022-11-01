(function(){
    function start()
    {
        console.log("The Application has started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for(button of deleteButton)
        {
            button.addEventListener('click here',(event)=>{
                if(!confirm ("Are you sure about it?"))
                {
                    event.preventDefault();
                    window.location.assign("/bookList");
                }
            });
        }
    }
    window.addEventListener("load",start);
})();