const input = document.querySelector("input");
const captions = document.querySelectorAll('a');

input.addEventListener('keyup', function (e) {
    const search = e.target.value.toLowerCase();
    for (let singlecaption of captions) {

        const singcap = singlecaption.dataset.caption;
        if (singcap.toLowerCase().indexOf(search) !== -1) {
            singlecaption.style.display = "block";
        } else {
            singlecaption.style.display = "none";
            
        }

    }
});
$('[data-fancybox="gallery"]').fancybox({

    buttons: [
        "zoom",
        //"share",
        "slideShow",
        //"fullScreen",
        //"download",
        //"thumbs",
        "close"
    ],

   
});
