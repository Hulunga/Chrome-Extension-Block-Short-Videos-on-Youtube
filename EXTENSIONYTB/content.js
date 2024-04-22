function isShortVideo(videoElement) {

  return videoElement.duration < 60;
}

function hideShortVideos() {
  const videoElements = document.querySelectorAll('video');
  videoElements.forEach(video => {
    if (isShortVideo(video)) {
      hideVideo(video);
    }
  });
}

function hideVideo(videoElement) {
  videoElement.parentElement.parentElement.style.display = 'none';
  videoElement.pause();
}

hideShortVideos();

const observer = new MutationObserver(hideShortVideos);
observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      showHiddenVideos();
});