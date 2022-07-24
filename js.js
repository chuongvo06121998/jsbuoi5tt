const A = 4e+6;
const B = 1.6e+6;
const THUNHAP60 = 6e+7;
const THUNHAP120 = 12e+7;
const THUNHAP210 = 21e+7;
const THUNHAP384 = 384e+6;
const THUNHAP624 = 624e+6;
const THUNHAP960 = 960e+6;
const THUE5 = 5 / 100;
const THUE10 = 10 / 100;
const THUE15 = 15 / 100;
const THUE20 = 20 / 100;
const THUE25 = 25 / 100;
const THUE30 = 30 / 100;
const THUE35 = 35 / 100;
document.getElementById("btnKinh").onclick = function(){
    var thueThuNhap = 0;
    var TnChiuThue = 0;
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = document.getElementById("tongThu").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    TnChiuThue = thuNhapNam - A - nguoiPhuThuoc * B;
    if (TnChiuThue <= THUNHAP60) {
        thueThuNhap = TnChiuThue * THUE5;
    } else if (TnChiuThue > THUNHAP60 && TnChiuThue <= THUNHAP120) {
        thueThuNhap = TnChiuThue * THUE10;
    } else if (TnChiuThue > THUNHAP120 && TnChiuThue <= THUNHAP210) {
        thueThuNhap = TnChiuThue * THUE15;
    } else if (TnChiuThue > THUNHAP210 && TnChiuThue <= THUNHAP384) {
        thueThuNhap = TnChiuThue * THUE20;
    } else if (TnChiuThue > THUNHAP384 && TnChiuThue <= THUNHAP624) {
        thueThuNhap = TnChiuThue * THUE25;
    } else if (TnChiuThue > THUNHAP624 && TnChiuThue <= THUNHAP960) {
        thueThuNhap = TnChiuThue * THUE30;
    } else if (TnChiuThue > THUNHAP960) {
        thueThuNhap = TnChiuThue * THUE35;
    }
    document.getElementById("tinhTien").innerHTML = "Thuế thu nhập cá nhân: " + hoTen  + thueThuNhap + " VND ";
}
//bai 2
const hoaDonND = 45 / 10;
const cobanND = 205 / 10;
const kenhND = 75 / 10;

const hoadonDN = 15;
const cobanDN_75 = 75;
const cobanDN_5 = 5;
const kenhDN = 50;
// xử lý
function changeStatus() {
    var status = getEleID("selectKhachHang");

    if (status.value == "doanhNghiep") {
        getEleID("appear").style.visibility = "visible";
    } else {
        getEleID("appear").style.visibility = "hidden";
    }
}
document.getElementById("btnKinh_2").onclick = function (){
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value*1;
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var tongTienCap = 0;
    var khachHang = document.getElementById("selectKhachHang");
    var inBill = document.getElementById("tinhTien_2");
    if (khachHang.value == "nhaDan") {
        tongTienCap = hoaDonND + cobanND + soKenh * kenhND;
        inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Tổng tiền: $${tongTienCap}`
    }

    // In hóa đơn khi khách hàng là "Doanh nghiệp"
    if (khachHang.value == "doanhNghiep") {
        if (ketNoi <= 10) {
            tongTienCap = hoadonDN + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        } else {
            tongTienCap = hoadonDN + (ketNoi - 10) * cobanDN_5 + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        }
    }
}