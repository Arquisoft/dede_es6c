# DeDe es6c
[![pages-build-deployment](https://github.com/Arquisoft/dede_es6c/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Arquisoft/dede_es6c/actions/workflows/pages/pages-build-deployment)
[![CI for ASW2122](https://github.com/Arquisoft/dede_es6c/actions/workflows/asw2122.yml/badge.svg)](https://github.com/Arquisoft/dede_es6c/actions/workflows/asw2122.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_dede_es6c&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_dede_es6c)
[![codecov](https://codecov.io/gh/Arquisoft/dede_es6c/branch/master/graph/badge.svg?token=QHRw41aid0)](https://codecov.io/gh/Arquisoft/dede_es6c)
[![Gatling](https://github.com/UO258472/Gatling_for_dede_es6c/blob/main/gatling.svg)](https://github.com/UO258472/Gatling_for_dede_es6c)
[![AWS](https://github.com/UO258472/Gatling_for_dede_es6c/blob/main/aws.png)](http://35.173.133.14:3000/)
[![AZURE](https://github.com/UO258472/Gatling_for_dede_es6c/blob/main/Microsoft_Azure_Logo.svg.png)](http://20.117.75.148:3000/)
[![HEROKU](https://github.com/UO258472/Gatling_for_dede_es6c/blob/main/heroku_svg.png)](https://dede-es6c-webapp.herokuapp.com/)


<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

Este proyecto es un ejemplo basico de un sitio web utilizando **React** con **Typescript** y un endpoint usando **NodeJS** con **express**

## Guia de inicio rápido

<mark>Si tienes instalados node.js y npm, asegurate de actualizarlos antes de intentar construir las imagenes</mark>

Si quieres ejecutar el proyecto necesitarás [git](https://git-scm.com/downloads), [Node.js and npm](https://www.npmjs.com/get-npm) y [Docker](https://docs.docker.com/get-docker/). Asegurate de tenerlos instalados en tu equipo. Descarga el proyecto con `git clone https://github.com/pglez82/asw2122_0`. La manera más rápìda de ejecutar todo es con Docker.

```bash
docker-compose up --build
```
Este comando creará dos imagenes de docker si no existen en tu equipo (la webapp y la restapi) y lanzará un contenedor de mongoDB. Además lanzará contenedores de Prometheus y Grafana para monitorizar el servicio web. Deberias ser capaz de acceder a todo desde aqui:

 - [Webapp - http://localhost:3000](http://localhost:3000)
 - [Ejemplo llamada a RestApi - http://localhost:5000/api/users/list](http://localhost:5000/api/users/list)
 - [Metricas RestApi - http://localhost:5000/metrics](http://localhost:5000/metrics)
 - [Servidor Prometheus - http://localhost:9090](http://localhost:9090)
 - [Servidor Grafana http://localhost:9091](http://localhost:9091)
 
Si quieres ejecutar el proyecto sin Docker primero complila y ejecuta la restapi:

```shell
cd restapi
npm install
npm start
```
a continuación la webapp:
```shell
cd webapp
npm install
npm start
```

Deberias ser capaz de acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Mas información
Encontrarás más información sobre el repositorio en los otros archivos README:
- Documentación: https://github.com/Arquisoft/dede_es6c/tree/master/docs
- Webapp: https://github.com/Arquisoft/dede_es6c/tree/master/webapp
- Restapi: https://github.com/Arquisoft/dede_es6c/tree/master/restapi


Miembros del equipo:
Germán Díaz González UO258472
Mateo Garcia Subiran UO278193
Álvaro García Peña UO275778
Luis Manuel González Baizán UO269502
María Fernández Rojo UO263595
Daniel Fernández Bernardino UO269783
