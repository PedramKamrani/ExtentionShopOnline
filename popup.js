document.addEventListener('DOMContentLoaded', function() {  
    var checkPageButton = document.getElementById('checkPage');  
    checkPageButton.addEventListener('click', function() {  
        chrome.tabs.query({active: true, currentWindow: true}, function(tab) {   
            window.open('https://www.lenaboutique.ir', '_blank');  
        });  
    }, false);  
}, false);  