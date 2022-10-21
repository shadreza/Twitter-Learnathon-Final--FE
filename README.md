## Twitter-Front-End-Part

#### For configuring tailwind CSS
```bash
npm install postcss --save-dev
npm install tailwindcss
npx tailwind init
```

#### How i built this things in my computer
I'm following my convention like : for module, ends with "-m" & for component, ends with "-c"
```bash
ng g m userCredential_M
ng g c user-credential-m/signUp-C --skipTests=true --module user-credential-m
ng g c user-credential-m/logIn-C --skipTests=true --module user-credential-m
```
Created a new folder named `components` to preserve all the general components like `error pages`, `header`, `footer` & their module will be default `app module`.
```bash
ng g c components/header-C --skipTests=true --module app
ng g c components/footer-C --skipTests=true --module app  
```

#### To check bundle size
```bash
npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer dist/twitter-front-end/stats.json

```
#### To check code quality
```bash
ng lint
```

#### Building project
```bash
ng build
ng build --prod
```

#### Running project
```bash
ng serve
```
### Overall Design planned
module 01 {signup, login} <br/>
module 02 {admin dashboard >> show all users, change user details, blocking user} <br/>
module 03 {searching part} <br/>
module 04 {network building >> follow, unfollow, block} <br/>
module 05 {Publishing >> my feed from my followers, posting a new tweet, share retweet, comment section, add like or remove like on post} <br/>
module 06 (default app module) {header, footer, error pages}

