const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// 1. Build
console.log('Building dist...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Ensure dist/.htaccess exists
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
fs.writeFileSync('dist/.htaccess', htaccess);

// 3. Create temp directory
const tempDir = path.join(os.tmpdir(), 'bumd_prod_' + Date.now());
fs.mkdirSync(tempDir, { recursive: true });

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    if (fs.statSync(s).isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

copyDir('dist', tempDir);
console.log('Copied files to temp directory:', fs.readdirSync(tempDir));

const remoteUrl = execSync('git remote get-url origin').toString().trim();
console.log('Pushing to remote:', remoteUrl);

execSync('git init', { cwd: tempDir, stdio: 'inherit' });
execSync('git config user.name "davian"', { cwd: tempDir, stdio: 'inherit' });
execSync('git config user.email "davianmassaro19@gmail.com"', { cwd: tempDir, stdio: 'inherit' });
execSync('git branch -M production', { cwd: tempDir, stdio: 'inherit' });
execSync('git add -A', { cwd: tempDir, stdio: 'inherit' });
execSync('git commit -m "Production build for Hostinger deployment"', { cwd: tempDir, stdio: 'inherit' });
execSync(`git remote add origin ${remoteUrl}`, { cwd: tempDir, stdio: 'inherit' });
execSync('git push -f origin production', { cwd: tempDir, stdio: 'inherit' });

console.log('Successfully pushed to origin production!');
fs.rmSync(tempDir, { recursive: true, force: true });
