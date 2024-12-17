// Wait until the settings menu is loaded
function addSkipButton() {
  const menu = document.querySelector(
    '.rc-ModernSettingsMenuPopup [role="menu"]'
  );

  if (menu && !document.getElementById("skip-2-min-button")) {
    const button = document.createElement("button");
    button.role = "menuitem";
    button.type = "button";
    button.className = "css-u3hz5h";
    button.id = "skip-2-min-button";
    button.innerHTML = `
        <div class="css-1l4wz8x">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.65 15.75L15.525 12.625C15.7583 12.475 15.875 12.2667 15.875 12C15.875 11.7333 15.7583 11.525 15.525 11.375L10.65 8.25C10.4 8.08333 10.1458 8.07083 9.8875 8.2125C9.62917 8.35417 9.5 8.575 9.5 8.875V15.125C9.5 15.425 9.62917 15.6458 9.8875 15.7875C10.1458 15.9292 10.4 15.9167 10.65 15.75Z" fill="white"></path>
          </svg>
        </div>
        <div class="css-4yis35">Skip 2 Min</div>
      `;

    button.addEventListener("click", () => {
      const video = document.querySelector("video");
      if (video) video.currentTime += 120;
    });

    menu.appendChild(button);
  }
}

// Observe changes in the DOM to dynamically load the button
const observer = new MutationObserver(addSkipButton);
observer.observe(document.body, { childList: true, subtree: true });

// Initial call in case the menu is already loaded
addSkipButton();
