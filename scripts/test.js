(function() {

    $(document).ready(main);


    function Dog_description(size, security, cost, molt, noise) {

        this.size = size;
        this.security = security;
        this.cost = cost;
        this.molt = molt;
        this.noise = noise;

        this.setSize = function(x) {
            this.size = x;
        }

        this.setSecurity = function(x) {
            this.security = x;
        }

        this.setCost = function(x) {
            this.cost = x;
        }
    
        this.setMolt = function(x) {
            this.molt = x;
        }

        this.setNoise = function(x) {
            this.noise = x;
        }
    }

    let amer_ak = new Dog_description(2, 2, 2, 2, 0);
    let bigle = new Dog_description(1, 2, 1, 1, 1);
    let korgi = new Dog_description(0, 2, 0, 2, 2);
    let djek_ras = new Dog_description(0, 2, 0, 1, 2);
    let golden = new Dog_description(2, 1, 2, 2, 1);
    let labrador = new Dog_description(1, 0, 2, 2, 0);
    let mops = new Dog_description(0, 2, 1, 2, 2);
    let samoed = new Dog_description(2, 0, 1, 2, 2);
    let haski = new Dog_description(2, 0, 2, 2, 0);
    let sharpei = new Dog_description(1, 1, 2, 1, 0);

    let dogs_name = [
        'Американская акита',
        'Бигль',
        'Вельш-корги пемборк',
        'Джек рассел терьер',
        'Золотистый ретривер',
        'Лабрадор ретривер',
        'Мопс',
        'Самоедская собака',
        'Сибирский хаски',
        'Шарпей'
    ];

    function main() {       
        $('#ok').click(run);
        $('#main-page').click(back);
    }

    let quest = document.getElementsByClassName('quest');
    console.log(quest);
    let list = 0;//номер вопроса
    let answer = new Dog_description(0, 0, 0, 0, 0);

    function run() {
        
        switch (list) {
            case 0:
                quest_1();
                change();
                break;
            case 1:
                quest_2();
                change();
                break;
            case 2: 
                quest_3();
                change();
                break;
            case 3:
                quest_4();
                change();
                break;
            case 4:
                quest_5();
                result();
                list = 0;
                break;
        }

    }

    function back() {
        document.location.href = "index.html";
        let list = 0;
    }

    function change() {
        quest[list].style.display = 'none';
        list++;
        quest[list].style.display = 'flex';
    }

    function quest_1() {
        if (document.getElementById('radio-1').checked) answer.setSize(0);
        else if (document.getElementById('radio-2').checked) answer.setSize(1);
        else if (document.getElementById('radio-3').checked) answer.setSize(2);
        else answer.setSize(Math.floor(Math.random( ) * (2 - 0 + 1)));
    } 

    function quest_2() {
        if (document.getElementById('radio-21').checked) answer.setSecurity(0);
        else if (document.getElementById('radio-22').checked) answer.setSecurity(1);
        else if (document.getElementById('radio-23').checked) answer.setSecurity(2);
        else answer.setSecurity(Math.floor(Math.random( ) * (2 - 0 + 1)));
    }

    function quest_3() {
        if (document.getElementById('radio-31').checked) answer.setCost(0);
        else if (document.getElementById('radio-32').checked) answer.setCost(1);
        else if (document.getElementById('radio-33').checked) answer.setCost(2);
        else answer.setCost(Math.floor(Math.random( ) * (2 - 0 + 1)));
    }

    function quest_4() {
        if (document.getElementById('radio-41').checked) answer.setMolt(0);
        else if (document.getElementById('radio-42').checked) answer.setMolt(1);
        else if (document.getElementById('radio-43').checked) answer.setMolt(2);
        else answer.setMolt(Math.floor(Math.random( ) * (2 - 0 + 1)));
    }

    function quest_5() {
        if (document.getElementById('radio-51').checked) answer.setNoise(0);
        else if (document.getElementById('radio-52').checked) answer.setNoise(1);
        else if (document.getElementById('radio-53').checked) answer.setNoise(2);
        else answer.setNoise(Math.floor(Math.random( ) * (2 - 0 + 1)));
    }

    let objectArr = [
        amer_ak, bigle, korgi, djek_ras, golden, labrador, mops, samoed, haski, sharpei
    ];

    let index = 0;
    function result() {
        quest[list].style.display = 'none';
        for(let i = 0; i < objectArr.length; i++) {
            if (objectArr[i].size == answer.size &&
                objectArr[i].security == answer.security &&
                objectArr[i].cost == answer.cost &&
                objectArr[i].molt == answer.molt &&
                objectArr[i].noise == answer.noise) {
                    
                    index = i;
                    showResult();
                    return;
                }
        }

        showNoResult();
    }

    function showResult() {
        console.log(dogs_name[index]);
        document.getElementById('ok').style.display = 'none';
        document.getElementById('answer-text').textContent = dogs_name[index];
        document.getElementById('result').style.display = 'flex';
    }
    function showNoResult() {
        console.log('Мы ничего не нашли');
        document.getElementById('ok').style.display = 'none';
        document.getElementById('answer-text').textContent = 'Упс, мы ничего не нашли';
        document.getElementById('result').style.display = 'flex';
    }

})()