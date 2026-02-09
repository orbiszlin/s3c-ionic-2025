<p align="center">
<a href="https://angular.com" target="_blank"><img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" width="400" alt="Angular Logo">
</a>
<a href="https://ionicframework.com" target="_blank"><img src="https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2Fd784b88d-9379-49f6-a7ca-502cfe1ea5f0_ionic%2Blogotype%2Bblue.png&w=640&q=75" width="300" alt="Angular Logo">
</a>
</p>

# Demonstration of Ionic framework with Angular

This project demonstrates how to work with the Ionic (Angular) framework and introduces students to this development framework.
It also teaches students best practices in web application development regardless of the chosen framework solution and focuses on the advantages and disadvantages of specific solutions.
This project creates a simple mobile weather application that demonstrates working with the Ionic framework, Angular, and the necessary tools.

In this project, a simple mobile weather application is created to demonstrate how to work with the Ionic framework, Angular, and the necessary tools.

## Installation

**Local installation**

To install, you need to have these components installed on your system:

- NPM (v11.5) and Node.js (v24.5) or newer versions.
- _General installation (new project and system requirements) is described
  at [Výukových materiálech](https://jakubforman.notion.site/Instalace-Ionic-292c832877e580c99c15e0643e132239)._

1. Clone the repository `git clone` of this project, or use an IDE cloning tool.
2. Install NPM libraries `npm install`.
3. Set up the project:
   - Set the environment for development [environment.ts](src/environments/environment.ts).
   - Set the environment for production [environment.prod.ts](src/environments/environment.prod.ts).
4. Set Firesbase project
   - Create a Firebase project (if you don't have it) [Firebase](https://console.firebase.google.com/).
   - Login to Firebase CLI `firebase login`.
   - Set Firebase project name (ID) in [.firebaserc](.firebaserc)
   - Build project `ionic build --prod`, or `ng build --prod`, or `npm run build`.
   - Deploy Firebase project `firebase deploy`.
5. Start server `ionic serve`.

