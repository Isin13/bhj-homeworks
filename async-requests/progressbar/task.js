// Get the form element
const form = document.querySelector('#form');

// Get the progress element
const progressBar = document.querySelector('#progress');

// Add event listener for the form submit event
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent form submission

  // Create an instance of FormData to handle the form data
  const formData = new FormData(form);

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure the xhr object
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  // Add event listener for the progress event
  xhr.upload.addEventListener('progress', e => {
    if (e.lengthComputable) {
      const percentage = Math.round((e.loaded / e.total) * 100);
      progressBar.value = percentage; // Update the progress value
    }
  });

  // Add event listener for the load event (request completed)
  xhr.addEventListener('load', () => {
    // Check if request was successful (status code 2xx)
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('File uploaded successfully');
    } else {
      console.error('Error uploading file:', xhr.statusText);
    }
  });

  // Add event listener for the error event (request failed)
  xhr.addEventListener('error', () => {
    console.error('Error uploading file: request failed');
  });

  // Send the form data as the request body
  xhr.send(formData);
});
