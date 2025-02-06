const container = document.querySelector('.container');
const cubes = document.querySelectorAll('.cube');

let selectedCube = null;
let offsetX = 0, offsetY = 0;

// Attach event listeners to all cubes
cubes.forEach(cube => {
  cube.addEventListener('mousedown', (event) => {
    selectedCube = cube;

    // Calculate offset between mouse pointer and cube's top-left corner
    const rect = cube.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    cube.style.cursor = 'grabbing';

    // Add event listeners for dragging and releasing
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', stopDragging);
  });
});

// Function to handle cube dragging
function handleDrag(event) {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();

  // Calculate the new position of the cube
  let newX = event.clientX - containerRect.left - offsetX;
  let newY = event.clientY - containerRect.top - offsetY;

  // Apply boundary constraints
  newX = Math.max(0, Math.min(newX, containerRect.width - selectedCube.offsetWidth));
  newY = Math.max(0, Math.min(newY, containerRect.height - selectedCube.offsetHeight));

  // Update cube's position
  selectedCube.style.left = `${newX}px`;
  selectedCube.style.top = `${newY}px`;
}

// Function to stop dragging
function stopDragging() {
  if (selectedCube) {
    selectedCube.style.cursor = 'grab';
    selectedCube = null;

    // Remove event listeners for dragging and releasing
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', stopDragging);
  }
}
