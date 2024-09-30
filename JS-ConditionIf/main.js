// 9.1 Kiểm tra số nguyên dương hay nguyên âm
function checkInteger() {
    let n = prompt("Nhap so nguyen can kiem tra:");
    n = parseInt(n);
    if (n > 0) {
        console.log(n + " la so nguyen duong");
    } else if (n < 0) {
        console.log(n + " la so nguyen am");
    } else {
        console.log("0 khong phai la so nguyen duong hay am");
    }
}

// 9.2 Kiểm tra chia hết cho 3 hay 5
function checkDivisible() {
    let n = prompt("Nhap so nguyen n:");
    n = parseInt(n);
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(n + " chia het cho ca 3 va 5");
    } else if (n % 3 === 0) {
        console.log(n + " chia het cho 3");
    } else if (n % 5 === 0) {
        console.log(n + " chia het cho 5");
    } else {
        console.log(n + " khong chia het cho ca 3 va 5");
    }
}

// 9.3 In số ngày của tháng
function checkDaysInMonth() {
    let month = prompt("Nhap thang trong nam:");
    month = parseInt(month);
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        console.log("Thang " + month + " co 31 ngay");
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        console.log("Thang " + month + " co 30 ngay");
    } else if (month === 2) {
        console.log("Thang 2 co 28 ngay");
    } else {
        console.log("Thang " + month + " la thang khong hop le");
    }
}

// 9.4 Giải phương trình bậc 2
function solveQuadratic() {
    let a = parseFloat(prompt("Nhap he so a:"));
    let b = parseFloat(prompt("Nhap he so b:"));
    let c = parseFloat(prompt("Nhap he so c:"));

    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phuong trinh co 2 nghiem phan biet: " + x1 + " va " + x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phuong trinh co nghiem kep: " + x);
    } else {
        console.log("Phuong trinh vo nghiem");
    }
}

// 9.5 Kiểm tra 3 cạnh có phải tam giác không
function checkTriangle() {
    let a = parseInt(prompt("Nhap canh a:"));
    let b = parseInt(prompt("Nhap canh b:"));
    let c = parseInt(prompt("Nhap canh c:"));

    if (a + b > c && b + c > a && a + c > b) {
        console.log("Day la 3 canh cua mot tam giac");
    } else {
        console.log("Khong phai la 3 canh cua mot tam giac");
    }
}

// Chạy tất cả chương trình một cách tuần tự
checkInteger();        // 9.1
checkDivisible();      // 9.2
checkDaysInMonth();    // 9.3
solveQuadratic();      // 9.4
checkTriangle();       // 9.5
