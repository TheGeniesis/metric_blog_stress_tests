# Metric application
![NODE 10](https://img.shields.io/badge/NODE-10-green)
![ARTILLERY 1](https://img.shields.io/badge/ARTILLERY-1-green)

This application was created to generate traffic for [metric application](https://github.com/TheGeniesis/metric_blog/tree/master/public)

## Pre-requirements
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- Unix system (to run [makefile](https://www.gnu.org/software/make/manual/html_node/Introduction.html))

> Application wasn't tested on Windows

## Installation
- Run `make init` command in main directory

## Run application
- Run `make start` command in main directory
- Open `http://localhost` to check if works
- To generate some example traffic use [prepared stress tests project](https://github.com/TheGeniesis/metric_blog_stress_tests)

## Remove application
- Run `make remove` command in main directory



# Install all dependencies
`npm i`

# Running command
`npm run artillery generateTraffic.yaml`
