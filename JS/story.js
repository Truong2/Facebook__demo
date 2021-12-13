const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const audio = $('#audio');
const btn_next = $('.btn-next');
const btn_pre = $('.btn-pre');
const btn_play = $('.btn-toggle-play');
const run_time = $('.run-time');
const btn_volume = $('.btn-volume');
const story_next = $('.list-story');
const item_story = $$('.item-story');
const list_story = $('.list-story-user');
const author = $('.author');
const user_story = $('.user-story');
const time_story = $('.time-story');
const user_img= $('.story-active-img');
const closeToHome = $('.close-app');
const app = {
    currentIndex: 0,
    count: 0,
    space: 0,
    isPlaying: false,
    isRandom: false,
    isMuted: false,
    users : [
        {
            imgUser: './media/img/user-13.jpg',
            itemStory: './media/img/user-13.jpg',
            singer:'Masew,Khôi Vũ'
        },
        {
            imgUser: './media/img/user-10.jpg',
            itemStory: './media/img/user-11.jpg',
            singer:'Trương Kha',
        },
        {
            imgUser: './media/img/user-10.jpg',
            itemStory: './media/img/user-8.jpg',
            singer:'Masew,Bray',
        },
        {
            imgUser: './media/img/user-4.jpg',
            itemStory: './media/img/user-9.jpg',
            singer:'Masew,Độ Mixi',
        },
        {
            imgUser: './media/img/user-4.jpg',
            itemStory: './media/img/user-10.jpg',
            singer:'Trí Dũng',
        },
        {
            imgUser: './media/img/user-4.jpg',
            itemStory: './media/img/user-6.jpg',
            singer:'Vân Mai Hương',
        },
        {
            imgUser: './media/img/user-4.jpg',
            itemStory: './media/img/user2.jpg',
            singer:'SOUTHALID',
        },
        {
            imgUser: './media/img/user-4.jpg',
            itemStory: './media/img/user.jpg',
            singer:'Vương Anh Vũ',
        },
        {
          imgUser: './media/img/user-10.jpg',
          itemStory: './media/img/user-11.jpg',
          singer:'Trương Kha',
        },
        {
          imgUser: './media/img/user-10.jpg',
          itemStory: './media/img/user-11.jpg',
          singer:'Trương Kha',
        },
        {
          imgUser: './media/img/user-10.jpg',
          itemStory: './media/img/user-11.jpg',
          singer:'Trương Kha',
        },
        {
          imgUser: './media/img/user-10.jpg',
          itemStory: './media/img/user-11.jpg',
          singer:'Trương Kha',
        }
    ],
     songs : [
        {
        name:'Ái Nộ',
        singer:'Masew,Khôi Vũ',
        path: './media/music/Song1.mp3'
      },
      {
        name:'Bài Không Tên Số 6',
        singer:'Trương Kha',
        path: './media/music/Song2.mp3',
       
      },
      {
        name:'Cưới Thôi',
        singer:'Masew,Bray',
        path: './media/music/Song3.mp3',
      },
      {
        name:'Độ Tộc 2',
        singer:'Masew,Độ Mixi',
        path: './media/music/Song4.mp3',
      },
      {
        name:'Forget Me You',
        singer:'Trí Dũng',
        path: './media/music/Song5.mp3',
      },
      {
        name:'Hương',
        singer:'Vân Mai Hương',
        path: './media/music/Song6.mp3',
      },
      {
        name:'Like You',
        singer:'SOUTHALID',
        path: './media/music/Song7.mp3',
      },
      {
        name:'Lựa chọn thích hợp',
        singer:'Vương Anh Vũ',
        path: './media/music/Song8.mp3',
      },
      {
        name:'Thê Lương',
        singer:'Phúc Chinh',
        path: './media/music/Song9.mp3',
      },
      {
        name:'Vâng Anh Đi ĐI',
        singer:'Bích Phương',
        path: './media/music/Song10.mp3',
      },
      {
        name:'Vâng Anh Đi ĐI',
        singer:'Bích Phương',
        path: './media/music/Song11.mp3',
      },
      {
        name:'Yêu Thầm',
        singer:'Hoàng Yến Chibi',
        path: './media/music/Song12.mp3',
      },
    ],
    user_info: [
        {
            user_name: 'Vũ Minh Hiếu',
            user_time: '2 giờ',
            user_img: './media/img/user3.jpg'
        },
        {
            user_name: 'Hoàng Hành',
            user_time: '2 giờ',
            user_img: './media/img/user4.jpg'
        },
        {
            user_name: 'Em',
            user_time: '1 giờ',
            user_img: './media/img/user5.jpg'
        },
        {
            user_name: 'Thảo Mun',
            user_time: '3 giờ',
            user_img: './media/img/user-6.jpg'
        },
        {
            user_name: 'Long Nguyễn',
            user_time: '12 giờ',
            user_img: './media/img/user-7.jpg'
        },
        {
            user_name: 'A Nguyễn',
            user_time: '20 phút trước',
            user_img: './media/img/user3.jpg'
        },
        {
            user_name: 'B Nguyễn',
            user_time: '10 giờ',
            user_img: './media/img/user4.jpg'
        },
        {
            user_name: 'CD Nguyễn',
            user_time: '4 giờ',
            user_img: './media/img/user-8.jpg'
        },
        {
          user_name: 'Trần Nguyễn',
          user_time: '4 giờ',
          user_img: './media/img/user-13.jpg'
      },
      {
        user_name: 'An Mun',
        user_time: '4 giờ',
        user_img: './media/img/user-10.jpg'
      },
      {
      user_name: 'X Mun',
      user_time: '4 giờ',
      user_img: './media/img/user-13.jpg'
      },
      {
        user_name: 'Đen Mun',
        user_time: '4 giờ',
        user_img: './media/img/user-11.jpg'
    }
    ],
    loadNow: function(){
        window.onload = function(){
            audio.play();
        }
    },
    defineProterties: function(){
        Object.defineProperty(this,'currentSong', {
          get: function(){
            return this.songs[this.currentIndex];
          }
        })
      },
    renderStory: function(){
       const htmls = this.users.map((item,index)=>
            `
            <div class="item-story">
                <img class='item-story-img' src="${item.itemStory}" alt="">
            </div>
            `
       )
       story_next.innerHTML = htmls.join('');
    },
    renderUser: function(){
        const htmls = this.user_info.map((item,index)=>
        `
        <div class="story-item">
            <div class="story-user  ${index === 0 ? 'active active1':''} " data-index = "${index}">
                <img class="story-user-img " src="${item.user_img}" alt="">
                <div class="user-info " data-index = "${index}">
                    <div class="user">${item.user_name}</div>
                    <div class="user-info_time  ">
                        <div class="number-story ">1 thẻ mới</div>
                        <div class="square"></div>
                        <div class="time">${item.user_time}</div>
                    </div>
                </div>
             </div>
        </div>             
            `
        )
        list_story.innerHTML = htmls.join('');
        // Kiểm tra khi next thì active thẻ user-info tắt
       
    },
    handleEvent: function(){
        const _this = this;
        const user = $$('.story-user');
        btn_play.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
                
              }else{
                audio.play();
              }
        }
        audio.onplay = function(){
            _this.isPlaying = true;
            btn_play.classList.add('active');
        }
          // Khi song pause
        audio.onpause = function(){
            _this.isPlaying = false;
            btn_play.classList.remove('active');
          }
        audio.ontimeupdate = function(){
            const TimeProgress = ((audio.currentTime / audio.duration)*100);
        // Xét đc phần trăm cho bài hát
        // Đưa vào thanh cho nó chạy
             run_time.style.width = TimeProgress + '%';
      }
        audio.onended = function(){
            btn_next.click();
        }
        btn_volume.onclick = function(){
            this.classList.toggle('active');
            const check = this.classList.contains('active');
            if(check){
                audio.muted = true;
            }
            else{
                audio.muted = false;
            }
          }
          btn_next.onclick = function(){
            const length = user.length;
            _this.count++;
            if(_this.count>length-1){
                _this.count = 0
            }
            _this.Active_user(_this.count);
            _this.nextSong();
            audio.play();
            _this.nextStory();
            _this.scrollToActiveSong();
          }
          btn_pre.onclick = function(){
            const length = user.length;
            _this.count--;
            if(_this.count<0){
            _this.count = length;
            }
            _this.Active_user(_this.count);
            _this.preSong();
            audio.play();
            _this.preStory();
            _this.scrollToActiveSong();
          }
          list_story.onclick = function(e){
            // closest: Tìm kiếm element con hoạc cha của thẻ đó
            const songNode = e.target.closest('.story-user:not(.active)');
              // Xử lý khi click vào user
              if(songNode){
               _this.currentIndex = Number(songNode.dataset.index);
               _this.space = Number(songNode.dataset.index);
               _this.count = _this.currentIndex;
               _this.Active_user(_this.count);
                _this.loadCurrentSong();
                _this.loadStory();
                audio.play();
              }
              
            }
      },
      preSong: function(){
        this.currentIndex--;
        if(this.currentIndex<0){
          this.currentIndex = this.songs.length-1;
        }
        this.loadCurrentSong();
    
      },
      nextStory : function(){
          this.space++;
          if(this.space>=this.users.length){
              this.space = 0;
          }
          this.loadStory();
      },
      preStory: function(){
        this.space--;
        if(this.space<0){
            this.space = this.users.length-1;
        }
        this.loadStory();
      },
      nextSong: function(){
        this.currentIndex++
        if(this.currentIndex>=this.songs.length){
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
      },
      scrollToActiveSong: function(){
        setTimeout(function(){
          $('.story-user.active').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        },200)
      },
      loadCurrentSong : function(){
        audio.src = this.currentSong.path;
      },
      loadStory: function(){
        story_next.style.transform = `translateX(-${330*this.space}px)`;
        author.textContent = this.songs[this.currentIndex].singer;
        user_story.textContent = this.user_info[this.currentIndex].user_name;
        time_story.textContent = this.user_info[this.currentIndex].user_time;
        user_img.src = this.user_info[this.currentIndex].user_img;
      },
      Active_user: function(index){
        const user = $$('.story-user');
        $('.story-user.active').classList.remove('active')
        user[index].classList.add('active')
        user[index].classList.add('active1')
      },
    start : function(){
        this.loadNow();
        this.renderUser();
        this.renderStory();
        this.defineProterties();
        this.handleEvent();
        this.loadCurrentSong();
    }
}
app.start();