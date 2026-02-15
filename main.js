let count = 0;

const button = document.getElementById("adding_button");
const display_header = document.getElementById("display_header");
    
// สร้าง event ให้ปุ่มรอการ Interact.
button.addEventListener('click',function(){
    count++;
    display_header.textContent = count;
});