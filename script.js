<script>

let scores = {
    "Mulan": 0,
    "Hercules": 0,
    "Aladdin": 0,
    "Elsa": 0,
    "Ariel": 0,
    "Rapunzel": 0,
    "Olaf": 0,
    "Simba": 0,
    "Moana": 0
};

const questions = [
    {question:"1) En baskın özelliğin ne?", options:[
        {text:"Cesaret", points:{Mulan:3,Hercules:2}},
        {text:"Zeka", points:{Aladdin:3,Elsa:2}},
        {text:"Hayal gücü", points:{Ariel:3,Rapunzel:2}},
        {text:"Mizah", points:{Olaf:3,Simba:2}}
    ]},
    {question:"2) En sevdiğin ortam?", options:[
        {text:"Deniz / su", points:{Ariel:3,Moana:2}},
        {text:"Orman / doğa", points:{Simba:3,Mulan:2}},
        {text:"Şehir / kalabalık", points:{Aladdin:3,Hercules:2}},
        {text:"Sessiz / sakin", points:{Elsa:3,Rapunzel:2}}
    ]},
    {question:"3) Zor anlarda nasıl davranırsın?", options:[
        {text:"Liderlik yaparım", points:{Mulan:3,Simba:2}},
        {text:"Soğukkanlı kalırım", points:{Elsa:3,Hercules:2}},
        {text:"İçime kapanırım", points:{Rapunzel:3,Moana:2}},
        {text:"Espiri yaparım", points:{Olaf:3,Aladdin:2}}
    ]},
    {question:"4) Hayattaki önceliğin ne?", options:[
        {text:"Özgürlük", points:{Moana:3,Ariel:2}},
        {text:"Aile", points:{Simba:3,Elsa:2}},
        {text:"Başarı", points:{Hercules:3,Mulan:2}},
        {text:"Macera", points:{Rapunzel:3,Aladdin:2}}
    ]},
    {question:"5) İnsanlarla aran nasıl?", options:[
        {text:"Sosyal kelebek", points:{Olaf:3,Simba:2}},
        {text:"Birkaç yakın kişi yeter", points:{Elsa:3,Rapunzel:2}},
        {text:"Herkese uyum sağlarım", points:{Aladdin:3,Moana:2}},
        {text:"Daha çok kendi halimdeyim", points:{Mulan:3,Ariel:2}}
    ]},
    {question:"6) Kendini nasıl tanımlarsın?", options:[
        {text:"Maceracı", points:{Moana:3,Aladdin:2}},
        {text:"Güçlü ama hassas", points:{Hercules:3,Elsa:2}},
        {text:"Meraklı", points:{Ariel:3,Rapunzel:2}},
        {text:"Eğlenceli ve sevecen", points:{Olaf:3,Simba:2}}
    ]}
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("questionBox").innerHTML = q.question;
    let optionsHTML = "";
    q.options.forEach(opt=>{
        optionsHTML += `<div class="option" onclick='selectOption(${JSON.stringify(opt.points)})'>${opt.text}</div>`;
    });
    document.getElementById("optionsBox").innerHTML = optionsHTML;
}

function selectOption(pointsObj){
    for(const character in pointsObj){
        scores[character]+=pointsObj[character];
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quizScreen").style.display="none";

    let topCharacter = null;
    let topScore = -1;
    for(const character in scores){
        if(scores[character]>topScore){
            topScore = scores[character];
            topCharacter = character;
        }
    }

    const characterImages = {
        "Mulan": "https://m.media-amazon.com/images/I/81etxQuCMnL._AC_UF1000,1000_QL80_.jpg",
        "Hercules": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZKOchrwJtHS42pyVj3Gxw_8Ve5dFRbJjiQ&s",
        "Aladdin": "https://cdn.shopify.com/s/files/1/0310/7487/7577/products/DisneyClassics-Aladdin-Rounded_73ea798f-4629-446b-99c2-6e5e8eba03cd.webp?v=1673448093",
        "Elsa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeml074YrnSk_aA0MwZ9ma90d9x4h-SdqYSQ&s",
        "Ariel": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqw2abPI8hvpP9LanJOPPsQ8OAmdC_vuPjQA&s",
        "Rapunzel": "https://static.laverdad.es/www/pre2017/multimedia/murcia/prensa/noticias/201102/04/fotos/5975461.jpg",
        "Olaf": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmv5FFjTKqexAWE77nYkAiz4Ahp-MhYTJlQ&s",
        "Simba": "https://upload.wikimedia.org/wikipedia/en/9/94/Simba_%28_Disney_character_-_adult%29.png",
        "Moana": "https://upload.wikimedia.org/wikipedia/en/5/56/Moana_%28character%29.png"
    };

    const imgSrc = characterImages[topCharacter] || "";

    document.getElementById("resultScreen").style.display="block";
    document.getElementById("resultScreen").innerHTML=
        `<p>En çok hangi karaktere benziyorsun?</p>
        <h3>🎉 ${topCharacter} 🎉</h3>
        <p>(Toplam Puanın: ${topScore})</p>
        <img src="${imgSrc}" alt="${topCharacter}" style="width:200px;margin-top:15px;border-radius:10px;">`;
}

loadQuestion();
</script>