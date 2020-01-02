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
    <td style="text-align: center;"><img src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/circle-512.png" width="25" height="22" /></td>
    <td style="text-align: left;">Completing authentication and adding test page</td>
    <td style="text-align: center;">2020/02/02</td>
  </tr>
  </tbody>
</table>

## First steps
apiREST.ts use NodeJS so you have to install NodeJS on your machine (https://nodejs.org/it/), when your machine is ready you can launch ```npm install``` command (remember to be under a wireless network 'cause it downloads all modules used by the application).

## Project building
apiREST.ts is written in Typescript so it has been builded.

The build process create a new 'dist' directory and it is ran with the command (windows and unix-like)
```
npm run build
```

### Executing Server
#### Unix-like Operative Systems (MAC OS, Linux)
```
npm run build:unix-dev    //Development environment: every change is run at realtime
npm run build:unix-test   //TEST environment: the changes don't run at realtime
npm run build:unix-prod   //PRODUCTION environment: the changes don't run at realtime
```

#### Windows Operative Systems
```
npm run build:win-dev    //Development environment: every change is run at realtime
npm run build:win-test   //TEST environment: the changes don't run at realtime
npm run build:win-prod   //PRODUCTION environment: the changes don't run at realtime
```