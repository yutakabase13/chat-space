$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class=."main-chat__message__contents" data-message-id=${message.id}>
          <div class="main-chat__message__contents">
            <div class="main-chat__message__contents__post">
              <div class="main-chat__message__contents__name">
                ${message.user_name}
              <div class="main-chat__message__contents__time">
                ${message.created_at}
                </div>
              </div>
            </div>
            <div class=".main-chat__form__format">
              <p class="main-chat__message__contents__comment">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>`
      return html;
    } else {
      let html =
      `<div class=."main-chat__message__contents" data-message-id=${message.id}>
          <div class="main-chat__message__contents">
            <div class="main-chat__message__contents__post">
              <div class="main-chat__message__contents__name">
                ${message.user_name}
            <div class="main-chat__message__contents__time">
                ${message.created_at}
                </div>
              </div>
            </div>
            <div class="main-chat__form__format">
              <p class="main-chat__message__contents__comment">
                ${message.content}
              </p>
            </div>
          </div>`
      return html;
    };
  }

  $('.main-chat__form__format').on('submit', function(e){
    e.preventDefault();   
      let formData = new FormData(this);
      let url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,  
        dataType: 'json',
        processData: false,
        contentType: false,
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);      
      $('form')[0].reset();
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      $('.Form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disable", false);
    });
  });
});
//     let reloadMessages = function() {
//       let last_message_id = $('.main-chat__message__contents:last').data("message-id");
//       $.ajax({
//         url: "api/messages",
//         type: 'get',
//         dataType: 'json',
//         data: {id: last_message_id}
//       })
      
//   setInterval(reloadMessages, 7000);
