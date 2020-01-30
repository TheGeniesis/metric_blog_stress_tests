init:
	test -f docker-compose.yaml || cp docker-compose.yaml.dist docker-compose.yaml
	docker-compose run -T --rm node npm i

start:
	docker-compose up -d

generate:
	docker-compose run -T --rm node npm run artillery generateTraffic.yaml

remove:
	docker-compose down -v
