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
            <div class="main-chat__form__format">
              <p class="main-chat__message__contents__comment">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
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
            <div class="main-chat__form__format">
              <p class="main-chat__message__contents__comment">
                ${message.content}
              </p>
            </div>
          </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.main-chat__message__contents:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-chat__message').append(insertHTML);
        $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});