# Pakayelistli
Pakayelistli significa "salud" en [nahuatl](https://es.wikipedia.org/wiki/N%C3%A1huatl)

Este sitio está publicado en: [salud.ojtli.jgutix.com](salud.ojtli.jgutix.com)

Este proyecto es parte de la iniciativa de Google Map: [https://cloud.google.com/blog/products/maps-platform/supporting-not-profit-covid-19-response-efforts-google-maps-platform-credits](https://cloud.google.com/blog/products/maps-platform/supporting-not-profit-covid-19-response-efforts-google-maps-platform-credits) 
y permite encontrar el hospital mas cercano a partir de una dirección nica, por defecto se muestran los hospitales habilitados para atender COVID19, pero hay filtros para buscar otros hospitales públicos y privados.

Puedes contribuir a la lista de hospitales aquí: [src/app/hospitals.ts](src/app/hospitals.ts)

Las direcciones nicas están geocodificadas por: [Ojtli](ojtli.jgutix.com)

Read this in other languages: [English](README.md), [Spanish](README.es.md)

## Before Building
Make sure to add your Google Maps' key and Ojtli keys in app.module.ts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
