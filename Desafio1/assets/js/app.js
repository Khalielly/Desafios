document.getElementById('cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') 
                          .replace(/(\d{3})(\d)/, '$1.$2') 
                          .replace(/(\d{3})(\d)/, '$1.$2') 
                          .replace(/(\d{3})(\d)/, '$1-$2') 
                          .replace(/(-\d{2})\d+?$/, '$1');
    e.target.value = cpfPattern;
  });

  const passwordIcons = document.querySelectorAll('.password-icon');

  passwordIcons.forEach(icon => {
      icon.addEventListener('click', function () {
          const input = this.previousElementSibling;
  
          if (input.type === 'password') {
              input.type = 'text';
              this.classList.remove('fa-eye-slash');
              this.classList.add('fa-eye');
          } else {
              input.type = 'password';
              this.classList.remove('fa-eye');
              this.classList.add('fa-eye-slash');
          }
      });
  });
  
