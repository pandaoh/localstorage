/**
 * @author 贺雄彪
 * @description 造型商城
 */

/**
 * 如果localStorage有内容，读取。
 */
var tryTimes = 0;
$(function () {
//    window.location.replace("");
  if (localStorage.length !== 0) {
    readingImg();
    console.log("读取记录成功！");
    tryTimes++;
  }
});



/**
 * 页面刷新事件
 */
function reFlesh() {
  window.location.replace("");
}



/**
 * 给试穿按钮添加事件
 */
$(".try").click(function () {
  var img = $(this).parents(".good-right").prev(".goods-left");                 //获取图片元素
  var imgName = img.attr("name");
  var lastX = img.attr("src").lastIndexOf("/");                                 //找到最后一个/的位置
  var imgUrlname = img.attr("src").slice(lastX + 1, -4);                        //剪取旧URL中的文件名   
  var newSrc = "img/images/" + imgUrlname + ".gif";                             //产生新的URL
  $("." + imgName + "-man").attr("src", newSrc);                                //替换URL
  tryTimes++;
});



/**
 * 给图片添加试穿事件
 */
$(".goods-left").click(function () {
  var img = $(this);                                                            //获取图片元素
  var imgName = img.attr("name");
  var lastX = img.attr("src").lastIndexOf("/");                                 //找到最后一个/的位置
  var imgUrlname = img.attr("src").slice(lastX + 1, -4);                        //剪取旧URL中的文件名   
  var newSrc = "img/images/" + imgUrlname + ".gif";                             //产生新的URL
  $("." + imgName + "-man").attr("src", newSrc);                                //替换URL
  tryTimes++;
});



/**
 * 保存形象，存取url到localStorage。
 */
$(".save-btn").click(function () {
  if (tryTimes === 0) {
    $(".warning-info").html("默认形象无需保存！");
    $(".warning-info").show(300);
    setTimeout(function () {
      $(".warning-info").hide(300);
    }, 800);
    return;
  }
  if (typeof (localStorage) !== "undefined") {
    localStorage.setItem("hxbhat", $(".hat-man").attr("src"));
    localStorage.setItem("hxbglasses", $(".glasses-man").attr("src"));
    localStorage.setItem("hxbclothes", $(".clothes-man").attr("src"));
    localStorage.setItem("hxbpants", $(".pants-man").attr("src"));
    localStorage.setItem("hxbcloak", $(".cloak-man").attr("src"));
    localStorage.setItem("hxbpets", $(".pets-man").attr("src"));
    localStorage.setItem("hxbbg", $(".bg-man").attr("src"));
    if (localStorage.length !== 0) {
      $(".success-info").html("保存成功 √");
      $(".success-info").show(300);
      setTimeout(function () {
        $(".success-info").hide(300);
      }, 800);
//      console.log(localStorage.length);
    } else {
      $(".warning-info").html("保存失败 X");
      $(".warning-info").show(300);
      setTimeout(function () {
        $(".warning-info").hide(300);
      }, 800);
//      console.log(localStorage.length);
    }
  } else {
    alert("此浏览器不支持 WebStorage");
  }
});



/**
 * 还原形象
 */
$(".reset-btn").click(function () {
  if (tryTimes === 0) {
    $(".warning-info").html("当前已是原始形象！");
    $(".warning-info").show(300);
    setTimeout(function () {
      $(".warning-info").hide(300);
    }, 800);
    return;
  }
  $(".hat-man").attr("src", "img/0000000.gif");
  $(".glasses-man").attr("src", "img/0000000.gif");
  $(".clothes-man").attr("src", "img/1300001.gif");
  $(".pants-man").attr("src", "img/1210000.gif");
  $(".cloak-man").attr("src", "img/0000000.gif");
  $(".pets-man").attr("src", "img/0000000.gif");
  $(".bg-man").attr("src", "img/0000000.gif");
  localStorage.clear();                                                           //清除localStorage中的内容
  tryTimes = 0;
  if (localStorage.length === 0) {
    $(".success-info").html("还原成功 √");
    $(".success-info").show(300);
    setTimeout(function () {
      $(".success-info").hide(300);
    }, 800);
//      console.log(localStorage.length);
  } else {
    $(".warning-info").html("还原失败 X");
    $(".warning-info").show(300);
    setTimeout(function () {
      $(".warning-info").hide(300);
    }, 800);
//      console.log(localStorage.length);
  }
});



/**
 * 读取localStorage中的内容。
 */
function readingImg() {
  $(".hat-man").attr("src", localStorage.hxbhat);
  $(".glasses-man").attr("src", localStorage.hxbglasses);
  $(".clothes-man").attr("src", localStorage.hxbclothes);
  $(".pants-man").attr("src", localStorage.hxbpants);
  $(".cloak-man").attr("src", localStorage.hxbcloak);
  $(".pets-man").attr("src", localStorage.hxbpets);
  $(".bg-man").attr("src", localStorage.hxbbg);
}