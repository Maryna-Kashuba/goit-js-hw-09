document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
  
    feedbackForm.addEventListener('input', () => {
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };
  
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
  
    const storedData = localStorage.getItem('feedback-form-state');
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
  
      feedbackForm.elements.email.value = parsedData.email;
      feedbackForm.elements.message.value = parsedData.message;
    }
  
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };
       console.log(formData);
 
      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    });
  });