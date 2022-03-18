# WeBuilder
An easy-to-use Portfolio Builder App for CUNY Tech Prep team project with React, Express.js, and Sequelize.js


<img src="https://github.com/Farukh-AVA/webuilder-backend/blob/main/walkthrough.gif" width=500><br>
## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/WeBuilder/public/index.html`
- React Router


## Development Setup

Each team member will need to do this on their local machine.

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user webuilder
```

> You will create a DB for each project you start based on this repo. For other projects change `webuilder` to the new apps database name.

*For more details see the [installing postgres guides](https://github.com/CUNYTechPrep/guides#postgresql)*

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd WeBuilder
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

## Deployment

### Setting up Heroku

1. Create a Heroku account (_if you don't have one_)
2. Install the [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (_if you don't already have it_)
  + Requires that you have `git` installed

```bash
# login with the cli tool
heroku login
```

### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
# replace `cool-appname` with your preferred app name
heroku create cool-appname

# add a free postgres database to your heroku project
heroku addons:create heroku-postgresql:hobby-dev
```

> This will make your app accessible at https://cool-appname.herokuapp.com (_if the name is available_).

> You only need to do this once per app

### Add Environment Variables

Any environment variables your app needs will be available through your heroku project's settings page.

> NOTE: _Heroku calls them **Config Vars**_

* Go to the dashboard page here: https://dashboard.heroku.com/apps
* Click on the Settings tab
* Click `Reveal Config Vars`
* Add any environment variables you have in your `.env` file


### Deploying the app

Whenever you want to update the deployed app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`


## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── image.js
│   │   ├── project.js
│   │   ├── index.js
│   │   └── layouts.js
│   └── <strong>models</strong>
│       ├── about.js
│       ├── contact.js
│       ├── education.js
│       ├── experience.js
│       ├── project.js
│       ├── image.js
│       ├── index.js
│       └── layout.js
├── <strong>WeBuilder</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>layouts</strong>
│       │   ├── aboutMeLayouts.js
│       │   ├── contactMeLayouts.js
│       │   ├── cloudinary.js
│       │   ├── education.js
│       │   ├── experienceLayouts.js
│       │   ├── projectLayouts.js
│       │   ├── textbox-aboutme.js
│       │   ├── textbox-experience.js
│       │   ├── textbox-contactme.js
│       │   ├── textbox-w-pic.js
│       │   ├── textbox.js
│       │   └── themeLayouts.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── aboutMe.js
│       │   ├── categories.js
│       │   ├── contactMe.js
│       │   ├── education.js
│       │   ├── experience.js
│       │   ├── homePage.js
│       │   ├── information.js
│       │   ├── navBar.css
│       │   ├── nextBack.js
│       │   ├── projects.js
│       │   ├── themes.js
│       │   └── userContext.js
│       ├── <strong>pics</strong>
│       │   ├── avatar.svg
│       │   ├── logo.png
│       │   ├── weBuilder.png
│       │   ├── weBuilder.svg
│       │   ├── weBuilder(hover).svg
│       │   └── WeBuilderLogo.png
│       ├── <strong>portfolio</strong>
│       │   ├── Blank-Avatar.png
│       │   ├── demoPorfolio.js
│       │   ├── email.png
│       │   ├── git.png
│       │   ├── link.png
│       │   ├── portfolio_style.css
│       │   └── Project.png
│       ├── <strong>portfolio-layouts</strong>
│       │   ├── portfolio-abme-left.js
│       │   ├── portfolio-contact-midl.js
│       │   ├── portfolio-edu-left.js
│       │   ├── portfolio-ex-left.js
│       │   ├── portfolio-navBar.js
│       │   └── portfolio-project-right.js
│       ├── reportWebVitals.js
│       ├── serviceWorker.js
│       └── setupTests.js
├── package-lock.json
└── package.json
</pre>
