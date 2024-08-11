document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "ถ้าเพื่อนตัดผมทรงใหม่ แล้วคุณรู้สึกไม่ชอบทรงผมนั้น คุณจะ...",
            answer: [
                {text: "เก็บความคิดเห็นส่วนตัวไว้ในใจ", points: 0},
                {text: "เอาไปหัวเราะนินทากับเพื่อนคนอื่น", points: 20},
                {text: "เดินไปแซวเพื่อนคนนั้น", points: 30},
            ]
        },
        {
            question: "คุณชอบนำเรื่องของคนอื่นไปพูดโดยไม่รู้ข้อเท็จจริงไหม",
            answer: [
                {text: "ไม่เคย", points: 0},
                {text: "มีบ้างบางครั้ง ตามเพื่อน", points: 15},
                {text: "ถ้าไม่ชอบก็จะใส่ร้ายเยอะๆ", points: 30},
            ]
        },
        {
            question: "ถ้ามีเพื่อนที่เจอปัญหาหนักคุณจะทำยังไง",
            answer: [
                {text: "ซ้ำเติม แล้วบอกว่าทำไมถึงไม่ทำตามที่ฉันบอก", points: 30},
                {text: "แอบสมน้ำหน้าอยู่ในใจ", points: 20},
                {text: "ไปให้คำปรึษาเพื่อนเพราะเคยผ่านมาแล้ว", points: 0},
            ]
        },
        {
            question: "คุณเคยล้อเลียนรูปร่างหน้าตาของเพื่อนมั้ย",
            answer: [
                {text: "ประจำ ก็มันสนุกหนิ", points: 40},
                {text: "เคยตามเพื่อน", points: 30},
                {text: "ไม่เคย มันไม่ดี", points: 0},
            ]
        },
        {
            question: "ถ้าคนที่คุณไม่ชอบต้องการความช่วยเหลือ",
            answer: [
                {text: "ไม่ช่วยหรอก แถมซ้ำเติม", points: 30},
                {text: "แอบสะใจ", points: 15},
                {text: "ช่วยแต่ก็ไม่เต็มใจมาก", points: 10},
            ]
        },
        {
            question: "ถ้าคุณโดนบูลลี่จะรู้สึกยังไง",
            answer: [
                {text: "แค้น สักวันต้องเอาคืน", points: 30},
                {text: "เศร้า ร้องไห้ ไม่อยากโดนอีก", points: 5},
                {text: "เอาไปเล่าคนอื่น ว่ามีคนมาบุลลี่คุณ", points: 15},
            ]
        },
        {
            question: "ถ้าในห้องมีเพื่อนคนนึง ที่เพื่อนๆทั้งห้องไม่ชอบเขาเพราะรูปร่าง คุณจะ…",
            answer: [
                {text: "ปล่อยผ่านไป ไม่อยากมีปัญหากับเพื่อนคนอื่น", points: 20},
                {text: "เข้าไปคุยกับเพื่อนคนนั้น", points: 0},
                {text: "เข้าไปกลั่นแกล้งเพื่อนคนนั้น", points: 40},
            ]
        },
        {
            question: "ถ้าดาราโดนวิพากษ์วิจารณ์เรื่องหน้าตาในโซเชียลคุณจะ…",
            answer: [
                {text: "เข้าไปคอมเม้นด่าด้วย", points: 50},
                {text: "แคปไปนินทากับเพื่อน", points: 40},
                {text: "สงสาร เพราะไม่มีใครควรโดนล้อเรื่องหน้าตา", points: 0},
            ]
        },  
        {
            question: "ถ้าคุณเจอสถานการณ์ที่รู้สึกว่าตัวเองด้อยกว่าคนอื่น คุณจะ...",
            answer: [
                {text: "ทำให้ตัวเองดีขึ้นกว่านี้", points: 5},
                {text: "ไปว่าเขาให้เขารู้สึกแย่", points: 30},
                {text: "คุณไม่สนใจเพราะคุณดีที่สุดในโลก", points: 15},
            ]
        },
        {
            question: "ถ้าคุณอยู่ในสังคมที่มีแต่การบูลลี่ คุณจะ…",
            answer: [
                {text: "ออกจากสังคมนั้น หาสังคมใหม่ๆ", points: -70},
                {text: "ทำตัวให้ชิน พยายามไม่สนใจ", points: -30},
                {text: "ปรับตัวให้เข้ากับคนที่บูลลี่ จะได้อยู่ในสังคมได้", points: 30},
            ]
        }
        
        
    ];
    let currentQuestionIndex = 0;
    let totalPoints = 0;
    const selectedPoints = new Array(questions.length).fill(null);

    function loadQuestion(index) {
        const questionData = questions[index];

        const questionElement = document.getElementById("questiontext");
        questionElement.textContent = questionData.question;

        const answerContainer = document.querySelector(".radio-list");
        answerContainer.innerHTML = "";

        questionData.answer.forEach((ans, idx) => {
            const radioItem = document.createElement("div");
            radioItem.classList.add("radio-item");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "radio";
            radioInput.id = "radio" + (idx + 1);
            radioInput.value = ans.points;


            if (selectedPoints[currentQuestionIndex] === ans.points) {
                radioInput.checked = true;
            }

            const radioLabel = document.createElement("label");
            radioLabel.htmlFor = "radio" + (idx + 1);
            radioLabel.textContent = ans.text;

            radioItem.appendChild(radioInput);
            radioItem.appendChild(radioLabel);
            answerContainer.appendChild(radioItem);
        });

        document.querySelector(".current").textContent = index + 1;
    }

    function updateTotalPoints(newPoints) {
        if (selectedPoints[currentQuestionIndex] !== null) {
            totalPoints -= selectedPoints[currentQuestionIndex];
        }
        selectedPoints[currentQuestionIndex] = newPoints;
        totalPoints += newPoints;
    }

    loadQuestion(currentQuestionIndex);

    const nextButton = document.querySelector(".nextbutton");
    nextButton.addEventListener("click", function() {
        const selectedRadio = document.querySelector('input[name="radio"]:checked');
        if (selectedRadio) {
            const points = parseFloat(selectedRadio.value);
            updateTotalPoints(points);

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
            } else {
                localStorage.setItem('point', totalPoints);
                localStorage.setItem('quizCompleted', 'true');
                window.location.href = "result.html";
            }
        } else {
            alert("Please select an answer before proceeding.");
        }
    });

    const previousButton = document.querySelector(".previousbutton");
    previousButton.addEventListener("click", function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });
});
