function showSuccessMessage() {
    let message = document.getElementById("success-message");
    message.style.display = "block";
    
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}
