import Panzoom from '@panzoom/panzoom';

const modal = document.getElementById('image-modal');
const closeModal = document.getElementById('close-modal');
const modalImage = document.getElementById('modal-image');

document.getElementById('planning-image').addEventListener('click', function() {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', function() {
  modal.classList.add('hidden');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal || event.target === closeModal) {
    modal.classList.add('hidden');
  }
});

// Initialize panzoom for zooming functionality
const panzoom = Panzoom(modalImage, {
  maxScale: 5
});

modalImage.addEventListener('wheel', panzoom.zoomWithWheel);
