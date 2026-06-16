// Wait until the webpage layout is completely loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the video player, refresh button, and status text from the page
  const livePlayer = document.getElementById("live-player");
  const refreshButton = document.getElementById("refresh-btn");
  const statusText = document.getElementById("connection-status");

  // Set up the refresh button logic if both elements exist
  if (refreshButton && livePlayer) {
    refreshButton.addEventListener("click", () => {
      // Save the original text and icon of the button
      const originalButtonContent = refreshButton.innerHTML;

      // Change the button to show a spinning loading icon and text
      refreshButton.innerHTML = `
        <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121 12m-7 7h-5v-5"></path>
        </svg>
        Syncing Feed...
      `;
      // Temporarily disable the button so the user can't spam-click it
      refreshButton.disabled = true;

      // Force the video player to reload by clearing its source and resetting it
      const currentSrc = livePlayer.src;
      livePlayer.src = "";
      livePlayer.src = currentSrc;

      // Wait a little over a second (1200ms), then change the button back to normal
      setTimeout(() => {
        refreshButton.innerHTML = originalButtonContent;
        refreshButton.disabled = false;
      }, 1200);
    });
  }
});
