function createLeaf() {
    const leafContainer = document.getElementById('leaf-container');
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // ສຸ່ມຕຳແໜ່ງເລີ່ມຕົ້ນ (ໃຫ້ຕົກຈາກບໍລິເວນຕົ້ນໄມ້)
    const startX = window.innerWidth / 2 + (Math.random() * 160 - 80);
    const startY = window.innerHeight - 300; 

    leaf.style.left = startX + 'px';
    leaf.style.top = startY + 'px';

    // ສຸ່ມຄວາມໄວ ແລະ ຂະໜາດ
    const duration = Math.random() * 3 + 2; // 2-5 ວິນາທີ
    leaf.style.animationDuration = duration + 's';
    leaf.style.opacity = Math.random();

    leafContainer.appendChild(leaf);

    // ລຶບໃບໄມ້ຖິ້ມເມື່ອມັນຕົກແລ້ວ ເພື່ອບໍ່ໃຫ້ໜັກ Browser
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// ສ້າງໃບໄມ້ທຸກໆ 300 ມິນລີວິນາທີ
setInterval(createLeaf, 300);
const person = document.querySelector('.person');
let positionX = window.innerWidth * 0.4; // ຈຸດເລີ່ມຕົ້ນ (40%)
const speed = 15; // ຄວາມໄວໃນການຍ່າງ

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        // ຍ່າງໄປຊ້າຍ
        positionX -= speed;
        person.style.left = positionX + 'px';
        person.style.transform = 'scaleX(-1)'; // ຫັນໜ້າໄປທາງຊ້າຍ
    } 
    else if (event.key === 'ArrowRight') {
        // ຍ່າງໄປຂວາ
        positionX += speed;
        person.style.left = positionX + 'px';
        person.style.transform = 'scaleX(1)'; // ຫັນໜ້າໄປທາງຂວາ
    }
    
    // ປ້ອງກັນບໍ່ໃຫ້ຄົນຍ່າງອອກນອກຈໍ
    if (positionX < 0) positionX = 0;
    if (positionX > window.innerWidth - 40) positionX = window.innerWidth - 40;
});

function createHeart() {
    const container = document.getElementById('leaf-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // ສຸ່ມຕຳແໜ່ງໃຫ້ຕົກລົງມາຈາກຕົ້ນໄມ້ວາເລັນທາຍ (70% ຂອງຈໍ)
    const treePos = window.innerWidth * 0.7;
    const startX = treePos + (Math.random() * 140 - 70);
    const startY = window.innerHeight - 320;

    heart.style.left = startX + 'px';
    heart.style.top = startY + 'px';

    // ສຸ່ມສີບົວ ຫຼື ແດງ
    const colors = ['#0a0607', '#f50057', '#ff80ab', '#ad1457'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.background = randomColor;
    // ປ່ຽນສີສ່ວນໂຄ້ງຂອງຫົວໃຈນຳ
    heart.style.setProperty('--heart-color', randomColor); 

    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// ເອີ້ນໃຊ້ງານທັງໃບໄມ້ທຳມະດາ ແລະ ຫົວໃຈ
setInterval(createLeaf, 500);
setInterval(createHeart, 400);

const girl = document.getElementById('girl');
const bubble = document.getElementById('speech-bubble');

// ລາຍການຄຳເວົ້າຈີບກັນ
const messages = [
    "ສະບາຍດີ... ເຈົ້າຊື່ຫຍັງ?",
    "ຕົ້ນໄມ້ຕົ້ນນີ້ງາມເນາະ ຄືເຈົ້າເລີຍ!",
    "ວາເລັນທາຍນີ້ ໄປທ່ຽວນຳກັນບໍ່?",
    "ເຈົ້າມີແຟນແລ້ວບໍ? 😊"
];

function checkDistance() {
    // ດຶງຕຳແໜ່ງຂອງທັງສອງຄົນ
    const boyRect = person.getBoundingClientRect();
    const girlRect = girl.getBoundingClientRect();

    // ຄິດໄລ່ໄລຍະຫ່າງ
    const distance = Math.abs(boyRect.left - girlRect.left);

    if (distance < 100) { // ຖ້າຍ່າງເຂົ້າໃກ້ກວ່າ 100px
        bubble.style.display = 'block';
        
        // ປ່ຽນຄຳເວົ້າຕາມໄລຍະເວລາ
        if (!bubble.innerText || bubble.innerText === "...") {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            bubble.innerText = randomMsg;
        }
    } else {
        bubble.style.display = 'none';
        bubble.innerText = "...";
    }
}

// ເອີ້ນໃຊ້ຟັງຊັນກວດສອບໄລຍະຫ່າງທຸກໆ 100 ມິນລີວິນາທີ
setInterval(checkDistance, 100);

const chatMenu = document.getElementById('chat-menu');
const boyBubble = document.getElementById('boy-bubble');

// ຟັງຊັນກວດສອບໄລຍະຫ່າງ (Update)
function checkDistance() {
    const boyRect = person.getBoundingClientRect();
    const girlRect = girl.getBoundingClientRect();
    const distance = Math.abs(boyRect.left - girlRect.left);

    // ຈັດຕຳແໜ່ງກ່ອງຄຳເວົ້າໃຫ້ເຄື່ອນທີ່ຕາມຕົວລະຄອນ
    boyBubble.style.left = (boyRect.left + 20) + 'px';
    boyBubble.style.top = (boyRect.top - 50) + 'px';

    if (distance < 120) { 
        chatMenu.style.display = 'flex'; // ໂຊປຸ່ມໃຫ້ເລືອກ
    } else {
        chatMenu.style.display = 'none';
        boyBubble.style.display = 'none';
        bubble.style.display = 'none';
    }
}

// ຟັງຊັນການລົມກັນ
function talk(type) {
    boyBubble.style.display = 'block';
    bubble.style.display = 'block';

    if (type === 'hello') {
        boyBubble.innerText = "ສະບາຍດີຄົນສວຍ!";
        setTimeout(() => {
            bubble.innerText = "ສະບາຍດີຈະ້ ມີຫຍັງບໍ?";
        }, 1000);
    } 
    else if (type === 'compliment') {
        boyBubble.innerText = "ມື້ນີ້ເຈົ້າຄືມາໜ້າຮັກແທ້!";
        setTimeout(() => {
            bubble.innerText = "ຂອບໃຈເດີ້... ເຈົ້າກໍຄືກັນ 😊";
        }, 1000);
    } 
    else if (type === 'askOut') {
        boyBubble.innerText = "ວາເລັນທາຍນີ້ ໄປກິນເຂົ້າກັບຂ້ອຍບໍ່?";
        setTimeout(() => {
            bubble.innerText = "ໄດ້ເລີຍ! ໄປໃສດີນໍ?";
        }, 1000);
    }
}

setInterval(checkDistance, 100);

// ປັບປຸງໃນສ່ວນ keydown ເດີມ
document.addEventListener('keydown', (event) => {
    const dog = document.querySelector('.dog');
    
    if (event.key === 'ArrowLeft') {
        positionX -= speed;
        person.style.left = positionX + 'px';
        person.style.transform = 'scaleX(-1)';
        
        // ໝາຍ່າງຕາມ (ວາງໄວ້ເບື້ອງຂວາຂອງເຈົ້າຂອງເມື່ອຍ່າງໄປຊ້າຍ)
        dog.style.left = (positionX + 40) + 'px';
        dog.style.transform = 'scaleX(-1)';
    } 
    else if (event.key === 'ArrowRight') {
        positionX += speed;
        person.style.left = positionX + 'px';
        person.style.transform = 'scaleX(1)';
        
        // ໝາຍ່າງຕາມ (ວາງໄວ້ເບື້ອງຊ້າຍຂອງເຈົ້າຂອງເມື່ອຍ່າງໄປຂວາ)
        dog.style.left = (positionX - 40) + 'px';
        dog.style.transform = 'scaleX(1)';
    }
    // ... ສ່ວນອື່ນໆຄືເກົ່າ ...
});