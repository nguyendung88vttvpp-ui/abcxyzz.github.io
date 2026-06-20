const words = ["designer", "coder", "developer", "creator"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('dynamic-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Đợi 2 giây sau khi gõ xong rồi xóa
            return false;
        }
        timer = setTimeout(loopTyping, 150); // Tốc độ gõ (ms)
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('dynamic-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500); // Đợi 0.5 giây trước khi gõ từ mới
            return false;
        }
        timer = setTimeout(loopDeleting, 70); // Tốc độ xóa chữ
    };
    loopDeleting();
}

// Chạy hiệu ứng khi trang tải xong
document.addEventListener("DOMContentLoaded", function() {
    typingEffect();
});
