all:
	bundle install
	npm install
	bundle exec jake
	./node_modules/.bin/browserify build/src/test.js --exports require --ignore system --ignore buffer --ignore assert --ignore nopt --ignore events --ignore util --ignore sys --ignore tty --ignore __browserify_process > test/jstest-browserify.js
