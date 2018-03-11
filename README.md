# Angular + Semantic UI Starter Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Getting Started with this Repo
* Fork this repository
* Clone your local repository with command `git clone <local repository>`
* Install dependencies with command `npm install`
* Start developing locally, run development server with command `ng serve`

## Adding New Files (Components and Services)
New components and serivces can be generated using the Angular CLI, but additional steps are needed.

- Make sure you are inside your components folder (src/app/components), and run the command `ng generate component <component name>`
- You will notice that a new folder is created within the components folder containing your TS, HTML, CSS, and test files
- Next, you will need to open the *app.components.ts* file found within the src folder and list the component here (example below)

```
import { AppComponent } from './components/app/app.component';
import { ComponentName } from './path to component';

export const APP_COMPONENTS = [
    AppComponent,
    ComponentName
];
```
- Lastly, you will need to open the app.module.ts file and remove the new component's listing from the import statements as well as from the list of declarations. This step is done automatically by the Angular CLI, but we do not need this code.

```
import { AppComponent } from './components/app/app.component';
import { ComponentName } from './path to component'; -- REMOVE THIS

@NgModule({
    declarations: [
        ...APP_COMPONENTS,
        ComponentName -- REMOVE THIS
    ],
    imports: [...],
    providers: [...],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

- ***Alternatively, you can manually create components, the Angular CLI is just a quicker way to generate these files***

## Styles
Global styles are either inherited from the Semantic UI stylesheet or the ***styles.css*** file. To add *global* styles, update **styles.css**. Otherwise, styles specific to a component should be added to the CSS file associated with that component. For reference on using Semantic UI elements, please refer to the URLs listed in the Important Dependencies section (below).

## Important Dependencies

* [Angular5](https://angular.io/) - Framework
* [Angular CLI](https://cli.angular.io/) - CLI Reference
* [Semantic UI](https://semantic-ui.com/) - CSS Framework
* [ng2-semantic-ui](https://edcarroll.github.io/ng2-semantic-ui/#/getting-started) - Angular2+ Integration for Semantic UI
* [angular-datatables](https://l-lin.github.io/angular-datatables)


## Adding Dependencies
The easiest way to add dependencies is via npm with the command `npm install <dependency> --save` or `npm install <dependency> --save-dev`, depending on the usage.

Many libraries have their own instructions for use with an Angular project. 

Sometimes you will need to list dependency files in the ***.angular-cli.json*** file (you can reference this project's file for an example) in the scripts array, or reference the dependency in the ***app.module.ts*** file.

## Updating Dependencies
It is important to refresh your ***node_modules*** every once in a while to make sure your project has bug fixes associated with dependencies, as well as their latest features. An easy way to do this is to install the **rimraf** npm package using the command `npm install -g rimraf`. This is just a shortcut for the command `rm -rf`. To remove packages from your project, make sure you are in your project folder in the command line and run the command `rimraf node_modules` followed by `npm install`. This will remove all dependencies and do a fresh install. If the version for a dependency needs to be updated, this can be changed in the *package.json* file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
