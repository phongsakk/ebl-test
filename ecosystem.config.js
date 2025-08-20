module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.'
  }],

  deploy : {
    server1 : {
      user : 'ec2-user',
      host : 'ec2-43-208-67-71.ap-southeast-7.compute.amazonaws.com',
      key  : '~/.ssh/think-bit-aws-th.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:phongsakk/ebl-test.git',
      path : '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy' : `
          npm install && 
          npx pm2 reload ecosystem.config.js --env production &&
          sudo cp ./ecosystem.conf /etc/nginx/conf.d &&
          sudo systemctl reload nginx.service
        `,
      'pre-setup': ''
    },
    server2 : {
      user : 'ec2-user',
      host : 'ec2-43-208-150-32.ap-southeast-7.compute.amazonaws.com',
      key  : '~/.ssh/think-bit-aws-th.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:phongsakk/ebl-test.git',
      path : '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy' : `
          npm install && 
          npx pm2 reload ecosystem.config.js --env production &&
          sudo cp ./ecosystem.conf /etc/nginx/conf.d &&
          sudo systemctl reload nginx.service
        `,
      'pre-setup': ''
    }
  }
};
