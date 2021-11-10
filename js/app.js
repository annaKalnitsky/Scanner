
//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 3000;
ProgressBar.init(
  [ 'Check for Updates',
    'Pre-Scan Operations',
    'Scan for Rootkits',
    'Scan Memory',
    
  ],
  'Scan Memory',
  'progress-bar-wrapper' // created this optional parameter for container name (otherwise default container created)
);