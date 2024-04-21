import Swal from "sweetalert2";

export const showWarning = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }
  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  
  export const showSuccess = (message) => {
    Toast.fire({
      icon: "success",
      title: message
    });
  }

  export const showError = (message) => {
    Toast.fire({
      icon: "error",
      text: message,
    });
  }

  export const showSuccessDelete = (message) => {
    Swal.fire({
      title: "Deleted!",
      text: message,
      icon: "success"
    });
  }
 