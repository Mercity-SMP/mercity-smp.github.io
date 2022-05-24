const fdItems = document.querySelectorAll(".fa-item");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("scroll");
        else if(!entry.isIntersecting) entry.target.classList.remove("scroll");
    });
});

fdItems.forEach(item => {
    observer.observe(item);
});


function notify(message, type, context) {
    let creat;
    if (
      document.getElementById("notification-area") === undefined ||
      document.getElementById("notification-area") === null
    ) {
      creat = document.createElement("div");
      creat.id = "notification-area";
  
      document.body.append(creat);
    } else {
      creat = document.getElementById("notification-area");
    }
  
      let createdDiv = document.createElement("div");
      let id = Math.random().toString(36).substring(2, 10);
  
      createdDiv.setAttribute("id", id);
      createdDiv.classList.add("notification", type);
  
      if (context) {
        createdDiv.classList.add("contextMenu");
      }
  
      createdDiv.innerHTML = `
  <div class="cross">
    <span class="cross__spans span1"></span>
    <span class="cross__spans span2""></span>
  </div>
  ${message}
  <span class="notif notif-timer"></span>`;
      document.getElementById("notification-area").prepend(createdDiv);
  
      setTimeout(() => {
        var notifications = document
          .getElementById("notification-area")
          .getElementsByClassName("notification");
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].getAttribute("id") == id) {
            notifications[i].remove();
            break;
          }
        }
      }, 5000);
      const notifCrosses = document.querySelector(".notification .cross");
      notifCrosses.addEventListener("click", (e) => {
       e.target.parentElement.parentElement.remove();
      });
  }
  /**
   * @param {*} text
   */
  
function copyText(text) {
    navigator.clipboard.writeText(text);
}

const copyTextBtn = document.querySelector(".text__copyIP");
copyTextBtn.addEventListener("click", () => {
    copyText("testing.mercitysmp.cf");
    notify("Successfully copied the server's IP!", "success");
});

const clickImage = document.querySelector(".big__portrait");
clickImage.addEventListener("click", () => {
    window.location.href = "#aboutServer";
});

const waitListBtn = document.querySelector(".text__joinWL");
waitListBtn.addEventListener("click", () => {
    window.parent.open("https://discord.gg/gvbnx3RGR4");
});


const copyOwner1 = document.querySelector(".copy-owner-tag.n1");
const copyOwner2 = document.querySelector(".copy-owner-tag.n2");

copyOwner1.addEventListener("click", () => {
    copyText("Satindar#2927");
    notify("Copied tag of first owner", "info");
});

copyOwner2.addEventListener("click", () => {
    copyText("Telly#3114");
    notify("Copied tag of first owner", "info");
});