(function() {

    $(document).ready(run);

    function run() {
        $('#next-mobile').click(next1);
        $('#back-mobile').click(back1);
    }

    let first = 0;
    let cards = document.getElementsByClassName('article');
    
    function next1() {
        

        console.log('a');
        if (first == cards.length-1) return;

        cards[first].style.display = "none";
        first++;
        cards[first].style.marginLeft = "0";
        cards[first].style.display = "inline-block";

        
    }

    function back1() {

        if (first == 0) return;
    
        cards[first].style.display = "none";
    
        first--;
        cards[first].style.marginLeft = "0";
        cards[first].style.display = "inline-block";

    }

})()