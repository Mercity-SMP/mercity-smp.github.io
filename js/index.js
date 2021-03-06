const sectionHeaders = document.querySelectorAll(".section__header");

sectionHeaders.forEach(header => {

  header.addEventListener("click", () => {

    window.location.href = `#${header.parentElement.id}`;

  });

});

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
  
function copyText(text) {
    navigator.clipboard.writeText(text);
}

const copyTextBtn = document.querySelector(".text__copyIP");
copyTextBtn.addEventListener("click", () => {
    try {
      copyText("mercitysmp.cf");
      notify("Successfully copied the server's IP!", "success");
    } catch(e) {
      notify("There was an error copying the text, please check your clipboard settings.", "error");
    }
});

const clickImage = document.querySelector(".big__portrait");
clickImage.addEventListener("click", () => {
  window.location.href = "#aboutServer";
});

const appealWhiteListBtn = document.querySelector(".text__joinWL");

appealWhiteListBtn.addEventListener("click", () => {
  window.parent.open("https://dyno.gg/form/d812f962");
});

const waitListBtn = document.querySelector(".text__knowMore");
waitListBtn.addEventListener("click", () => {
  window.parent.open("https://discord.gg/gvbnx3RGR4");
});


const copyOwner1 = document.querySelector(".copy-owner-tag.n1");
const copyOwner2 = document.querySelector(".copy-owner-tag.n2");
const copyOwner3 = document.querySelector(".copy-owner-tag.n3");

copyOwner1.addEventListener("click", () => {
    try {
      copyText("Satindar#2927");
      notify("Copied tag of first owner", "info");
    } catch(e) {
      notify("There was an error copying the text, please check your clipboard settings.", "error");
    }
});

copyOwner2.addEventListener("click", () => {
    try {
      copyText("Telly#3114");
      notify("Copied tag of second owner", "info");
    } catch(e) {
      notify("There was an error copying the text, please check your clipboard settings.", "error");
    }
});

copyOwner3.addEventListener("click", () => {
  try {
    copyText("Optid2#3981");
    notify("Copied tag of third owner", "info");
  } catch(e) {
    notify("There was an error copying the text, please check your clipboard settings.", "error");
  }
});

const fImg = document.querySelector(".favicon");
fImg.addEventListener("click", () => {
  window.location.href = "#hero";
});

const toggles = document.querySelectorAll(".accordion-toggle");
const contents = document.querySelectorAll(".accordion-content");

for(let i = 0; i < toggles.length; i++) {

  toggles[i].addEventListener("click", () => {

    try {
      document.querySelector(".accordion-toggle.active")?.classList.remove("active");
      document.querySelector(".accordion-content.active")?.classList.remove("active");
    } catch(e) {
      return;
    }

    toggles[i].classList.add("active");
    contents[i].classList.add("active");

  });

};