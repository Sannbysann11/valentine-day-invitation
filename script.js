let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
    alert('Cảm ơn em vì đã đồng ý làm lành với anh, anh yêu em rất nhiều. Cho anh mời em đi ăn valentine vào tối thứ 13/2 nhé. Anh đã chuẩn bị 3 nhà hàng ưng ý rùi, em nhắn anh để chọn ra nhà hàng em yêu thích nhé <3 . Mãi yêu em <3')
})
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
