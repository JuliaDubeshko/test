(function() {

    window.addEventListener('load', run);

    function run() {
        goMarginLeft(first, last);
        document.getElementById('next').addEventListener('click', next);
        document.getElementById('back').addEventListener('click', back);
    }

    let first = 0, last = 2;
    let cards = document.getElementsByClassName('article');

    
    function next() {
        

        if (screen.width < 980) {
            next_mobile();
            return;
        }
        if (last == cards.length-1) return;

        noneMarginLeft(first, last);
        cards[first].style.display = "none";
        last++;
        first++;
        cards[last].style.display = "inline-block";
        goMarginLeft(first, last);
        
        
    }

    function next_mobile() {
        if (first == cards.length-1) return;
        cards[first].style.display = "none";
        first++;
        //cards[first].style.marginLeft = 0;
        cards[first].style.display = "inline-block";
        
    }

    function back() {

        if (first == 0) return;
        
        noneMarginLeft(first, last);
        cards[last].style.display = "none";
        
        last--;
        first--;
        cards[first].style.display = "inline-block";
        goMarginLeft(first, last);

    }

    function goMarginLeft(first, last) {
        for(let i = first+1; i <= last; i++) {
            cards[i].style.marginLeft = "10px";
        }
    }

    function noneMarginLeft(first, last) {
        for(let i = first+1; i <= last; i++) {
            cards[i].style.marginLeft = "0";
        }
    }

})()