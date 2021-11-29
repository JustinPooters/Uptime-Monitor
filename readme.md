# Uptime Monitor

Hi! Welcome to my Uptime Monitor project page. I made a NodeJS Uptime monitor to monitor servers in a cool looking way.

## Description

Uptime monitor is made in NodeJS, with as little Dependencies as needed. Its working with MySQL and JSON. With MySQL we post and get status of the servers

## Getting Started

### Dependencies

* To host this i recommend a server with at least 1GB ram. Due to the MySQL module.
* 5GB Free disk space
* Linux or Windows (Linux recommended)
* NodeJS & NPM (because yarn sucks)
* Open firewall ports on port 80 and port 3306

### Installing

* Download the files via The download option or via the Releases tab on the right side of the webpage
* Edit the `servers.json` and replace the servers in the JSON Array with your own servers IPv4's or FQDNs
* To download the files and install the node modules please execute the following command in the terminal
```
git clone https://github.com/justinpooters/uptime-monitor.git

cd Uptime-Monitor

npm i 
```

### Executing program

* To start the program there is one easy command to run
```
node index.js
```
or
```
npm start
```

## Help

If you encounter any issues please open a issue on the issue page and i'll look at it asap. If you are missing features. Well sorry, thats why its open source. Want more features? Add them your self. :P

If you only want the front-end code. Please check [THIS REPOSITORY](https://github.com/justinpooters/uptime-monitor-frontend). It includes all front-end in plain HTML / CSS

## Authors

Contributors names and contact info

[Justin Pooters](https://twitter.com/justinpooters)  

If you want to be here, Submit a pull-request with an awesome update, i'll fully put your details here (twitter handle on your name)


## Version History

* 0.1
    * Initial Release with front-end repository

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
