$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message__contents" data-message-id=${message.id}>
          <div class="main-chat__message__contents__post">
            <div class="main-chat__message__contents__name">
                ${message.user_name}
              <div class="main-chat__message__contents__time">
                ${message.created_at}
                </div>
              </div>
            </div>
            <div class="main-chat__message__contents__comment">
                ${message.content}
              </div>
              <img class="Message__image" src="${message.image}">
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message__contents" data-message-id=${message.id}>
          <div class="main-chat__message__contents__post">
            <div class="main-chat__message__contents__name">
                ${message.user_name}
            <div class="main-chat__message__contents__time">
                ${message.created_at}
                </div>
              </div>
            </div>
            <div class="main-chat__message__contents__comment">
                ${message.content}
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
      $('.main-chat__message').append(html);      
      $('form')[0].reset();
      $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      $('.submit-btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit-btn').prop("disable", false);
    });
  });
});
