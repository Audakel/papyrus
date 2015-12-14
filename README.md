# Papyrus
A simple way for microfinance institutions to embrace modern technology and leave the cluter of paper filled offices behind. Create and manage online forms. 

Special thanks to [@mchapman](https://github.com/mchapman) and [@forms-angular](https://github.com/forms-angular/forms-angular) for the core of this project.


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

##Todo Task List:
- [ ] support multiple MFIS
- [ ] create forms on site instead of just requesting
- [ ] link to @mifosx
- [ ] better mobile support
- [x] a few test forms
