ocument.getElementById('generate').addEventListener('click', () => {
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;
  const length = +document.getElementById('length').value;

  let chars = '';
  if (useUpper) chars += uppercase;
  if (useLower) chars += lowercase;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  alert('Senha copiada!');
});