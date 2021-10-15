const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const tabs = $$(".nav-item-link--act");
const headericons = $$(".nav-link__icon");
tabs.forEach(function (value,index){
    const headericon = headericons[index];
    value.onclick = function(){
        $(".nav-item-link--act.boder-act").classList.remove("boder-act");
        $(".nav-link__icon.nav-link__icon--act").classList.remove("nav-link__icon--act");
        this.classList.add("boder-act");
        headericon.classList.add("nav-link__icon--act");
    }
})
// Xử lý
const status_modal = $('.center-content-status__user-block');
const close_modal = $('.close-status-modal');
const status_input = $('.stutus__modal-body_content-ct');
const btn_submit = $('.btn-sumbit-status');
const require = $('.container-right-require');
const btn_agree = $('.js-require-agree');
const btn_cancel = $('.js-require--cancel');
const footer_open_messenger = $('.js_footer_messenger');
const footer_close_messenger = $('.footer-messenger-header__icon');
const footer_messenger = $('.footer-messenger');
const Messenger = $(".js-messenger");
const iconMes = $('.js-icon-messenger');
const iconNot = $('.js-icon-notification');
const Notification = $('.js-notification');
const Account = $('.js-account');
const iconAcc = $('.js-icon-account');
const apps = {
    handleEvent: function(){
        status_modal.onclick = function(){
            $('.open-close-messenger_footer').style.display = 'none';
            $('.modal').style.display = 'flex';
        }
        close_modal.onclick = function(){
            $('.modal').style.display = 'none';
            $('.open-close-messenger_footer').style.display = 'block';
        }
        status_input.onkeydown = function(e){
            if(e.target.value != ''){
                btn_submit.classList.add('active-submit');
            }
            if(e.target.value ===''){
                btn_submit.classList.remove('active-submit');
            }
        }
        // Xử lý ấn nút btn chấp nhận thì ẩn Lời mời kết bạn
        btn_cancel.onclick = function(){
           require.style.display = 'none';
        }
        btn_agree.onclick = function(){
           require.style.display = 'none';
        }
        // footer-messenger
        footer_open_messenger.addEventListener('click',function(){
            footer_messenger.classList.toggle('open');
            }
        )
        footer_close_messenger.addEventListener('click',function(){
            footer_messenger.classList.remove('open');
        }) 
        // Xử lý header-messenger
        Messenger.onclick = function(){
            this.classList.toggle('active-icon-mes');
            $('.facebook-messenger').classList.toggle('open');
            iconMes.classList.toggle('active');
            $('.facebook-notification').classList.remove('open');
            Notification.classList.remove('active-icon-mes');
            iconNot.classList.remove('active');
            $('.facebook-account').classList.remove('open');
            Account.classList.remove('active-icon-mes');
            iconAcc.classList.remove('active');
        }
        Notification.onclick = function(){
            this.classList.toggle('active-icon-mes');
            $('.facebook-notification').classList.toggle('open');
            iconNot.classList.toggle('active');
            $('.facebook-messenger').classList.remove('open');
            Messenger.classList.remove('active-icon-mes');
            iconMes.classList.remove('active');
            $('.facebook-account').classList.remove('open');
            Account.classList.remove('active-icon-mes');
            iconAcc.classList.remove('active');
        }
        Account.onclick = function(){
            this.classList.toggle('active-icon-mes');
            $('.facebook-account').classList.toggle('open');
            iconAcc.classList.toggle('active');
            $('.facebook-messenger').classList.remove('open');
            Messenger.classList.remove('active-icon-mes');
            iconMes.classList.remove('active');
            $('.facebook-notification').classList.remove('open');
            Notification.classList.remove('active-icon-mes');
            iconNot.classList.remove('active');
        }
        
    },
    start: function(){
        this.handleEvent();
    }
}
apps.start();
// footer
const footer_messenger_notification = $('.footer-messenger-notification');
function messenger_notification({
    img = '',
    user = '', 
    message = '',
    time = '',
    type = '',
    duration = 3000
}){
    const main = $('.js-messenger_notification');
    if(main){
        const toast = document.createElement('div');
        const hiden = $('.footer-messenger-notification-block');
        const footer_close_messenger = $('.js-messenger-notification__close');
        const deley = (duration / 1000).toFixed(2);
        toast.classList.add('facebook-notification-content__item','hover');
        hiden.style.animation = `slideInLeft ease-in-out 0.2s ,Fadeout linear 1s ${deley}s forwards`
        footer_close_messenger.onclick = function(){
            hiden.style.display = 'none';
            clearTimeout(openTime);
        }
        toast.innerHTML = `
        <a href="" class="facebook-notification-content__link">
                <div class="facebook-notification-content__img">
                <img src="${img}" alt="">
                <div class="facebook-notification-content__icon footer-messenger-notification-like">
                    <i class="${type}"></i>
                </div>
            </div>
            <div class="facebook-notification-content__name">
                <h3 class="facebook-notification-content__heading footer-messenger-notification-heading">
                    <span class="user">${user}</span> ${message}
                </h3>
                <span class="faceboook-notification-content__time faceboook-notification-content__time--act">${time}</span>
                
            </div>
            <div class="facebook-notification-wait">

            </div>
        </a>                               
        `;
        main.appendChild(toast);
        const openTime = setTimeout(function(){
            hiden.style.display = 'none';
          },duration + 1000)
    }
};
messenger_notification({
    img : './assets/img/user-13.jpg',
    user : 'Minh Anh', 
    message : `đã thích ảnh của bạn: Mời các bạn cùng tham gia Chuyên mục "Học từ sự kiện" - số tháng 09/2021 tại https://bitly.com.vn/rz9bf2.
    Sẽ có nhiều điều thú vị dành cho bạn!
    Chào mừng Ngày Quốc khánh 2/9/1945 - 2/9/2021.`,
    time : '23 phút trước',
    type: 'fas fa-thumbs-up',
    duration: 4000
})

