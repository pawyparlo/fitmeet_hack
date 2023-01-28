# Bring up containers (detached)
up:
	docker-compose up -d

# Rebuild and bring up containers (detached)
up-rebuild:
	docker-compose up -d --build --force-recreate

# Stop running containers
stop:
	docker-compose stop

# Start stopped containers
start:
	docker-compose start

# Restart containers
restart:
	docker-compose restart

# Stops containers and removes containers, networks, volumes, and images created by up
down:
	docker-compose down -v --rmi 'local'

# Bring up interactive shell that has access to Django models
django-shell:
	docker-compose exec web python manage.py shell

# Make migrations and migrate (ie: update models in the database)
migrations:
	docker-compose exec web python manage.py makemigrations 
	docker-compose exec web python manage.py migrate

# Load the test datasets found in the test_data/ directory
# loaddata:
#	docker-compose exec web python manage.py loaddata test_data/clients.json

# See all registered celery tasks
list-tasks:
	docker-compose exec web celery -A Hull inspect registered

test:
	docker-compose exec web python manage.py test

superuser:
	docker-compose exec web python manage.py createsuperuser

test-coverage:
	docker-compose exec web coverage run --source='main' manage.py test main
	docker-compose exec web coverage report -m

lint:
	docker-compose exec web python -m pylint --load-plugins pylint_django main

dump-db:
	docker-compose exec web python manage.py dumpdata --natural-foreign --natural-primary -e contenttypes -e auth.Permission -o db_dump.json

load-db:
	docker-compose exec web python manage.py loaddata db_dump.json

# Blow it up, rebuild and reload the data and stops running container in order to be invoked by `docker-compose up`
hard-restart:
	make down
	make up-rebuild
	make migrations
#   make loaddata
#	make test
#	make stop
