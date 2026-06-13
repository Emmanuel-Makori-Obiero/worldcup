// Ensure script runs after the DOM structural components have parsed completely
document.addEventListener("DOMContentLoaded", () => {
  // Select the DOM components for the player container and interaction buttons
  const livePlayer = document.getElementById("live-player");
  const refreshButton = document.getElementById("refresh-btn");
  const statusText = document.getElementById("connection-status");

  // Attach click handler functionality to execute the stream iframe hard refresh
  if (refreshButton && livePlayer) {
    refreshButton.addEventListener("click", () => {
      // Provide localized user UI feedback inside button actions
      const originalButtonContent = refreshButton.innerHTML;
      refreshButton.innerHTML = `
                <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121 12m-7 7h-5v-5"></path></svg>
                Syncing Feed...
            `;
      refreshButton.disabled = true;

      // Target the source location parameter directly to force reload content
      const currentSrc = livePlayer.src;
      livePlayer.src = ""; // Flush media container cache allocation references
      livePlayer.src = currentSrc; // Re-assign identity context to spin up stream components

      // Reset UI states shortly after execution
      setTimeout(() => {
        refreshButton.innerHTML = originalButtonContent;
        refreshButton.disabled = false;
      }, 1200);
    });
  }
});
