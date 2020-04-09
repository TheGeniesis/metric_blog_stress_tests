# Metric application
![NODE 10](https://img.shields.io/badge/NODE-10-green)
![ARTILLERY 1](https://img.shields.io/badge/ARTILLERY-1-green)

This application was created to generate traffic for [metric application](https://github.com/TheGeniesis/metric_blog/tree/master/public)

## Pre-requirements
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Task](https://taskfile.dev) (optional, you can run commands from `taskfile.yaml` manually)

> Application wasn't tested on Windows

## Installation
- Run `task init` command in main directory

## Generate traffic
- Run `task generate` command in main directory
> Application generates traffic for http://localhost by default.
> 
>To change it, please change `config.target` in `config/config.yaml` file 

## Remove application
- Run `task remove` command in main directory

## Custom scenarios
To add/modify current scenarios please edit `phases/phases.json` file 
