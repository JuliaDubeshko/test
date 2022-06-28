(function() {
    $(document).ready(main);

    function main() {//обработка кнопок
        $('#select-list').click(goList);
        $('#select-test').click(goTest);
        selectDescription();
    }

    function goList() {
        document.location.href = "contentList.html";
    }

    function goTest() {
        document.location.href = "test.html";
    }

    let timerId = null;
    let timer = null;
    let facts = [
        "Щенки спят 18-20 часов в день во время фазы быстрого роста",
        "Потовые железы у собак расположены на подушечках лап и кончике носа",
        "Собаки чувствительны к теобромину, который содержится в горьком шоколаде",
        "В Пекине до 1983 года иметь собак было запрещено законом",
        "Щенки любят играть в прятки",
        "Собаки могут понимать до 1000 слов"
    ];
    let i = 0;
    function selectDescription() {
        timerId = setInterval(run, 5000);//функция вызывается регулярно через промежуток времени
    }

    function run() {
        if (i < facts.length-1) {

            $('#main-description').text(facts[i]);
            i++;


        } else if (i == facts.length-1) {

            $('#main-description').text(facts[i]);
            i = 0;
        }
    }


})()
