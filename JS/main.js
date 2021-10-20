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
const list_contact = $('.container-right-brand-list');
const container_right = $('.container-right');
const list_story = $('.slider-review');
const btnNext = $('.js-next-story');
const itemStory = $('.js-item-story');
const likebtn = $$('.js-like-status');
const input__blog = $('#comment-status');
const apps = {
    currentIndex: 0,
    contact_list:[
        {
            user_name: "Trường Nguyễn",
            img: './assets/img/user.jpg',
            friend: '75',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Nguyễn Trường",
            img: './assets/img/user2.jpg',
            friend: '100',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Vũ Minh Hiếu",
            img: './assets/img/user3.jpg',
            friend: '125',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Hoàng Hành",
            img: './assets/img/user4.jpg',
            friend: '300',
            place: 'Hà Nội'
        },
        {
            user_name: "Em yêu",
            img: './assets/img/user5.jpg',
            friend: '222',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Thảo Mun",
            img: './assets/img/user-6.jpg',
            friend: '400',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Nguyễn Văn Long",
            img: './assets/img/user-7.jpg',
            friend: '175',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Duc Tran",
            img: './assets/img/user-8.jpg',
            friend: '725',
            place: 'Hà Nội'
        },
        {
            user_name: "Lê Quang Phong",
            img: './assets/img/user-9.jpg',
            friend: '425',
            place: 'Hà Nội'
        },
        {
            user_name: "Dung Mun",
            img: './assets/img/user-10.jpg',
            friend: '415',
            place: 'Bắc Ninh'
        },
        {
            user_name: "Quên Tên Anh",
            img: './assets/img/user-11.jpg',
            friend: '2',
            place: 'Hà Tĩnh'
        },
        {
            user_name: "Quên Tên Anh",
            img: './assets/img/user-11.jpg',
            friend: '2',
            place: 'Hà Tĩnh'
        },
    ],
    list_story: [
        './assets/img/Dung.jpg',
        './assets/img/Dung1.jpg',
        './assets/img/Dung2.jpg',
        './assets/img/user-10.jpg',
        './assets/img/hoa1.jpg',
    ],
    list_story1: [
        './assets/img/Thảo.jpg',
        './assets/img/Thao1.jpg',
        './assets/img/Thao2.jpg',
        './assets/img/user-6.jpg',
        './assets/img/hoa2.jpg',
    ],
    list_story2: [
        './assets/img/Thuy.jpg',
        './assets/img/Thuy1.jpg',
        './assets/img/Thuy2.jpg',
        './assets/img/Thùy-user.jpg',
        './assets/img/hoa3.jpg',
    ],
    list_story3: [
        './assets/img/oanh.PNG',
        './assets/img/oanh1.jpg',
        './assets/img/oanh and thao.jpg',
        './assets/img/oanh-user.jpg',
        './assets/img/hoa4.jpg',
    ],
    list_story4: [
        './assets/img/ngoc.jpg',
        './assets/img/ngoc1.jpg',
        './assets/img/ngoc2.jpg',
        './assets/img/ngoc-user.jpg',
        './assets/img/hoa5.jpg',
    ],
    list_story5: [
        './assets/img/Dung.jpg',
        './assets/img/Thảo1.jpg',
        './assets/img/Thuy1.jpg',
        './assets/img/ngoc1.jpg',
        './assets/img/oanh.PNG',
    ],
    renderListContact: function(){
        const length = this.contact_list.length;
        const htmls = this.contact_list.map(function(item,index){
            return `
            <li class="container-right-brand-item hover">
            <a href="" class="container-right-brand-link ">
                <span class="container-right-brand-img">
                    <img src="${item.img}" alt="">
                </span>
                <div class="container-right-brand-friend">
                    <span class="user">${item.user_name}</span>
                </div>
            </a>
            <div class="info-friend-container-right ${index >= length -3 ? 'user-1': ''} " style="--i:${index + 1};">
                <div class="container-right-brand-information">
                    <div class="container-right-brand-information-friend">
                        <div class="container-right-brand-info-friend">
                            <div class="container-right-brand-info-block">
                                <span class="container-right-brand-info-block__img">
                                    <img src="${item.img}" alt="">
                                </span>
                                <div class="container-right-brand-info-block-name">
                                    <div class="container-right-brand-info-block-name__name">
                                        <h3 class="name-friend">${item.user_name}</h3>
                                    </div>
                                    <div class="container-right-brand-info-block-name__name-info">
                                        <div class="container-right-brand-info-block__name-info-place">
                                            <span class="container-right-friend-info__icon">
                                                <i class="fas fa-user-friends"></i>
                                            </span >
                                            <span class="container-right-friend-info__heading">${item.friend} bạn chung bao gồm
                                                <span class="user-size-s">Duc Tran</span> và
                                                <span class="user-size-s">Nguyễn Văn Trường</span>
                                            </span>
                                        </div>
                                        <div class="container-right-brand-info-block__name-info-place">
                                            <span class="container-right-friend-info__icon">
                                                <i class="fas fa-house-user"></i>
                                            </span>
                                            <span class="container-right-friend-info__heading">Sống tại
                                                <span class="user-size-s">${item.place}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
            `
        })
        list_contact.innerHTML = htmls.join('');
    },
    CreatElemt: function(){

    },
    handleEvent: function(){
        const _this = this;
        status_modal.onclick = function(){
            $('.open-close-messenger_footer').style.display = 'none';
            $('.modal').style.display = 'flex';
        }
        close_modal.onclick = function(){
            $('.modal').style.display = 'none';
            $('.open-close-messenger_footer').style.display = 'block';
        }
        // Xử lý đăng bài viết
        var inputBlog;
        status_input.oninput = function(e){
            if(e.target.value != ''){
                btn_submit.classList.add('active-submit');
                inputBlog = e.target.value;
                _this.ShowPostBlog(inputBlog);
                }
            if(e.target.value ===''){
                btn_submit.classList.remove('active-submit');
            }
            // e.target.value = '';
            // close_modal.onclick();
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
        //Xử lý danh sách liên hệ
        container_right.onscroll = function(){
            const scrollTop = this.scrollHeight;
            console.log(scrollTop);
        }
        likebtn.forEach(function(item){
            item.onclick = function(){
                this.classList.toggle('active');
                const check = this.classList.contains('active');
                const par = this.parentNode.parentNode.parentNode;
                const par3 = par.querySelector('.number-like');
                console.log(par3);
                const numberLike = Number(par3.textContent) ;
                if(check){
                    par3.textContent = numberLike + 1;
                }
                else{
                    par3.textContent = numberLike - 1;
                }
            }
        })
        // Xử lý comment bài viết
        var inputValue;
        input__blog.oninput = function(e){
            inputValue = e.target.value;
            _this.showValue(inputValue)
        }
        const comment = $('.js-comment-status');
        const comment_block = $('.comment-block');
        comment.onclick = function(){
           comment_block.classList.add('open');
           input__blog.focus();
              
        }
       //
       let dem = 0;
       const user_img = $('.user-img');
       const img = $('.js-user-story');
       const img1 = $('.js-user-story-1');
       const img2 = $('.js-user-story-2');
       const img3 = $('.js-user-story-3');
       const img4 = $('.js-user-story-4');
       btnNext.onclick = function(){
        dem++;
        if(dem > _this.list_story1.length - 1){
            dem = 0;
        }
        user_img.src = _this.list_story5[dem];
        img.src = _this.list_story[dem];
        img1.src = _this.list_story1[dem];
        img2.src = _this.list_story2[dem];
        img3.src = _this.list_story3[dem];
        img4.src = _this.list_story4[dem];
       }
       setInterval(function(){
        btnNext.click();
    },5000);
    },
    showValue: function(input){
        input__blog.onkeydown = function(e){
            switch(e.which){
                case 13:{
                    const comment_block__content = $('.comment-block__content');
                    const inputCmt = document.createElement('div');
                    inputCmt.innerHTML = `
                    <div class="comment-user-content" style="display: flex;">
                    <span class="comment-block__content-user">
                        <img src="./assets/img/user.jpg" alt="">
                    </span>
                    <div class="comment-content">
                        <div class="comment-content__heading">
                            <span class="user">Trường Nguyễn</span>
                            <p>${input}</p>
                            <span class="comment-content__heading-selction hover">
                                <i class="fas fa-ellipsis-h"></i>
                            </span>
                        </div>
                     </div>
                </div>
                 <div class="comment-content__body">
                      <div class="comment-content__body-interact" style="margin-left: 40px;">
                          <span>Thích</span> 
                          <span>Phản hồi</span>
                         <span class="time">Vừa Xong</span>
                      </div>
                 </div>
                    `;
                comment_block__content.appendChild(inputCmt);
                e.target.value = '';
               
                }
            }
        }
    },
    ShowPostBlog: function(input){
        const submitblog = $('.btn-sumbit-status');
        submitblog.onclick = function(){
            const check = false;
            const blog = $('.center-content-blog');
            const blogitem = document.createElement('div');
            blogitem.innerHTML = `
            <div class="center-content-blog__header">
                 <span class="center-content-blog__header-heading hover-hover">
                     <img src="./assets/img/user.jpg" alt="">
                 </span>
                 <div class="center-content-blog__header-name">
                     <div class="center-content-blog__header-name-user">
                         <span class="user hover-underline">Trường Nguyễn</span>
                     </div>
                     <div class="center-content-blog__header-name-icon">
                         <span class="time hover-underline">Vừa Xong</span>
                         <span class="icon-user">
                             <i class="fas fa-globe-americas"></i>
                         </span>
                     </div>
                 </div>
                 <div class="center-content-blog__header-icon hover">
                     <i class="fas fa-ellipsis-h"></i>
                 </div>
                 </div>
                 <div class="center-content-blog__paragrap">
                     <p>${input}</p>
                 </div>
                 <div class="center-content-blog__img">
                    
                 </div>
                 <div class="center-content-blog__like">
                     <div class="center-content-blog__like-love" >
                         <span class="like-status ">
                             <i class="fas fa-thumbs-up"></i>
                         </span>
                         
                         <span class="number-like time hover-underline">1</span>
                     </div>
                     <div class="center-content-blog__like-number-share">
                         <span class="time hover-underline"></span>
                     </div>
                 </div>
                 <div class="center-content-blog__footer">
                     <div class='icon-comment'>
                         <div onclick="this.classList.toggle('active')" class="center-content-blog__footer-icon-like js-like-status hover">
                             <span class="icon-like">
                                 <i class="far fa-thumbs-up"></i>
                             </span>
                             <span class="number-like">Like</span>
                         </div>
                         <div class="center-content-blog__footer-icon-like js-comment-status hover">
                             <span class="icon-like">
                                 <i class="far fa-comment"></i>
                             </span>
                             <span class="number-like">Bình luận</span>
                         </div>
                         <div class="center-content-blog__footer-icon-like hover">
                             <span class="icon-like">
                                 <i class="fas fa-share"></i>
                             </span>
                             <span class="number-like">Chia sẻ</span>
                         </div>
                     </div>
                 </div>
            `;
            close_modal.click();
            blog.appendChild(blogitem);
            input = '';
        }
    },
    start: function(){
        this.handleEvent();
        this.renderListContact();
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

