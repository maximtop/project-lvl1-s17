install:
	yarn

build:
	rm -rf dist
	npm run build

run:
	npm run babel-node -- 'src/bin/$(G)' 10

publish:
	npm publish