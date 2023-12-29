jenkinsapi
=================

## Install

<pre>
npm install jenkinsapi
</pre>

## Usage

### Setup

```javascript
var jenkinsapi = require('jenkinsapi');

// no auth
var jenkins = jenkinsapi.init("http://jenkins.com");

// username/password
var jenkins = jenkinsapi.init("http://username:password@jenkins.com");

// API Token
var jenkins = jenkinsapi.init('https://username:token@jenkins.com');
```


### Builds

#### build_with_params
```javascript
jenkins.build_with_params('job-in-jenkins', (optional){depth: 1, <param>:<value>, token: 'jenkins-token',...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```

#### console output
```javascript
jenkins.console_output('job-in-jenkins', 'buildname', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```

#### build info
```javascript
jenkins.build_info('job-in-jenkins', 'build-number', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```


#### all builds
```javascript
jenkins.all_builds('job-in-jenkins', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```


### Jobs

#### all jobs
```javascript
jenkins.all_jobs((optional){token: 'jenkins-token', ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```


#### job info
```javascript
jenkins.job_info('job-in-jenkins', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```

#### enable job
```javascript
jenkins.enable_job('job-in-jenkins', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});
```
