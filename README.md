# Twitter360-Front-End-Part

## Configuring & Angular CLI Commands

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

#### Overall Design planned

module 01 [user-credential_M] {signup, login, Forget Password} <br/>
module 02 [admin_M] {admin dashboard >> show all users, change user details, blocking user} <br/>
module 03 [searching_M] {searching part} <br/>
module 04 [networking_M] {network building >> follow, unfollow, block} <br/>
module 05 [tweet_M] {Publishing >> my feed from my followers, posting a new tweet, share retweet, comment section, add like or remove like on post} <br/>
module 06 (default app module) {header, footer, error pages} <br/>

---

---

---

## Design Pattern

<br/>
### Responsive Markers

mainly 3 overall breakpoints - **sm**, **md**, **lg**

```
screens: {
  'sm': {'max': '500px'},
  // => @media (max-width: 500px) { ... }

  'md': '500px',
  // => @media (min-width: 500px) { ... }

  'xm': '680px',
  // => @media (min-width: 680px) { ... }

  'lg': '1000px',
  // => @media (min-width: 1000px) { ... }

  'xl': '1400px',
  // => @media (min-width: 1400px) { ... }
},
```

<br/>
### Layouts

We are currently using 3 layout formats under the folder **src\app\layouts**

for the **authentication** purposes ie. **login** & **signup** we will be using the **_auth-l_**

for the overall purposes ie. **feeds** , **settings**, **dashboards**, etc we will be using the **_dashboard-l_**

for the **error** page we will be using the **_error-page-l_**
<br/>

### Modules

**src\app\modules** will be containing all the modules and currently we are having to following modules...

1. **admin-m** [all the administrative components, services and others will be integrated here]
2. **feeds-m** [all the feeds components, services and other things like how to manage the feeds, who can interact and others will be integrated here]
3. **messages-m** [all the messaging components, services and others will be integrated here]
4. **notification-m** [all the notification components, services and others will be integrated here]
5. **profile-m** [the user profile components, services, things like user profile update, deletion and other operations will be integrated here]
6. **searchbar-m** [for searching users, any hashtags, even other things we are keeping a separate module for that and the underlying child components, services will be going under this]
7. **settings-m** [this part will be for both the admin and user side but the admin privilege will be greater so there will be many functionalities that the admin will be operating and will only be disclosed to that party... All the services and components will be going under them]
8. **user-credential-m** [for the user auth stuff where the login and signup services and components will be integrated]

<br/>
### Components

For the basic components like the sidebar, top-navbar, the menus, the user miniature icons all of these will be under the **components** folder which is in **src\app\components** directory

currently we have 4 basic components

1. **nav-option-c**,
2. **sidebar-c**,
3. **topnav-c**,
4. **topnav-profile-c**

<br/>
### Interfaces

For the basic interfaces structuring we will be providing each under the respected modules and from there we can use those interfaces

under **src\app\components\interfaces** dir we have an interface named **nav-option.ts**

```
export interface NavOption {
  optionTitle: string
  optionUrl: string
  optionIconName: string
}
```
