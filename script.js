function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('coupon').style.opacity = '1';
    document.getElementsByTagName('body').style.opacity = '0.6';


}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByTagName('body').style.opacity = '1';
}

function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('darkmode');

}