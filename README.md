# apiREST-ts
RESTful API using NodeJS, express and Sequelize written in Typescript

## Progress
<table>
  <thead>
  <tr>
    <th style="text-align: center;" colspan="2">Version</th>
    <th style="text-align: left;">Change Log</th>
    <th style="text-align: center;">Relase Date</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td style="text-align: center;">1.0.0</td>
    <td style="text-align: center;"><img src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/check-circle-512.png" width="25" height="22" /></td>
    <td style="text-align: left;">Stable (this version)</td>
    <td style="text-align: center;">2020/01/02</td>
  </tr>
  <tr>
    <td style="text-align: center;">1.1.0</td>
    <td style="text-align: center;"><img src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/check-circle-512.png" width="25" height="22" /></td>
    <td style="text-align: left;">Adding Selenium Test (with example)</td>
    <td style="text-align: center;">2020/02/03</td>
  </tr>
  <tr>
    <td style="text-align: center;">1.2.0</td>
    <td style="text-align: center;"><img src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/circle-512.png" width="25" height="22" /></td>
    <td style="text-align: left;">Completing authentication and adding test page</td>
    <td style="text-align: center;">2020/02/02</td>
  </tr>
  </tbody>
</table>

## First steps
apiREST.ts is built using NodeJS; at the first NodeJS must be installed (https://nodejs.org/it/), if the computer is ready you can launch the command ```npm install``` (this command will install all NodeJS's missing modules so please be careful about your network connection).

## Project building
In this section I have listed all scripts needed to build apiREST.ts.

#### Unix-like Operative Systems (MAC OS, Linux)
```
npm run build:dev         //BUILD for DEVELOPMENT environment
npm run build:prod        //BUILD for PRODUCTION environment
npm run run:dev           //RUN DEVELOPMENT environment: every change is run at realtime
npm run run:prod          //RUN PRODUCTION environment: the changes don't run at realtime
```

#### Windows Operative Systems
```
npm run build:win-dev         //BUILD for DEVELOPMENT environment
npm run build:win-prod        //BUILD for PRODUCTION environment
npm run run:win-dev           //RUN DEVELOPMENT environment: every change is run at realtime
npm run run:win-prod          //RUN PRODUCTION environment: the changes don't run at realtime
```

## Test Project
Tests are implementated using SELENIUM:

#### Unix-like Operative Systems (MAC OS, Linux)
```
npm run build:test
```

#### Windows Operative Systems
```
npm run build:win-test
```

The command to run the test project is ```run:test```.
