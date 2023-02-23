const $bar = document.querySelector(".fa-bars");
const $hd_m_con = document.querySelector(".hd_m_con");
const $hd_m = document.querySelector(".hd_m");
const $bot_nav = document.querySelector(".bot_nav");

const GNB = `    <ul class="gnb_list">
<li><a href="#">MENU1</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU2</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU3</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU4</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU5</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU6</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
</ul>`;
const GNB_M = `    <ul class="gnb_list">
<li><a href="#">MENU1</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU2</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU3</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU4</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU5</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
<li><a href="#">MENU6</a>
  <ul class="sub_list">
    <li><a href="#">sub_menu1</a></li>
    <li><a href="#">sub_menu2</a></li>
    <li><a href="#">sub_menu3</a></li>
    <li><a href="#">sub_menu4</a></li>
    <li><a href="#">sub_menu5</a></li>
  </ul>
</li>
</ul>
<ul class="top_menu">
  <li><a href="#">로그인</a></li>
  <li><a href="#">회원가입</a></li>
  <li><a href="#">이벤트</a></li>
  <li><a href="#">고객센터</a></li>
</ul>
`;
$hd_m.innerHTML = GNB_M;
$bot_nav.innerHTML = GNB;

$bar.addEventListener("click", () => {
  $hd_m.classList.toggle("on");
});
