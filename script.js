document.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () {
        document.getElementById('loading-screen').style.opacity = 0;
        setTimeout(function () {
          document.getElementById('loading-screen').style.display = 'none';
          document.getElementById('main-content').classList.remove('hidden');
        }, 1000);
      }, 3000);
    });

const checkbox = document.getElementById('checkbox_toggle');
    checkbox.addEventListener('change', () => {
      document.body.classList.toggle('night-mode');
    });

