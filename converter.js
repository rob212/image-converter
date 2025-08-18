function setupConverter({ inputMime, outputMime, outputExt }) {
  const upload = document.getElementById('upload');
  const convertBtn = document.getElementById('convertBtn');
  const downloadLink = document.getElementById('downloadLink');
  const canvas = document.getElementById('canvas');
  const previewLabel = document.getElementById('previewLabel');
  const ctx = canvas.getContext('2d');
  let image = new Image();
  let originalImage = null; // Store original for full-quality conversion
  let originalFileName = ''; // Store original filename

  upload.addEventListener('change', () => {
    const file = upload.files[0];
    if (file && file.type === inputMime) {
      // Store original filename without extension
      originalFileName = file.name.replace(/\.[^/.]+$/, ''); // Remove extension
      
      const reader = new FileReader();
      reader.onload = e => {
        image.onload = () => {
          // Store original image for conversion
          originalImage = new Image();
          originalImage.src = e.target.result;
          
          // Calculate responsive dimensions for preview
          const maxWidth = 400; // Maximum width for preview
          const maxHeight = 300; // Maximum height for preview
          
          let { width, height } = calculatePreviewSize(image.width, image.height, maxWidth, maxHeight);
          
          // Set canvas dimensions for preview
          canvas.width = width;
          canvas.height = height;
          
          // Draw resized preview
          ctx.drawImage(image, 0, 0, width, height);
          
          // Show canvas and label
          canvas.classList.add('loaded');
          previewLabel.style.display = 'block';
          
          // Enable convert button
          convertBtn.disabled = false;
          
          // Hide download link if it was showing
          downloadLink.style.display = 'none';
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert(`Please upload a ${inputMime} file.`);
      resetInterface();
    }
  });

  convertBtn.addEventListener('click', () => {
    if (!originalImage) return;
    
    // Create a temporary canvas with original dimensions for conversion
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    // Set to original image dimensions for full quality
    tempCanvas.width = originalImage.width;
    tempCanvas.height = originalImage.height;
    
    // Draw original image at full size
    tempCtx.drawImage(originalImage, 0, 0);
    
    // Convert to JPG with high quality
    const data = tempCanvas.toDataURL(outputMime, 0.9);
    
    // Set download link with original filename
    downloadLink.href = data;
    downloadLink.download = `${originalFileName}.${outputExt}`;
    downloadLink.style.display = 'inline-block';
    
    // Update button text temporarily
    const originalText = convertBtn.textContent;
    convertBtn.textContent = '✓ Converted!';
    setTimeout(() => {
      convertBtn.textContent = originalText;
    }, 2000);
  });

  // Helper function to calculate responsive preview size
  function calculatePreviewSize(originalWidth, originalHeight, maxWidth, maxHeight) {
    let width = originalWidth;
    let height = originalHeight;
    
    // Calculate scaling ratio
    const widthRatio = maxWidth / originalWidth;
    const heightRatio = maxHeight / originalHeight;
    const ratio = Math.min(widthRatio, heightRatio, 1); // Don't scale up
    
    width = Math.round(originalWidth * ratio);
    height = Math.round(originalHeight * ratio);
    
    return { width, height };
  }

  // Helper function to reset interface
  function resetInterface() {
    canvas.classList.remove('loaded');
    previewLabel.style.display = 'none';
    convertBtn.disabled = true;
    downloadLink.style.display = 'none';
    originalImage = null;
    originalFileName = ''; // Reset filename
  }
}