default: help

help:
	@echo "update         - get latest sources"
	@echo "minify         - makes JavaScript download and run faster"
	@echo "lint           - checks JavaScript files for style issues"
	@echo "test           - runs JavaScript unit tests"
	@echo "example        - creates a simple example"
	@echo "ext-chr-gmail  - creates the Google Chrome / Google Mail extension"
	@echo "documentation  - generates documentation. Requires jsdoc (3.2) in PATH"
	@echo "build          - build the rolled-up output"

OUT=index.js
BROWSER=resources/openpgp.js
BROWSERIFY=node_modules/.bin/browserify

all: $(OUT) $(BROWSER)

update: update-me update-deps

update-me:
	@git pull

update-deps:
	@git submodule foreach git pull
	npm install -d

example:
	@mkdir -p build
	@rm -f build/openpgpjs-0.x.zip
	@zip -j build/openpgpjs-0.x.zip resources/example.* resources/openpgp.min.js resources/jquery.min.js
	@echo "Have a look at build/openpgpjs-0.x.zip"

ext-chr-gmail:
	@./scripts/create_extension.sh

lint:
	@echo See http://code.google.com/closure/utilities/
	@./scripts/lint.sh

minify:
	@echo See http://code.google.com/closure/compiler/
	@./scripts/minimize.sh

test:
	node test/run.js

documentation:
	@jsdoc src -r -d doc


$(OUT):
	echo "(function (){ " > $(OUT)
	echo "\tvar navigator = 'node';" >> $(OUT)
	find src/ -type f -name '*.js' | xargs cat | awk '{ print "\t", $$0 }' >> $(OUT)
	echo "\texports.OpenPGP = _openpgp;" >> $(OUT)
	echo "\texports.openpgp = openpgp;" >> $(OUT)
	echo "})(this);" >> $(OUT)

build: $(OUT) $(BROWSER)

$(BROWSER): $(OUT)
	$(BROWSERIFY) $(OUT) -s openpgp > $(BROWSER)

clean:
	\rm -rf $(OUT) $(BROWSER)


.PHONY: clean test
