# UTT Arena 2018

## Requirements

* [Node.js](https://nodejs.org/)
* [yarn](https://yarnpkg.com/)

## Installation

```
git clone git@github.com:ungdev/arena.utt.fr-2018.git
# or
git clone https://github.com/ungdev/arena.utt.fr-2018.git

cd arena.utt.fr-2018
yarn
```

## Configuration

```
# copy env file for all environments
cp .env .env.local
# makes your changes in .env.local, which will not be pushed
nano .env.local

# copy env file for development environment
cp .env.development .env.development.local
# makes your changes in .env.development.local, which will not be pushed
nano .env.development.local
```

## Development

```
yarn start
```

## Production build

```
yarn build
```
