# Cris' Blog

This project aims to showcase two very popular ways to handle the application state without using external dependencies. Although the two versions can get the job done in simple applications like this one, there is some downside when choosing one over the other, and to explain it better I would like to split the concepts into multiple small topics and demonstrate how the second version scale better over the first one:

### Prop drilling:
Is very common to see applications using the pattern “Stateful and Stateless components”, where the components in a higher level are the ones in charge of orchestrating and persist the state and later pass it to components of deep levels, this is what normally can also be referred as “Prop Drilling”, and can be an issue when elements that are far away in the hierarchy of the element tree needs to access to the state that is held in the main components. The second example fixes this issue by using a singleton service that can be injected into any level of the application without compromising state duplication.

### Global State
Sharing state is also some of the common problems faced in application development, and the way many developers try to fix it is by enabling bidirectional communication between components, and this is a very difficult application to maint and predict. Using a single source of truth allows making applications more predictable and easier to test. In the React and Angular ecosystems, we have Redux and NgRx. For simple applications, it is more recommendable to start with a Service-oriented approach combined with RxJS BehaviorSubject observable. The second versions showcase how this is possible in a minimal way.

## Versions:

- **Local State Component**: Contains the basic example using local component state to keep the list of the loaded posts
  - Branch: `main`
  - Demo: https://demo.cristianmartinez.co/

- **Global State Service**: Contains the extended version of the `main` branch application using global state supported by RxJS `BehaviorSubject` Observable.

  - Branch: `feat/rxjs-state`
  - Demo: https://blog-lxlghirvt.vercel.app/

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
