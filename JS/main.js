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
const story_href = $$('.js-story');
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
    Post__Blog: [
            {
             "name": "Patrick Rohan",
             "avatar": "./assets/img/user.jpg",
             "time": "Vừa xong",
             "content": "Hello Hello Gello 😂😄",
             "avatarPost": "./assets/img/20-10.jpg",
             "numberLike": 85,
             "numberCommen": "100 bình luận",
             "id": "1"
            },
            {
             "name": "Elvira Gerlach",
             "avatar": "./assets/img/user4.jpg",
             "time": "1 giờ",
             "content": "Are you spending too much time searching for 3D models?  Are you paying too much for downloads?  Are you limited by storage space and the number of uploads?  Join Thangs where it's quick, free, and unlimited!",
             "avatarPost": "./assets/img/user-12.jpg",
             "numberLike": 50,
             "numberCommen": "10 bình luận",
             "id": "2"
            },
            {
             "name": "Maryann Lesch",
             "avatar": "./assets/img/user3.jpg",
             "time": "2 giờ",
             "content": "Are you spending too much time searching for 3D models?  Are you paying too much for downloads?  Are you limited by storage space and the number of uploads?  Join Thangs where it's quick, free, and unlimited",
             "avatarPost": "./assets/img/user-10.jpg",
             "numberLike": 8,
             "numberCommen": "30 bình luận",
             "id": "3"
            },
            {
             "name": "Harold Walker",
             "avatar": "./assets/img/user4.jpg",
             "time": "3 giờ",
             "content": "Are you spending too much time searching for 3D models?  Are you paying too much for downloads?  Are you limited by storage space and the number of uploads?  Join Thangs where it's quick, free, and unlimited",
             "avatarPost": "./assets/img/user-8.jpg",
             "numberLike": 77,
             "numberCommen": "4 bình luận",
             "id": "4"
            },
            {
             "name": "Kelly Vandervort",
             "avatar": "./assets/img/user4.jpg",
             "time": "4 giờ",
             "content": "Are you spending too much time searching for 3D models?  Are you paying too much for downloads?  Are you limited by storage space and the number of uploads?  Join Thangs where it's quick, free, and unlimited",
             "avatarPost": "./assets/img/user-8.jpg",
             "numberLike": 49,
             "numberCommen": "5 bình luận",
             "id": "5"
            }
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
        './assets/img/Thao1.jpg',
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
    GetApi : function(){
        fetch('https://61b561e90e84b70017331af3.mockapi.io/API/Facebook/users')
        .then((res)=>{
            return res.json()
        })
        .then(this.RenderBlog)
    },
    StartGetAPI: function(){
        this.GetApi(this.RenderBlog)
        console.log(this.RenderBlog);
    },
    // Lấy dữ liệu để render
    RenderBlog: function(Blog){
        console.log(Blog)
        const postBlog = $('.center-content-post')
           const htmls = Blog.map(item=>{
                return `
                <div class="center-content-blog">
                <div class="center-content-blog__header">
                    <span class="center-content-blog__header-heading hover-hover">
                        <img src="${item.avatar}" alt="">
                    </span>
                    <div class="center-content-blog__header-name">
                        <div class="center-content-blog__header-name-user">
                            <span class="user hover-underline">${item.name}</span>
                        </div>
                        <div class="center-content-blog__header-name-icon">
                            <span class="time hover-underline">${item.time}</span>
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
                    <p>${item.content}</p>
                </div>
                <div class="center-content-blog__img">
                    <img src="${item.avatarPost}" alt="">
                </div>
                <div class="center-content-blog__like">
                    <div class="center-content-blog__like-love">
                        <span class="like-status">
                            <i class="fas fa-thumbs-up"></i>
                        </span>
                        <span class="like-status love-status">
                            <i class="fas fa-heart"></i>
                        </span>
                        <span class="number-like time hover-underline">${item.numberLike}</span>
                    </div>
                    <div class="center-content-blog__like-number-share">
                        <span class="time hover-underline">${item.numberCommen}</span>
                    </div>
                </div>
                <div class="center-content-blog__footer">
                    <div class='icon-comment'>
                        <div class="center-content-blog__footer-icon-like js-like-status hover">
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
            </div>
                `;
            });
         postBlog.innerHTML = htmls.join('');
    },
    // Dùng mảng render
    renderBlog1 : function(){
        const postBlog = $('.center-content-post')
        const htmls = this.Post__Blog.map(item=>{
             return `
        <div class="center-content-blog">
             <div class="center-content-blog__header">
                 <span class="center-content-blog__header-heading hover-hover">
                     <img src="${item.avatar}" alt="">
                 </span>
                 <div class="center-content-blog__header-name">
                     <div class="center-content-blog__header-name-user">
                         <span class="user hover-underline">${item.name}</span>
                     </div>
                     <div class="center-content-blog__header-name-icon">
                         <span class="time hover-underline">${item.time}</span>
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
                 <p>${item.content}</p>
             </div>
             <div class="center-content-blog__img">
                 <img src="${item.avatarPost}" alt="">
             </div>
             <div class="center-content-blog__like">
                 <div class="center-content-blog__like-love">
                     <span class="like-status">
                         <i class="fas fa-thumbs-up"></i>
                     </span>
                     <span class="like-status love-status">
                         <i class="fas fa-heart"></i>
                     </span>
                     <span class="number-like time hover-underline">${item.numberLike}</span>
                 </div>
                 <div class="center-content-blog__like-number-share">
                     <span class="time hover-underline">${item.numberCommen}</span>
                 </div>
             </div>
             <div class="center-content-blog__footer">
                 <div class='icon-comment'>
                     <div class="center-content-blog__footer-icon-like js-like-status hover">
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
             <div class="comment-block ">
                 <div class="comment-block__header">
                     <div class="comment-block__header-selection">
                         <h3>Phù hợp nhất</h3>
                         <i class=" fas fa-caret-down"></i>
                     </div>
                     <div class="comment-block__header-input">
                         <span class="comment-block__header-user">
                             <img src="./assets/img/user.jpg" alt="">
                         </span>
                         <div class="comment-block__header-input-ct">
                             <input class='input'type="text" name="" id="comment-status" placeholder="Viết bình luận...">
                             <div class="conmment-block__header-list-icon">
                                 <i class="far fa-meh-rolling-eyes"></i>
                                 <i class=" far fa-smile"></i>
                                 <i class="fas fa-camera-retro"></i>
                                 <i class="fab fa-git-square"></i>
                                 <i class="fas fa-atom"></i>
                             </div>
                         </div>
                     </div>
                     </div>
                     <div class="comment-block__content" >
                                                                      
                     </div>
                </div>
             </div>
         </div>
             `;
         });
      postBlog.innerHTML = htmls.join('');
    },
    CreatElemt: function(){
        const check = $('.js-like-status')
        console.log(check)
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
        // Xử lý khi click vào story hiện sang trang mới
        story_href.forEach(element=>{
            element.onclick = () =>{
                element.href = './story.html'
            }
        })
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
        const likebtn = $$(".js-like-status");
        console.log(likebtn)
        likebtn.forEach(function(item){
            item.onclick = function(){
                this.classList.toggle('active');
                const check = this.classList.contains('active');
                const par = this.parentNode.parentNode.parentNode;
                const par3 = par.querySelector('.number-like');
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
        const comment = $$('.js-comment-status');
        comment.forEach(element=>{
            element.onclick = function(){
                const comment_block = this.parentNode.parentNode.querySelector('.comment-block');
                const input__blog = this.parentNode.parentNode.querySelector('#comment-status')
                comment_block.classList.add('open');
                input__blog.focus();
                _this.getValueInput(input__blog)
            }
        })
       let dem = 0;
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
    getValueInput: function(element){
        _this = this;
        var inputValue;
        element.onkeydown = function(e){
            switch(e.which){
                case 13: {
                    inputValue = element.value;
                    const fromData = {
                        inputValue: inputValue
                    }
                    console.log(fromData)
                }
                e.target.value = '';
            }
            // _this.showValue(element,inputValue);
        }
    },
    showValue: function(element,input){
        element.onkeydown = function(e){
            switch(e.which){
                case 13:{
                const comment_blog = element.parentNode.parentNode.parentNode.parentNode.querySelector('.comment-block__content')
                comment_blog.innerHTML = 
                `
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
                `
                e.target.value = '';
                }
            }
        }
    },
   
    ShowPostBlog: function(input){
        const submitblog = $('.btn-sumbit-status');
        submitblog.onclick = function(){
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
                         <div onclick="handleLike()" class="center-content-blog__footer-icon-like js-like-status hover">
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
        this.StartGetAPI(); // Chạy việc dùng API để lấy dữ liệu render
        // this.renderBlog1(); // CHạy mảng để render
        this.renderListContact();
        this.handleEvent();
        // this.CreatElemt();
    }
}
apps.start();
function handleLike() {
    return  `class = 'active' `;
 }
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

