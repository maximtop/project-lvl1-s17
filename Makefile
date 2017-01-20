install:
	yarn

clean:
	rm -rf dist

build: clean
	npm run build

run:
	npm run babel-node -- 'src/bin/brain-prime.js' 10

publish:
	npm publish

lint:
	npm run eslint