var currentFormat = new Intl.NumberFormat("vn-VN");

/* 
    ASSUMING
        - Người dùng nhập số ngày công 
        - Lương 1 ngày công 100000
        - Người dùng nhấn nút Tính tiền công sẽ thực thi function calcSalary

    INPUT
        - Tạo biến workDay gán giá trị từ input có id "workDay"
    
    HANDLE
        - Tạo biến salary gán giá trị tích của payForDay*workDay

    OUTPUT
        - Tạo biến showPayRoll để nhận giá trị string là các thẻ HTML
        - Hiển thị giá trị của biến showPayRoll ra div tag có id showPayRoll
*/

function calcSalary() {
   var workDay = +document.getElementById("workDay").value;
   var payForDay = 100000;
   var salary = workDay * payForDay;

   var showPayRoll = "<div>";
   showPayRoll += "<p>Số ngày công: " + workDay + "</p>";
   showPayRoll +=
      "<p>Lương 1 ngày công: " + currentFormat.format(payForDay) + " VNĐ</p>";
   showPayRoll +=
      "<p>Tiền lương nhận được: " + currentFormat.format(salary) + " VNĐ</p>";
   showPayRoll += "</div>";

   document.getElementById("showPayRoll").innerHTML = showPayRoll;
}

/* 
    ASSUMING
        - Người dùng nhập vào 5 số thực

    INPUT
        - Tạo biến realNumberX với x chạy từ 1-5 gán giá trị lần lượt từ input có id realNumberX với x chạy từ 1-5
    
    HANDLE
        - Tạo biến total gán giá trị trung bình của 5 số thực
        - Formula: Tổng giá trị các số thực/Số lượng số thực

    OUTPUT
        - Tạo biến showAverageValue để nhận giá trị string là các thẻ HTML
        - Hiển thị giá trị của biến showAverageValue ra div tag có id showAverageValue
*/

function calcAverageValue() {
   var realNumber1 = +document.getElementById("realNumber1").value;
   var realNumber2 = +document.getElementById("realNumber2").value;
   var realNumber3 = +document.getElementById("realNumber3").value;
   var realNumber4 = +document.getElementById("realNumber4").value;
   var realNumber5 = +document.getElementById("realNumber5").value;

   var total =
      (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;

   var showAverageValue = "<div>";
   showAverageValue +=
      "<p>Giá trị trung bình của 5 số thực: " +
      currentFormat.format(total) +
      " VNĐ</p>";
   showAverageValue += "</div>";

   document.getElementById("showAverageValue").innerHTML = showAverageValue;
}

/* 
    ASSUMING
        - Giá USD: 23.500 VND | 1$ USD = 23.500 VND
        - Cho người dùng nhập vào số lượng USD cần quy đổi

    INPUT
        - Tạo biến exchangeRate gán giá trị 23.500
        - Tạo biến usdCurrency gán giá trị từ input có id usdCurrency
    
    HANDLE
        - Tạo biến result gán giá trị quy đổi sang VND
        - Formula: VND = số lượng USD quy đổi * tỉ giá

    OUTPUT
        - Tạo biến showPrice để gán giá trị string là các thẻ HTML
        - Hiển thị giá trị của biến showPrice ra thẻ div có id showPrice
*/

function calcPrice() {
   var exchangeRate = 23500;
   var usdCurrency = +document.getElementById("usdCurrency").value;

   var result = usdCurrency * exchangeRate;

   var showPrice = "<div>";
   showPrice +=
      "<p>Số tiền thực nhận: " + currentFormat.format(result) + " VNĐ</p>";

   document.getElementById("showPrice").innerHTML = showPrice;
}

/* 
    ASSUMING
        - Cho người dùng nhập giá trị chiều dài
        - Cho người dùng nhập giá trị chiều rộng

    INPUT
        - Tạo biến length gán giá trị input có id length
        - Tạo biến width gán giá trị input có id width
    
    HANDLE
        - Tạo biến acreage gán giá trị diện tích
        - Tạo biến perimeter gán giá trị chu vi
        - Formula: 
            + Chu vi: (length + width) * 2
            + Diện tích: length * 2

    OUTPUT
        - Tạo biến showRectangle và gán giá trị string là các thẻ HTML
        - Hiển thị giá trị biến showRectangle ra thẻ div có id showRectangle
*/
function calcRectangle() {
   var length = +document.getElementById("length").value;
   var width = +document.getElementById("width").value;

   var acreage = length * width;
   var perimeter = (length + width) * 2;

   var showRectangle = "<div>";
   showRectangle += "<p>Diện tích: " + currentFormat.format(acreage) + "</p>";
   showRectangle += "<p>Chu vi: " + currentFormat.format(perimeter) + "</p>";

   document.getElementById("showRectangle").innerHTML = showRectangle;
}

/* 
    ASSUMING
        - Cho người dùng nhập vào số dương có 2 chữ số
        - Ký số của n = 12 | 1 + 2

    INPUT
        - Tạo biến twoDigitNumbers gán giá trị input có id twoDigitNumbers
    
    HANDLE
        - Kiểm tra giá trị của twoDigitNumbers
            + Nếu < 0 return
            + Nếu >= 10 && <=99 thì thực hiện các line code tiếp theo (2)
            + Nếu số giá trị là 3 số trở lên thì thông báo cho người dùng nhập lại số có 2 chữ số
        (2):
        - Tạo biến dozens = Math.floor(twoDigitNumbers / 10)
        - Tạo biến beforeDozens = Math.floor(twoDigitNumbers % 10)
        - Tạo biến total gán giá trị tổn 2 ký số của số có 2 chữ số
        - Formula: 
            + Tổng 2 ký số của số có 2 chữ số: hàng chục + hàng đơn vị
    OUTPUT
        - Tạo biến showTotal để gán giá trị string là các thẻ HTML
        - Hiển thị giá trị của biến showTotal ra thẻ div có id showTotal
*/

function calcTotal() {
   var twoDigitNumbers = +document.getElementById("twoDigitNumbers").value;

   if (twoDigitNumbers < 0) {
      document.getElementById("showTotal").innerHTML =
         "<p>Vui lòng nhập lại số dương có 2 chữ số!</p>";
      return;
   }

   if (twoDigitNumbers <= 99 && twoDigitNumbers >= 10) {
      var dozens = Math.floor(twoDigitNumbers / 10);
      var beforeDozens = Math.floor(twoDigitNumbers % 10);
      var total = dozens + beforeDozens;

      var showTotal = "<div>";
      showTotal +=
         "<p>Tổng 2 ký số của " + twoDigitNumbers + " là: " + total + "</p>";

      document.getElementById("showTotal").innerHTML = showTotal;
   } else {
      document.getElementById("showTotal").innerHTML =
         "<p>Vui lòng nhập lại số có 2 chữ số!</p>";
      return;
   }
}
