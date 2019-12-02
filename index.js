function add_value() {
    let input = document.getElementById("input");
    let inputValue = input.value; // mengambil nilai input
  
    if (inputValue !== "") {
      let span = document.createElement("SPAN"); // membuat element Span <span></span>
      span.className = "content_span"; // memberi element Span sebuah class <span class="content_span"></span>
      span.innerHTML = inputValue; // memberi isi text ke dalam element Span <span class="content_span">asdasdadads</span>
  
      let spanClose = document.createElement("SPAN"); // membuat element Span <span></span>
      spanClose.className = "content_span_close"; // memberi element Span sebuah class <span class="content_span_close"></span>
      spanClose.innerHTML = "\u00D7" // memberi text "x" ke dalam element Span <span class="content_span_close">x</span>
  
      span.appendChild(spanClose); // menggabungkan spanClose ke dalam span
  
      spanClose.addEventListener("click", function () {
        span.classList.add("content_none");
      });
  
      let content = document.getElementById("content");
      content.appendChild(span); // menggabungkan span ke dalam div content
    }
  
    input.value = ""; // mengosongkan value dari input
  }
  
  // handle event onenter
  input.addEventListener("keyup", function (keyboardEvent) {
    if (keyboardEvent.keyCode === 13 && input.value !== "") {
      document.getElementById("input_button").click();
    }
  });
  
