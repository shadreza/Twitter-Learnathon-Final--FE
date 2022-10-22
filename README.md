## Twitter-Front-End-Part

#### For configuring tailwind CSS
```bash
yarn install
npm install postcss --save-dev
npm install tailwindcss
npm install -D tailwindcss postcss 
npm install autoprefixer@10.4.5 --save-exact
npx tailwind init

npm i -D stylelint-config-standard
npm audit fix --force 
npm install tw-elements
npm install -D @tailwindcss/typography
ng add @angular/material
npm install --save sweetalert2
npm start
```

#### How i built this things in my computer
I'm following my convention like : for module, ends with "-m" & for component, ends with "-c"
```bash
ng g m userCredential_M
ng g m admin_M
ng g m searching_M
ng g m networking_M
ng g m tweet_M

ng g c user-credential-m/signUp-C --skipTests=true --module user-credential-m
ng g c user-credential-m/logIn-C --skipTests=true --module user-credential-m

npm install --save-dev @nrwl/angular

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

#### More Optimizing for serve
```bash
npm install -g gzipper
npm run build-compress
```
Then above command will generate `dist-compress` folder, which will be deployed to server

#### Building project
```bash
ng build
npm build
```

#### Running project
```bash
ng serve
npm start
```

### Overall Design planned
module 01 [user-credential_M] {signup, login, Forget Password}
module 02 [admin_M] {admin dashboard >> show all users, change user details, blocking user}
module 03 [searching_M] {searching part}
module 04 [networking_M] {network building >> follow, unfollow, block}
module 05 [tweet_M] {Publishing >> my feed from my followers, posting a new tweet, share retweet, comment section, add like or remove like on post}
module 06 (default app module) {header, footer, error pages}

