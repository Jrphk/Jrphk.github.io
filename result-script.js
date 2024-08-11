document.addEventListener("DOMContentLoaded", function() {
    const quizCompleted = localStorage.getItem('quizCompleted');

    if (quizCompleted === 'true') {
        const result = [
            {
                result: "มีนิสัยการบูลลี่ในระดับมาก",
                explain: "คุณเป็นคนที่มีทัศนคติไปในทางที่ลบ ควรที่จะปรับเปลี่ยนความคิดเพื่อที่จะดำเนินชีวิตไปต่อได้โดยไม่สร้างความเดือดร้อนให้คนอื่นทั้งทางจิตใจและร่างกาย เราอยากให้คุณนึกเสมอว่าถ้าคุณไม่ชอบอะไรอย่าไปทำสิ่งนั้นกับคนอื่นเลย \n” เริ่มต้นใหม่นะ ไม่มีคำว่าสาย “ "
            },
            {   
                result: "มีนิสัยการบูลลี่ในระดับปานกลาง",    
                explain: "คุณเป็นคนที่ไม่ค่อยบูลลี่คนอื่นแต่ก็มีบ้าง คุณควรที่จะคิดทบทวนในการกระทำของตนเองก่อนทำและพัฒนาความคิดให้ดีขึ้น ”คุณเก่งแล้วแต่เราเชื่อว่าคุณทำได้“"
            },
            {
                result: "มีนิสัยการบูลลี่ในระดับน้อย",
                explain: "คุณเป็นคนที่ทัศนคติดีแล้วในหลายหลายสิ่ง แต่อาจมีบางส่วนเล็กๆน้อยๆที่แอบแฝงความบูลลี่โดยที่คุณอาจไม่รู้ตัว แต่ไม่เป็นไรฉันเชื่อว่าคนดีดีแบบคุณสามารถทำดีต่อไปได้โดยไม่มีคำบูลลี่"
            },

            {
                result: "โปรดทำแบบทดสอบ",
                explain: "คุณยังไม่ทำแบบทดสอบ โปรดทำแบบทดสอบเพื่อที่จะวัดระดับ"
            }
        ];

        let myVariable = localStorage.getItem('point');
        let pointindex = 0;

        if (myVariable >= 280) {
            pointindex = 0;
        } else if (myVariable >= 100 && myVariable < 280) {
            pointindex = 1;
        } else if (myVariable >= -100 && myVariable < 100) {
            pointindex = 2;
        }

        function loadresult(index) {
            const resultdata = result[index];
            const resultElement = document.getElementById("resulttext");
            resultElement.textContent = resultdata.result;

            const explainElement = document.getElementById("explaintext");
            explainElement.textContent = resultdata.explain;
        }

        loadresult(pointindex);

    } else {
        alert("โปรดทำแบบทดสอบก่อน");
        window.location.href = "quiz.html"; 
    }
});
